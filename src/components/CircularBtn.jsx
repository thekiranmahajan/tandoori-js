import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CircularBtn = ({ onClick, disabled, icon }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1c1c24] text-center text-white ring-yellow-400 drop-shadow-xl transition-all duration-200 hover:scale-90 focus:ring-4 active:scale-105 disabled:cursor-not-allowed disabled:opacity-25"
      disabled={disabled}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default CircularBtn;
