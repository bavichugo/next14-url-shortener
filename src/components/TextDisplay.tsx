import React from "react";

interface ITextDisplay {
  label: string;
  text: string;
  containerClass?: string;
  labelClass?: string;
  textClass?: string;
}

const TextDisplay: React.FC<ITextDisplay> = ({ containerClass="", label, labelClass="", text, textClass="" }) => {
  return (
    <div className={`flex flex-col h-full ${containerClass}`}>
      <label className={`${labelClass}`}>{label}</label>
      <span className={`bg-gray-300 px-4 py-3 rounded ${textClass}`}>{text}</span>
    </div>
  );
};

export default TextDisplay;
