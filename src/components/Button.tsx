interface IButton {
  children: React.ReactNode;
  className?: string;
  color?: "orange" | "red";
  onClick?: () => void;
  type?: string;
}

const Button: React.FC<IButton> = ({ children, className, color, onClick, type }) => {
  const buttonColor: Record<string, string> = {
    "orange": "bg-orange-500 hover:bg-orange-600",
    "red": "bg-red-500 hover:bg-red-600",
  }
  
  return (
    <button
      className={`${buttonColor[color ?? ""]} ${className} rounded px-2 py-1`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;