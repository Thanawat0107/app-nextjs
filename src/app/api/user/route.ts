import { userSevice } from "@/lib/user";
import { ResponseService } from "@/interface/responseService";
import { UserData } from "@/interface/userInterface";
import { assert } from "console";
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
