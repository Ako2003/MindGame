import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";

const Popup = ({ message, setMessage, type }) => {
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {message && (
        <motion.div
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
          initial={{ x: "calc(100% + 40px)" }}
          animate={{ x: 0 }}
          exit={{ x: "calc(100% + 40px)" }}
          className={`z-[100] fixed top-8 right-8 rounded-lg overflow-hidden flex items-center gap-2 bg-dark-400 bottom-light ${
            type ? "shadow-green-500 text-green-500" : "shadow-red-500 text-red-500"
          } shadow p-4`}
        >
          {type ? <RiCheckboxCircleLine className="text-xl" /> : <RiCloseCircleLine className="text-xl" />}
          <p>{message}</p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("portal")
  );
};

export default Popup;
