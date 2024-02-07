"use server";

import UrlRecord from "@/models/url";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export default async function createUrlAction(formData: FormData) {
  const session = await getServerSession(authOptions);
  const long_url = formData.get("longUrl") as string;
  const short_url = formData.get("shortUrl") as string;
  const userId = session?.user?.id as string;

  try {
    await dbConnect();
    
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