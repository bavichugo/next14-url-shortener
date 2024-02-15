import dbConnect from "@/lib/dbConnect";
import UrlRecord from "@/models/url";
import { NextRequest, NextResponse } from "next/server";

interface IContext {
  params: { siteId: string };
}

/**
 * Used to redirect users that type in the browser the short URL
 */
export async function GET(request: NextRequest, context: IContext) {
  await dbConnect();
  const siteId = context.params.siteId;
  const result = await UrlRecord.findOne({ short_url: siteId });
  return NextResponse.redirect(result.long_url);
}
