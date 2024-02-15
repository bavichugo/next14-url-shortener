"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/dbConnect";
import UrlRecord from "@/models/url";

export default async function deleteUrlAction(
  shortUrl: string,
  formData: FormData
) {
  try {
    await dbConnect();
    const result = await UrlRecord.deleteOne({ short_url: shortUrl });

    if (result.deletedCount === 0) {
      return console.log("No record found to delete.");
    }

    console.log("Success deleting route!");
    revalidatePath("/links");
  } catch (err) {
    throw new Error("Failed to delete URL record.");
  }
}
