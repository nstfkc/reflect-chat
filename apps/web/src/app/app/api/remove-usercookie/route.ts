import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const now = new Date(Date.now());
  const res = new Response(JSON.stringify({}), {
    status: 200,
    headers: {
      "Set-Cookie": `userid=deleted1;Expires=${now.toUTCString()};Path=/`,
      "Content-Type": "application/json",
    },
  });

  return res;

  // return NextResponse.redirect(new URL("/", request.url)).headers.append(
  //   "Set-Cookie",
  //   `userid=deleted;Path=/;Expires=${now.toUTCString()}`
  // );
}
