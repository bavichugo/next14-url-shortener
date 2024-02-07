import fetchUrls from "@/actions/fetchUrls";
import WhiteCard from "@/components/WhiteCard";
import TextDisplay from "@/components/TextDisplay";
import DeleteUrlButton from "./DeleteUrlButton";

export default async function YourLinksPage() {
  const urls = await fetchUrls();

  return (
    <div className="mx-auto w-full max-w-4xl flex flex-col gap-4 p-4">
      {urls?.map((url) => (
        <WhiteCard className="grid grid-cols-9 gap-4" key={url.short_url}>
          <TextDisplay
            containerClass="col-span-2"
            label="Short"
            text={url.short_url}
            textClass="overflow-scroll whitespace-nowrap"
          />
          <TextDisplay
            containerClass="col-span-6"
            label="Long"
            text={url.long_url}
            textClass="overflow-scroll whitespace-nowrap"
          />
          <DeleteUrlButton />
        </WhiteCard>
      ))}
    </div>
  );
}

