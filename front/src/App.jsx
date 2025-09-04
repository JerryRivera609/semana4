import { BsFillRecordFill } from "react-icons/bs";
import { CiDark, CiLight } from "react-icons/ci";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoAngular } from "react-icons/io";
import { FaVuejs, FaReact } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbMath } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { FaSquareInstagram, FaSquareWhatsapp, FaSquareGithub } from "react-icons/fa6";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Base from "./Pages/base";
import Babylonian from "./Pages/babylion";
import Weeks from "./Pages/week";

function App() {


  return (
    <>

      <div className="flex relative w-screen justify-center items-center px-36 py-16 h-screen ">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/background.webm" type="video/webm" />
        </video>
        <div className="relative z-100 w-full bg-white/30 backdrop-blur-sm border-black/30 border-1 rounded-4xl h-[calc(100vh-7.5rem)] shadow-[0_20px_40px_0_rgba(0,0,0,0.25)]">


          <div className="flex pl-4 pt-4 pb-2">

            <div className="flex-2/10 bg-white/30 w-full rounded-4xl shadow-[0_0px_20px_0_rgba(0,0,0,0.25)] p-2">
              <div className="flex text-3xl">
                <BsFillRecordFill className="text-[#FF605C]" />
                <BsFillRecordFill className="text-[#FFBD44]" />
                <BsFillRecordFill className="text-[#00CA4E]" />
              </div>
              <div className=" text-xl">
                <h2 className="pl-2 font-semibold text-gray-300">Jerry Rivera</h2>
                <ul className=" pt-3 text-[1.2rem] flex flex-col gap-2">
                  <li className="flex items-center gap-2 p-1">
                    <IoSearch />
                    <input type="text" className="rounded-xl w-40 bg-gray-100/50 py-1 px-3 text-sm" />
                  </li>
                  <li>
                    <a href="https://portafolio-jet-kappa.vercel.app/"
                      target="_black"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 transition-all duration-700 hover:bg-blue-50/50 hover:cursor-pointer rounded-xl pl-2"
                    >
                      <VscFileSubmodule />
                      Portafolio
                    </a>
                  </li>
                </ul>
                <h3 className="pl-2 text-sm pt-4 font-semibold text-gray-300">Favourites</h3>
                <h3 className="pl-2 text-sm pt-4 font-semibold text-gray-300">Locations</h3>
                <ul className="flex flex-col gap-1 pl-1">
                <li>
                    <Link to="/"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 text-gray-900 transition-all duration-700 hover:bg-blue-50/50 hover:cursor-pointer rounded-xl pl-2"
                    >
                      <TiHome />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/weeks"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 text-gray-900 transition-all duration-700 hover:bg-blue-50/50 hover:cursor-pointer rounded-xl pl-2"
                    >
                      <MdOutlineCalendarMonth />
                      Usuarios Registrados
                    </Link>
                  </li>
                  <li>
                    <Link to="/babylonian"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 text-gray-900 transition-all duration-700 hover:bg-blue-50/50 hover:cursor-pointer rounded-xl pl-2"
                    >
                      <TbMath />
                      Registrar Usuario
                    </Link>
                  </li>
                </ul>
                <h3 className="pl-2 text-sm pt-4 font-semibold text-gray-300">Contact Me</h3>
                <ul className="flex flex-col gap-1 pl-1">
                  <li>
                    <a href="https://www.linkedin.com/in/jerryrivera609/"
                      target="_blank"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 text-gray-900  transition-all duration-700 hover:bg-blue-50/50 hover:cursor-pointer rounded-xl pl-2 hover:text-[#0077B5]"
                    >
                      <IoLogoLinkedin />
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/jerry_609rivera"
                      target="_blank"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 text-gray-900 transition-all duration-700 hover:bg-blue-50/50 hover:cursor-pointer rounded-xl pl-2 hover:text-black"
                    >
                      <FaSquareInstagram />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/JerryRivera609"
                      target="_blank"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 text-gray-900 transition-all duration-700 hover:bg-blue-50/50 hover:cursor-pointer rounded-xl pl-2 hover:text-black"
                    >
                      <FaSquareGithub />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/980837493/?text=Hola, vengo de tu pagina web :)"
                      target="_blank"
                      className="flex items-center text-[1rem] font-semibold p-1 gap-2 text-gray-900 transition-all duration-700 hover:bg-blue-50/50 hover:cursor-pointer rounded-xl pl-2 hover:text-[#075E54]"
                    >
                      <FaSquareWhatsapp />
                      Whatsapp
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex-8/10 justify-center w-full items-center">
              <header className="flex justify-between border-b-1 border-black/30 px-6">
                <div className="pb-4 w-full text-center" >
                  <h1 className="text-2xl">Desarrollo Web Integrado</h1>
                  <div className="flex justify-center text-xl gap-1">
                    <RiJavascriptFill className="text-[#F7DF1E] transition-all duration-500 hover:scale-155" />
                    <BiLogoTypescript className="text-[#3178C6] transition-all duration-500 hover:scale-155" />
                    <IoLogoAngular className="text-[#DD0031] transition-all duration-500 hover:scale-155" />
                    <FaReact className="text-[#61DAFB] rotate-180 animate-spin-slow transition-all duration-500 hover:scale-[1.3]" />
                    <FaVuejs className="text-[#42B883] transition-all duration-500 hover:scale-155" />
                  </div>
                </div>
                
              </header>

              <div className="flex h-[calc(100vh-15.4rem)] gap-4 ">
                {/*CONTENIDO*/}
                <div className="flex-8/10  ">
                  <Routes>
                    <Route path="/" element={<Base />} />
                    <Route path="/babylonian" element={<Babylonian />} />
                    <Route path="/weeks" element={<Weeks />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-fuchsia-100/50 rounded-b-4xl text-gray-900 font-semibold flex justify-center p-1">
            <h2>
              2 items, 476,32 GB available
            </h2>
          </footer>

        </div>
      </div>

    </>
  )
}

export default App
