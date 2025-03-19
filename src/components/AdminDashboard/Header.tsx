import logo from "../../assets/images/logos/logo_animado.gif";

const Header = () => {
  return (
    <header className="bg-teal-500 text-white py-4 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src={logo.src} alt="Logo" className="h-16 w-16" />
        <h1 className="text-3xl font-extrabold">TAMI</h1>
      </div>
      <h2 className="text-xl font-extrabold tracking-wide">SECCIÓN: PRINCIPAL</h2>
    </header>
  );
};

export default Header;



