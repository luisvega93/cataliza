import { NextResponse } from "next/server";

import { accessCookieName, getSharedPassword } from "@/lib/auth";

type AccessRequest = {
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as AccessRequest;
  const password = body.password?.trim() ?? "";

  if (!password || password !== getSharedPassword()) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: accessCookieName,
    value: "granted",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
