import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  request: NextRequest,
  context: { params: { route: string } }
) => {
  const id = context?.params?.route ?? "";
  const body = await request.json();
  return NextResponse.json({ body, id }, { status: 200 });
};

export const DELETE = async (
  request: NextRequest,
  context: { params: { route: string } }
) => {
  const id = context?.params?.route ?? "";
  return await NextResponse.json({ id }, { status: 200 });
};