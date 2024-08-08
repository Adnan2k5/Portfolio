import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

export const NavBar = () => {
  const [activelink, setlink] = useState("home");
  const [scrolled,setscolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setscolled(true);
      } else {
        setscolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateLink = (values) => {
    setlink(values);
  };

  return (
    <div className={`nav-container z-50 p-5 transition-all duration-100 bg-transparent w-[100vw] ${scrolled ? 'fixed ' : ''}  backdrop backdrop-blur-md  flex`}>
      <div className="logo w-fit text-2xl">Adnan Ashraf</div>
      <div className="pages ml-[50px]  justify-start items-center flex">
        <ul className="flex text-xl gap-5">
          <li>
            <Link
              onClick={() => {
                onUpdateLink("home");
              }}
              className={` ${activelink ==='home' ? 'border-b-2 border-gray-100' : ""} hover:text-cyan-300 transition-all duration-250`}
              to="home" smooth={true} duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                onUpdateLink("skill");
              }}
              className={` ${activelink ==='skill' ? 'border-b-2 border-gray-100' : ""}hover:text-cyan-300 transition-all duration-250`}
              to="skill" smooth={true} duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                onUpdateLink("project");
              }}
              className={`${activelink ==='project' ? 'border-b-2 border-gray-100' : ""} hover:text-cyan-300 transition-all duration-250`}
              to="project" smooth={true} duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div className="social ml-[50rem] flex gap-5 items-center">
        <a className="w-[25px] rounded-xl"
          href="https://github.com/Adnan2k5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialGithub className="text-2xl w-[25px] transition-all duration-300 hover:text-cyan-300" />
        </a>
        <a className="rounded-lg w-[25px]"
          href="https://www.linkedin.com/in/adnan-ashraf-82320b280/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialLinkedin className="text-2xl  transition-all duration-300 hover:text-cyan-300" />
        </a>
        <a className="rounded-lg w-[25px]"
          href="https://instagram.com/a3nan._"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialInstagram className="text-2xl   transition-all duration-300 hover:text-cyan-300" />
        </a>
      </div>
      <div className="connect"></div>
    </div>
  );
};
