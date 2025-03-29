import { userSevice } from "@/app/lib/user";
import { ResponseService } from "@/interface/responseService";
import { UserData } from "@/interface/userInterface";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const result = (await userSevice.getUsers()) as UserData[];

    const response: ResponseService<UserData[]> = {
      success: true,
      message: "",
      data: result,
    };

    return await NextResponse.json(response);
  } catch (error: any) {
    const response: ResponseService<UserData[]> = {
      success: false,
      message: error,
      data: null,
    };
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  return NextResponse.json({ body }, { status: 200 });
};
