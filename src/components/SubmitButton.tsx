"use client";

import React from "react";
import { useFormStatus } from "react-dom";

interface ISubmitButton {
  children: string;
  className: string;
}

const SubmitButton: React.FC<ISubmitButton> = ({ children, className }) => {
  const { pending } = useFormStatus();

  return (
    <button className={`${pending ? "bg-orange-600" : "bg-orange-500 hover:bg-orange-600"} px-20 py-3 w-fit rounded-xl ${className}`} type="submit" disabled={pending}>
      {pending ? "Submitting..." : children}
    </button>
  );
};

export default SubmitButton;
