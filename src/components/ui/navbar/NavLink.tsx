interface NavLinkProps {
  isForNavBar: boolean;
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ isForNavBar, to, children }) => (
  <>
    <a
      href={to}
      className={
        isForNavBar
          ? "text-white hover:text-teal-300 transition-colors duration-500 text-lg font-bold relative group"
          : "text-verde_turquesa hover:underline xs:text-4xl block xs:pb-5 pt-5 md:font-normal"
      }
    >
      {children}
      {isForNavBar && (
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-300 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      )}
    </a>
  </>
);

export default NavLink;
