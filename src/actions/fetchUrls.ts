"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/dbConnect";
import UrlRecord from "@/models/url";

export default async function fetchUrls() {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const urls = await UrlRecord.find({ userId });
    return urls;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
    console.log(`Error fetching URLs: ${err}`);
  }
}
