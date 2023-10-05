import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 px-8 relative">
      <p className="text-center font-medium z-10">©2022 - Mindgame, Inc.</p>

      {/* botton detail */}
      <div className="absolute bg-slate-700 w-1/2 h-[60px] left-1/2 -translate-x-1/2 bottom-0 -z-10 rounded-t-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
