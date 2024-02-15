import fetchUrls from "@/actions/fetchUrls";
import WhiteCard from "@/components/WhiteCard";
import React from "react";
import DeleteButton from "./DeleteButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function YourLinksPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/auth/signIn");
  }

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
            <DeleteButton key={url.short_url} shortUrl={url.short_url} />
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
        target="_blank"
      >
        {link}
      </a>
    </div>
  );
};
