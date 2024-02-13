import dbConnect from "@/lib/dbConnect";
import UrlRecord from "@/models/url";
import { NextRequest, NextResponse } from "next/server";

interface IContext {
  params: { siteId: string};
}

export async function GET(request: NextRequest) {
  return NextResponse.redirect("https://medium.com/@patel.d/quick-guide-add-get-api-in-next-js-13-app-router-69f6e5e938be");
}

export async function DELETE(request: NextRequest, context: IContext) {
  try {
    await dbConnect();
    const siteId = context.params.siteId;
    const result = await UrlRecord.deleteOne({ short_url: siteId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "No record found to delete." }, { status: 404 });
    }

    return NextResponse.json({ message: "Success deleting route!" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed to delete URL record." }, { status: 500 });
  }
}
