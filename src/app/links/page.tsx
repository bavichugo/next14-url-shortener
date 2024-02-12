import fetchUrls from "@/actions/fetchUrls";
import WhiteCard from "@/components/WhiteCard";
import DeleteUrlButton from "./DeleteUrlButton";
import React from "react";

export default async function YourLinksPage() {
  const urls = await fetchUrls();

  return (
    <div className="mx-auto w-full max-w-4xl flex flex-col gap-4 p-4">
      {urls?.map((url) => (
        <WhiteCard className="flex flex-col" key={url.short_url}>
          <div className="flex justify-between w-full">
            <UrlDisplay
              key={url.short_url}
              label="Short URL: "
              link={url.short_url}
            />
            <DeleteUrlButton />
          </div>
          <UrlDisplay
            key={url.long_url}
            label="Long URL: "
            link={url.long_url}
          />
        </WhiteCard>
      ))}
    </div>
  );
}

interface IUrlDisplay {
  label: string;
  link: string;
}

const UrlDisplay: React.FC<IUrlDisplay> = ({ label, link }) => {
  return (
    <div className="flex w-full">
      <span className="mr-2 whitespace-nowrap">{label}</span>
      <a
        className="max-w-xl w-full overflow-scroll whitespace-nowrap underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        href={link}
      >
        {link}
      </a>
    </div>
  );
};
