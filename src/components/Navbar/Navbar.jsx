import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Download,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
} from "../../assets/icons/Icons";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const navlinks = [
    {
      id: 1,
      text: "Features",
      link: "/#features",
      //   active: false,
    },

    {
      id: 2,
      text: "Privacy",
      link: "/privacy",
      //   active: false,
    },
    {
      id: 3,
      text: "Help Center",
      link: "/help",
      //   active: false,
    },
    {
      id: 4,
      text: "Blog",
      link: "/blog",
      //   active: false,
    },
    {
      id: 5,
      text: "For Business",
      link: "/business",
      //   active: false,
      className: "hidden",
    },
  ];

  return (
    <div>
      <div
        className={`mx-[30px] md:mx-[10px] pt-3 md:pt-6 md:flex justify-between items-center`}
      >
        <a href="/" className="hidden md:block cursor-pointer">
          <img
            src={logo}
            draggable={false}
            className={`max-w-[130px]`}
            alt="logo"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navlinks.map((navLink, index) => (
            <NavLink key={index} to={navLink.link}>
              {({ isActive }) => (
                <div
                  className={`md:text-[14px] before:content-[''] before:bg-[#25d366] before:absolute before:h-[2px] before:-bottom-1 before:transition-all before:duration-300 ${
                    isActive
                      ? "text-[#25d366] before:w-full"
                      : "text-[#1c1e21] before:w-[0px] hover:before:w-full"
                  } relative`}
                >
                  {navLink.text}
                </div>
              )}
            </NavLink>
          ))}
        </div>

        <div className={`hidden md:flex items-center gap-3`}>
          <NavLink to="/whatsapp-web">
            {({ isActive }) => (
              <div
                className={`text-[14px] before:content-[''] before:bg-[#25d366] before:absolute before:h-[2px] before:-bottom-1 before:transition-all before:duration-300 ${
                  isActive
                    ? "text-[#25d366] before:w-full"
                    : "text-[#1c1e21] before:w-[0px] hover:before:w-full"
                } relative`}
              >
                WhatsApp Web
              </div>
            )}
          </NavLink>

          <button
            className={`flex items-center gap-3 rounded-full bg-green p-[13px_16px] animate- transition-all duration-500 hover:bg-blackk hover:text-white border-blackk border-[1px] border-solid`}
          >
            Download
            <span>
              <Download />
            </span>
          </button>
        </div>

        {/* mobile naav */}
        <div className="md:hidden flex items-center justify-between">
          <div className="block md:hidden">
            <button
              className="space-y-1"
              onClick={() => setIsOpened(!isOpened)}
            >
              <div
                className={`transition-all duration-300 bg-blackk h-0.5 w-7 ${
                  isOpened
                    ? "rotate-45 translate-y-[0.26rem]"
                    : "translate-y-0 rotate-0"
                }`}
              />
              <div
                className={`transition-all duration-300 bg-blackk h-0.5 w-7 ${
                  isOpened ? "hidden" : "block"
                }`}
              />
              <div
                className={`transition-all duration-300 bg-blackk h-0.5 w-7 ${
                  isOpened
                    ? "-rotate-45 -translate-y-[0.2rem]"
                    : "translate-y-0 rotate-0"
                }`}
              />
            </button>
            <div
              className={`absolute block w-full mt-[35px] bg-red-400s  md:hidden z-10 transition-all duration-300 ${
                isOpened ? " translate-y-0" : "translate-x-[150%]"
              } pt-4 left-0 right-0`}
            >
              <ul className="mx-auto">
                <div className="flex flex-col gap-[30px] justify-between">
                  {navlinks.map((navLink, index) => (
                    <div
                      key={index}
                      className="bg-red-400s border-t"
                      onClick={() => setIsOpened(!isOpened)}
                    >
                      <li className="w-full mt5 py-2">
                        <a
                          href={navLink.link}
                          className="text-[#001534] text-[32px] leading-[1em] font-medium p-4 transition-all duration-300 hover:text-["
                        >
                          {navLink.text}
                        </a>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
              <div className="bg-black/80 mt-3 p-4 flex flex-col space-y-4 items-center">
                <button
                  className={`flex items-center justify-center gap-3  rounded-full bg-green p-[13px_32px] w-[300px] animate- transition-all duration-500 hover:bg-blackk hover:text-white`}
                >
                  Download
                  <span>
                    <Download />
                  </span>
                </button>
                <div className={`border-t w-full`}>
                  <div className="mt-3 flex justify-center items-center gap-4">
                    <Twitter />
                    <Youtube />
                    <Instagram />
                    <Facebook />
                  </div>
                </div>
                <div className="mt-3 flex  items-center justify-between space-x-9 text-white">
                  <div>
                    <p>Terms & Privacy Policy</p>
                    <p>
                      <span>{new Date().getFullYear()}</span>&copy; WhatsApp LLC
                    </p>
                  </div>
                  <div>
                    <select
                      type="text"
                      value={`English`}
                      className="w-[200px] bg-black font-semibold  p-3 outline-white outline pl-4 rounded-full text-base"
                    >
                      <option value="">English</option>
                      <option value="">English</option>
                      <option value="">English</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="/" className="cursor-pointer">
              <img
                src={logo}
                draggable={false}
                className={`max-w-[130px]`}
                alt="logo"
              />
            </a>
          </div>

          {/* download */}
          <div>
            <button
              className={`p-2 bg-green  animate- transition-all duration-500 hover:bg-blackk hover:text-white border-blackk border-[1px] rounded-full border-solid`}
            >
              <Download />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
