import NavLink from "../navbar/NavLink";
import NavSocialMediaLink from "./NavSocialMediaLink";
import socialMediaLinks from "../../../data/socialMedia.data";
import { useState } from "react";

interface NavLink {
  url: string;
  texto: string;
}

interface SideMenuProps {
  links: NavLink[];
}

const SideMenu: React.FC<SideMenuProps> = ({ links }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function changeSideBarStatus() {
    setIsSidebarOpen((x) => !x);
    console.log(isSidebarOpen);
  }
  return (
    <>
      <button className="w-9 h-9 lg:hidden" onClick={changeSideBarStatus}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 18L20 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M4 6L20 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
      {isSidebarOpen && (
        <div className="fixed top-32 left-0 z-[1] min-h-[calc(100vh-8rem)] max-h-[calc(100vh-8rem)] bg-white px-1 xs:px-8 py-8 w-full xs:max-w-[425px] rounded-l-none rounded-r-[50px] overflow-scroll">
          <div className="border-b-4 border-verde_turquesa pb-5">
            <div className="flex pl-5">
              <img
                src="aa"
                className="max-w-[50px] xs:max-w-[100px]"
                alt="Ícono de usuario"
              />
              <div className="flex flex-col justify-center font-semibold xs:text-4xl">
                <p>HOLA!</p>
                <p>Usuario</p>
              </div>
            </div>
          </div>
          <div className="pl-4">
            {links.map((item, index: number) => (
              <NavLink key={index} isForNavBar={false} to={item.url}>
                {item.texto}
              </NavLink>
            ))}
          </div>
          <div>
            <p className="border-t-4 border-verde_turquesa text-verde_turquesa font-bold text-center pt-1">
              Síguenos en
            </p>
            <div className="mt-2 flex flex-wrap justify-around space-x-4 border-b-4 border-verde_turquesa pb-2">
              {socialMediaLinks.map((item, index) => (
                <NavSocialMediaLink
                  key={index}
                  image={item.image.src}
                  link={item.url}
                  social={item.social}
                />
              ))}
            </div>
          </div>
          <div className="pl-4">
            <p className="text-verde_turquesa font-bold pt-2">
              Horario de atención
            </p>
            <div className="font-semibold">
              <p>Lunes a Viernes</p>
              <p>9:00 am a 9:00 pm</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
