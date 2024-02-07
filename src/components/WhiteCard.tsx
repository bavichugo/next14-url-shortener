import React from "react";

interface WhiteCardProps {
  children: React.ReactNode;
  className?: String;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col bg-white w-full h-fit border border-gray-400 p-4 rounded-xl mb-40 ${className}`}>
      {children}
    </div>
  );
};

export default WhiteCard;
