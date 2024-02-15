"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import Button from "./Button";
import { IButton } from "./Button";

const SubmitButton: React.FC<IButton> = ({ children, className, color }) => {
  const { pending } = useFormStatus();

  return (
    <Button color={color} className={className} disabled={pending}>
      {pending ? "Submitting..." : children}
    </Button>
  );
};

export default SubmitButton;
