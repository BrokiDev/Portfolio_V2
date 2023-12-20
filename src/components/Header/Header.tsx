import { Link } from "react-router-dom";
import BoxSvgComponent from "../SvgComponent/BoxSvgComponent";
import { useHeaderContext } from "../../context/HeaderContext";

export default function Header() {
  const {
    boxSvgTextLogo,
    boxSvgTextContact,
    boxSvgTextProject,
    handleChangeText,
    handleDarkMode,
    handleOpenModal,
  } = useHeaderContext();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex flex-col  items-center justify-center gap-4 py-5 sm:flex-row">
        <Link to={"/"} className="mb-4 sm:mb-0">
          <BoxSvgComponent width={190} height={54} text={boxSvgTextLogo} />
        </Link>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button onClick={() => handleOpenModal("project")}>
            <BoxSvgComponent width={190} height={54} text={boxSvgTextProject} />
          </button>
          <button
            className="transition duration-150 ease-in-out"
            onClick={() => handleOpenModal("contact")}
          >
            <BoxSvgComponent width={190} height={54} text={boxSvgTextContact} />
          </button>
          <div className="flex items-center space-x-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                onClick={handleChangeText}
                className="sr-only peer"
                type="checkbox"
              />
              <div className="w-12 h-6 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['🇪🇸'] before:absolute before:h-4 before:w-4 before:top-1/2 before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg  peer-checked:shadow-lg  after:content-['🇺🇸'] after:absolute  after:rounded-full after:top-[4px] after:right-2 after:translate-y-full after:w-4 after:h-4 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-0 peer-checked:after:translate-y-[-0]"></div>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                onClick={handleDarkMode}
                className="sr-only peer"
                type="checkbox"
              />
              <div className="w-12 h-6 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-4 before:w-4 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg  peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-4 after:h-4 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-90 peer-checked:after:translate-y-[-0]"></div>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
