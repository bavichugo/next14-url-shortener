"use server";

import UrlRecord from "@/models/url";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import { generateRandomShort, isValidUrl } from "@/helper/urlHelper";
import { z } from "zod";

export default async function createUrlAction(formData: FormData) {
  const session = await getServerSession(authOptions);
  const long_url = formData.get("longUrl") as string;
  const userId = session?.user?.id as string;
  let short_url = formData.get("shortUrl") as string;

  const urlSchema = z.object({
    long_url: z
      .string()
      .refine((val) => isValidUrl(val), { message: "Invalid URL" }),
    short_url: z.string(),
    userId: z.string(),
  });

  try {
    const data = urlSchema.parse({
      long_url,
      short_url,
      userId,
    });

    await dbConnect();

    // Validating that the short_url is unique
    if (short_url) {
      const res = await UrlRecord.findOne({ short_url });
      if (res) {
        throw new Error("This short URL is already taken");
      }
    }

    // Ensures that a random generated short_url is unique
    if (!short_url) {
      while (true) {
        short_url = generateRandomShort();
        const res = await UrlRecord.findOne({ short_url });
        if (!res) break;
      }
    }

    const newUrl = new UrlRecord({
      long_url,
      short_url,
      userId,
    });

    await newUrl.save();
    revalidatePath("/links");
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
    console.log(`Error trying to add new URL: ${err}`);
  }
}
