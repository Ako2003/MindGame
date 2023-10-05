import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MGLogo from "./MGLogo";
import ProfileModal from "./ProfileModal";
import ButtonRounded from "./UI/ButtonRounded";
import useClickOutside from "../hooks/useClickOutside";
import { BiMenu } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

const NavbarAfterLogin = () => {
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const navRef = useRef();
  useClickOutside(navRef, () => setToggleMenu(false));

  const navigate = useNavigate();

  return (
    <>
      <nav ref={navRef} className="navbar">
        <div className="navbar-container">
          <MGLogo />

          {/* right */}
          <div className="hidden sm:flex gap-3">
            <ButtonRounded outlined onClick={() => setIsProfileModalVisible(true)}>
              My profile
            </ButtonRounded>
            <ButtonRounded>Log out</ButtonRounded>
          </div>

          {/* burger */}
          <BiMenu className="text-3xl sm:hidden cursor-pointer" onClick={() => setToggleMenu((prev) => !prev)} />
        </div>

        {/* menu */}
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              transition={{ duration: 0.4 }}
              initial={{ opacity: 0, scale: 0.8, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -40 }}
              className="absolute top-20 right-0 md:hidden flex flex-col items-center gap-4 py-4 px-8 rounded-lg border-4 border-lightener-200 bg-darkener-200 shadow-card-200 backdrop-blur-xl font-medium text-lg origin-top"
            >
              <ButtonRounded
                outlined
                onClick={() => {
                  setIsProfileModalVisible(true);
                  setToggleMenu(false);
                }}
              >
                My profile
              </ButtonRounded>
              <ButtonRounded onClick={() => setToggleMenu(false)}>Log out</ButtonRounded>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ProfileModal isVisible={isProfileModalVisible} setIsVisible={setIsProfileModalVisible} />
    </>
  );
};

export default NavbarAfterLogin;
