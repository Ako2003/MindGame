import { twMerge } from "tailwind-merge";

const Button = ({ children, className, onSubmit, onClick }) => {
  return (
    <button
      className={twMerge(
        "bg-primary text-white py-3 px-9 font-bold tracking-wider uppercase text-xs rounded-lg shadow-[inset_0px_2px_0px_rgba(255,255,255,.4),inset_0px_-2px_0px_rgba(0,0,0,.4)] active:shadow-none relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:rounded-lg after:bg-gradient-radial-at-top after:from-lightener-400 after:to-transparent after:hover:from-lightener-200",
        className
      )}
      onSubmit={onSubmit}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
