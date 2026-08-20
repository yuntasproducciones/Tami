import { useEffect, useRef } from "react";
import Swal from "sweetalert2";

const INACTIVITY_LIMIT = 30 * 60 * 1000
const WARNING_TIME = 20 * 60 * 1000
const COUNTDOWN_TIME = 15 * 1000;   
const COUNTDOWN_START = INACTIVITY_LIMIT - COUNTDOWN_TIME; // 45s

type Stage = "idle" | "warning" | "countdown";

const useInactivityLogout = () => {
    
  const lastActivity = useRef(Date.now());
  const stage = useRef<Stage>("idle");
  const countdownInterval = useRef<number | null>(null);

  useEffect(() => {

    const swalDarkClasses = () =>
      document.documentElement.classList.contains("dark")
        ? { popup: "swal-dark-popup", 
            title: "swal-dark-title", 
            htmlContainer: "swal-dark-text" }
        : {};

    const resetTimer = () => {
      lastActivity.current = Date.now();
      if (stage.current !== "idle") {
        stage.current = "idle";
        if (countdownInterval.current) clearInterval(countdownInterval.current);
        countdownInterval.current = null;
        Swal.close();
      }
    };

    window.addEventListener("click", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("scroll", resetTimer, true);

    const handleAutoLogout = async () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      await Swal.fire({
        title: "Sesión expirada",
        text: "Tu sesión se cerró por inactividad.",
        icon: "warning",
        confirmButtonText: "Aceptar",
        customClass: swalDarkClasses(),
      });
      window.location.href = "/";
    };

    const showWarning = () => {
      stage.current = "warning";
      Swal.fire({
        title: "Tu sesión expirará pronto",
        text: "Por inactividad, tu sesión se cerrará en breve.",
        icon: "warning",
        confirmButtonText: "Continuar sesión",
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: swalDarkClasses(),
      }).then((result) => {
        if (result.isConfirmed) resetTimer();
      });
    };

    const showCountdown = () => {
      stage.current = "countdown";
      let seconds = 15;
      Swal.fire({
        title: "Cierre de sesión inminente",
        html: `Tu sesión se cerrará en <b id="swal-countdown">${seconds}</b> segundos.`,
        icon: "error",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: swalDarkClasses(),
        didOpen: () => {
          countdownInterval.current = window.setInterval(() => {
            seconds -= 1;
            const el = document.getElementById("swal-countdown");
            if (el) el.textContent = String(seconds);
            if (seconds <= 0 && countdownInterval.current) {
              clearInterval(countdownInterval.current);
              countdownInterval.current = null;
            }
          }, 1000);
        },
      });
    };

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - lastActivity.current;

      if (elapsed >= WARNING_TIME && stage.current === "idle") showWarning();
      
      if (elapsed >= COUNTDOWN_START && stage.current === "warning") {
        Swal.close();
        showCountdown();
      }

      if (elapsed >= INACTIVITY_LIMIT) {
        clearInterval(interval);
        if (countdownInterval.current) clearInterval(countdownInterval.current);
        Swal.close();
        handleAutoLogout();
      }
    }, 1000);

    return () => {
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("scroll", resetTimer, true);
      clearInterval(interval);
      if (countdownInterval.current) clearInterval(countdownInterval.current);
    };
  }, []);

};

export default useInactivityLogout;