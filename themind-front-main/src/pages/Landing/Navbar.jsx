import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/all";
import useClickOutside from "../../hooks/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";
import MGLogo from "../../components/MGLogo";
import ButtonRounded from "../../components/UI/ButtonRounded";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navRef = useRef();

  useClickOutside(navRef, () => setToggleMenu(false));

  const navigate = useNavigate();

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-container">
        {/* left side */}
        <div className="flex items-center gap-9">
          {/* logo */}
          <MGLogo />

          {/* elements */}
          <ul className="hidden md:flex gap-6">
            <li>
              <a href="#home" className="cursor-pointer text-neutral-400 hover:text-white duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#howtoplay" className="cursor-pointer text-neutral-400 hover:text-white duration-300">
                How to play
              </a>
            </li>
            <li>
              <a href="#about" className="cursor-pointer text-neutral-400 hover:text-white duration-300">
                About us
              </a>
            </li>
          </ul>
        </div>

        {/* right */}
        <div className="hidden md:flex gap-3">
          <ButtonRounded onClick={() => navigate("/auth/login")} outlined>
            Login
          </ButtonRounded>
          <ButtonRounded onClick={() => navigate("/auth/register")}>Register</ButtonRounded>
        </div>

        {/* burger */}
        <BiMenu className="text-3xl md:hidden cursor-pointer" onClick={() => setToggleMenu((prev) => !prev)} />
      </div>

      {/* menu */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.ul
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, scale: 0.8, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -40 }}
            className="absolute top-20 right-0 md:hidden flex flex-col items-center gap-4 py-4 px-8 rounded-lg border-4 border-lightener-200 bg-darkener-200 shadow-card-200 backdrop-blur-xl font-medium text-lg origin-top"
          >
            <li onClick={() => setToggleMenu(false)}>
              <a href="#home" className="cursor-pointer text-neutral-400 hover:text-white duration-300">
                Home
              </a>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <a href="#howtoplay" className="cursor-pointer text-neutral-400 hover:text-white duration-300">
                How to play
              </a>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <a href="#about" className="cursor-pointer text-neutral-400 hover:text-white duration-300">
                About
              </a>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <button
                className="bg-transparent py-1 px-4 rounded-full border border-lightener-200 hover:text-white duration-300"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </button>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <button
                className="bg-lightener-200 border border-transparent py-1 px-4 rounded-full hover:text-white duration-300"
                onClick={() => navigate("/auth/register")}
              >
                Register
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
