"use client";
import { useState } from "react";
import { IoCloseCircleOutline, IoCloseCircle } from "react-icons/io5";

interface ICloseButton {
  onClick: () => void;
}

const CloseButton: React.FC<ICloseButton> = ({ onClick }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <>
      <button
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onClick}
      >
        {!isHovering && (
          <IoCloseCircleOutline className="text-3xl text-red-500" />
        )}
        {isHovering && <IoCloseCircle className="text-3xl text-red-500" />}
      </button>
    </>
  );
};

export default CloseButton;
