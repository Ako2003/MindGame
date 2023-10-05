const ButtonRounded = ({ children, onClick, outlined }) => {
  return (
    <button
      className={`border py-1 px-4 rounded-full hover:text-white duration-300 ${
        outlined ? "bg-transparent border-lightener-200" : "bg-lightener-200 border-transparent"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonRounded;
