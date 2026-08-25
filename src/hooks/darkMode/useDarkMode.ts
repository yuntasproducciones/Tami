import { useEffect, useState } from "react";

export const isDarkMode = (): boolean => {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
};

export const toggleDarkMode = (): boolean => {
  const isDark = document.documentElement.classList.contains("dark");
  console.log("Ya tenía DARK ANTES", isDark);

  if (isDark) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
    console.log("Clases DESPUÉS de quitar:", document.documentElement.className);
    return false;
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
    console.log("Clases DESPUÉS de agregar:", document.documentElement.className);
    return true;
  }
}
