import {ButtonProps} from "../../types/types";

const Button: React.FC<ButtonProps> = ({text, onClick, className, disabled}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 mt-2 rounded ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
