import { NavLink } from "react-router-dom";
import OutlinedButton from "./button";
import { DownloadIcon } from "../../assets/icons/download";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navlinks = [
    {
      id: 1,
      text: "Featues",
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
    },
  ];

  return (
    <div>
      <div className={`mx-[30px] px-1 pt-6 flex justify-between items-center`}>
        <a href="/" className="cursor-pointer">
          <img
            src={logo}
            draggable={false}
            className={`max-w-[130px]`}
            alt="logo"
          />
        </a>

        <div className="flex items-center gap-10">
          {navlinks.map((navLink, index) => (
            <NavLink key={index} to={navLink.link}>
              {({ isActive }) => (
                <div
                  className={`before:content-[''] before:bg-[#25d366] before:absolute before:h-[2px] before:-bottom-1 before:transition-all before:duration-300 ${
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

        <div className={`flex items-center gap-6`}>
          <NavLink to="/whatsapp-web">
            {({ isActive }) => {
              <span
                className={`before:content-[''] before:bg-[#25d366] before:absolute before:h-[2px] before:-bottom-1 before:transition-all before:duration-300 ${
                  isActive
                    ? "text-[#25d366] before:w-full"
                    : "text-[#1c1e21] before:w-[0px] hover:before:w-full"
                } relative`}
              >
                Hello
              </span>;
            }}
          </NavLink>
          <button
            className={`flex items-center gap-5 rounded-full bg-green p-[14px_20px] animate- transition-all duration-500 hover:bg-blackk hover:text-white border-blackk border-[1px] border-solid`}
          >
            Download
            <span>
              <DownloadIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
