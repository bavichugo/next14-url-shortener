import React from "react";

interface WhiteCardProps {
  children: React.ReactNode;
  className?: String;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ children, className }) => {
  return (
    <div
      className={` bg-white w-full h-fit border border-gray-400 p-4 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default WhiteCard;
