import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

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
      text: "For Bussiness",
      link: "/bussines",
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
            className={`w-[130px]`}
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

        <div>
          <a href="/whatsapp-web">
            <p className="text-base">WhatsApp Web</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
