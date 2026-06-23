import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import Reveal from "@/components/motions/Reveal";
import { FaLaptopCode } from "react-icons/fa";
import { MdConnectWithoutContact, MdOutlineMenuOpen } from "react-icons/md";

import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MdClose } from "react-icons/md";

const Header = () => {
  const location = useLocation();

  const menu = [
    {
      to: "Hero",
      title: "Home",
    },
    {
      to: "About",
      title: "About",
    },
    {
      to: "Service",
      title: "Service",
    },
    {
      to: "Skills",
      title: "Skills",
    },
    {
      to: "Contact",
      title: "Contact",
    },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 px-5 py-3 shadow-lg backdrop-blur-md">
      <nav className="max-w-6xl mx-auto hidden sm:flex items-center justify-between">
        <a href="/">
          <h2 className="flex items-center gap-2 sm:ml-5 text-2xl font-bold text-amber-50">
            <FaLaptopCode />
            Portfolio<span className="animate-ping">..</span>
          </h2>
        </a>
        {location.pathname === "/projects" ? null : (
          <Reveal>
            <ul className="flex sm:gap-6  text-lg">
              {menu &&
                menu.map((item) => (
                  <li
                    key={item.to}
                    className="font-bold text-[#3EB489] hover:text-[#45f8b7]  hover:-translate-y-0.5 cursor-pointer
                      text-shadow-emerald-600/50 hover:text-shadow-lg hover:scale-110"
                  >
                    <Link
                      activeClass="text-[#45f8b7] border-b-2 pb-0.5"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-75}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </Reveal>
        )}
        {location.pathname === "/projects" ? null : (
          <button
            className="px-3 py-2 text-white bg-emerald-600 hover:bg-emerald-600/50
            flex justify-center items-center gap-2 rounded-sm cursor-pointer"
            onClick={() => {
              const button = document.getElementById("Contact");
              button.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <MdConnectWithoutContact size={25} />
            <h3>Hire Me</h3>
          </button>
        )}
      </nav>

      <nav className="relative w-full flex justify-between items-center sm:hidden">
        <a href="/">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-amber-50">
            <FaLaptopCode />
            Portfolio<span className="animate-ping">..</span>
          </h2>
        </a>

        <Popover>
          {({ open, close }) => (
            <>
              {/* Button */}
              <Popover.Button className="cursor-pointer bg-emerald-600 p-1 rounded-md shadow-emerald-600/50 shadow-lg focus:outline-none">
                {open ? (
                  <MdClose size={40} className="text-white" />
                ) : (
                  <MdOutlineMenuOpen size={40} className="text-white" />
                )}
              </Popover.Button>

              {/* Dropdown */}
              <Transition
                as={Fragment}
                enter="transition-transform transition-opacity duration-300 ease-out origin-top"
                enterFrom="opacity-0 scale-y-0"
                enterTo="opacity-100 scale-y-100"
                leave="transition-transform transition-opacity duration-200 ease-in origin-top"
                leaveFrom="opacity-100 scale-y-100"
                leaveTo="opacity-0 scale-y-0"
              >
                <Popover.Panel className="absolute left-0 right-0 top-16 rounded-b-lg bg-[#0c0c0cdc] backdrop-blur-md shadow-lg z-40">
                  <ul className="w-full flex flex-col justify-center items-center text-2xl">
                    {menu.map((item) => (
                      <li
                        key={item.to}
                        className=" px-6 py-4 text-white hover:text-[#3EB489] hover:bg-white/5 transition cursor-pointer"
                      >
                        <Link
                          activeClass="text-[#45f8b7] font-bold bg-[#1c2020f8] border-b-2"
                          to={item.to}
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-50}
                          onClick={() => close()}
                          className="font-semibold"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </nav>
    </header>
  );
};

export default Header;