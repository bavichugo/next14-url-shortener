"use client";
import { useState } from "react";
import { IoCloseCircleOutline, IoCloseCircle } from "react-icons/io5";

const DeleteUrlButton = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  
  const deleteUrl = () => {
    console.log("deleted!");
  };

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={deleteUrl}
    >
      {!isHovering && (
        <IoCloseCircleOutline className="text-3xl text-red-500" />
      )}
      {isHovering && <IoCloseCircle className="text-3xl text-red-500" />}
    </button>
  );
};

export default DeleteUrlButton;
