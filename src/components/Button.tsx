export interface IButton {
  children: React.ReactNode;
  className?: string;
  color?: ButtonColor;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

type ButtonColor = "orange" | "red";

const Button: React.FC<IButton> = ({
  children,
  className,
  color,
  onClick,
  type,
  disabled,
}) => {
  const buttonColor: Record<string, string> = {
    orange: "bg-orange-500 hover:bg-orange-600",
    red: "bg-red-500 hover:bg-red-600",
    default: "",
  };

  const buttonDisabled: Record<string, string> = {
    orange: "bg-orange-600",
    red: "bg-red-600",
    default: "",
  };

  return (
    <button
      className={`${
        disabled
          ? buttonDisabled[color ?? "default"]
          : buttonColor[color ?? "default"]
      } w-fit rounded px-2 py-1 ${className}`}
      onClick={onClick}
      type={type ?? "submit"}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
