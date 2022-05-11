import { ButtonParams } from "../interfaces/interfaces";

const Button = ({ icon, label, className, onClick }: ButtonParams) => {
  return (
    <div className={`flex flex-col justify-center items-center ` + className}>
      <button
        onClick={onClick}
        className="p-4 shadow-lg rounded-full hover:bg-slate-100"
      >
        {icon}
      </button>
      <p className="mt-2 font-light text-sm text-gray-600">{label}</p>
    </div>
  );
};

export default Button;
