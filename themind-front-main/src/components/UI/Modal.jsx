import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import ReactDOM from "react-dom";
import useClickOutside from "../../hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Modal = ({ isVisible, setIsVisible, title, children, size, className }) => {
  const modalBody = useRef();
  useClickOutside(modalBody, () => setIsVisible(false));

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed overflow-y-auto py-12 sm:py-24 z-50 w-full h-full bg-darkener-500 backdrop-blur-lg top-0 left-0 flex justify-center`}
        >
          <motion.div
            ref={modalBody}
            transition={{ duration: 0.2 }}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            className={`top-light bg-dark-400 shadow-card-200 rounded-lg w-[90%] ${
              size === "small" ? "xs:w-[450px]" : "sm:w-[600px]"
            } h-fit`}
          >
            <div className="flex justify-between items-center p-4 border-b border-lightener-200 text-xl">
              <h2 className="font-medium text-neutral-400">{title}</h2>

              <FiX className="cursor-pointer" onClick={() => setIsVisible(false)} />
            </div>

            <div className={className}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("portal")
  );
};

export default Modal;
