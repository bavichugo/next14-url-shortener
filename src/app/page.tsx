import createUrlAction from "@/actions/createUrlAction";
import TextDisplay from "@/components/TextDisplay";
import WhiteCard from "@/components/WhiteCard";
import React from "react";

export default async function Home() {
  return (
    <div className="h-full container mx-auto flex justify-center items-center">
      <WhiteCard className="max-w-3xl mb-40">
        <form className="flex flex-col gap-4" action={createUrlAction}>
          <h1 className="text-xl">Create custom URL</h1>
          <FormInput
            label="Paste long URL"
            placeholder="https://yourlongurl.com/thisUrlIsLoooong"
            id="longUrl"
            required
            key="longUrl"
          />
          <div className="flex items-center gap-4 w-full">
            <TextDisplay label="Domain" text="shorturl.com" />
            <div className="flex flex-col">
              <label className="text-transparent">/</label>
              <span className="py-2">/</span>
            </div>
            <FormInput
              label="Enter your shortcut (leave empty for random generation)"
              placeholder="aX3b6"
              id="shortUrl"
              key="shortUrl"
            />
          </div>
          <button className="mx-auto px-20 py-3 w-fit bg-orange-500 hover:bg-orange-600 rounded-xl">
            Create your link
          </button>
        </form>
      </WhiteCard>
    </div>
  );
}

interface IFormInput {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
};

const FormInput: React.FC<IFormInput> = ({
  label,
  id,
  placeholder,
  required = false,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="bg-gray-300 px-4 py-3 rounded"
        type="text"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
