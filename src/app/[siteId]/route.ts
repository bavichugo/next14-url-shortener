// api > hello > route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.redirect("https://medium.com/@patel.d/quick-guide-add-get-api-in-next-js-13-app-router-69f6e5e938be");
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json("Success deleting route!");
}
