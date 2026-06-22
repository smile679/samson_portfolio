import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import Reveal from "@/components/motions/Reveal";
import phone from "@/assets/images/phone.png";
import { FaLaptopCode } from "react-icons/fa";
import { Home } from "lucide-react";
import { MdOutlineMenuOpen } from "react-icons/md";

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
    <header className="w-full fixed top-0 left-0 z-10 px-5 py-3 shadow-lg backdrop-blur-md">
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
          <div
            className="contact"
            type="button"
            onClick={() => {
              const button = document.getElementById("contact-button");
              button.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={phone} alt="contact" />
            <h3>Contact Me</h3>
          </div>
        )}
      </nav>

      <nav className="w-full flex justify-between items-center sm:hidden">
        <a href="/">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-amber-50">
            <FaLaptopCode />
            Portfolio<span className="animate-ping">..</span>
          </h2>
        </a>

        <Popover className="relative">
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
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-2 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-2 scale-95"
              >
                <Popover.Panel className="absolute right-0 top-14 w-sm rounded-b-lg bg-[#0c0c0cdc] backdrop-blur-md shadow-lg z-50">
                  <ul className="w-full flex flex-col justify-center items-center text-2xl">
                    {menu.map((item) => (
                      <li
                        key={item.to}
                        className="px-6 py-4 text-white hover:text-[#3EB489] hover:bg-white/5 transition cursor-pointer"
                        
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