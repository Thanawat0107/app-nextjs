import { userSevice } from "@/app/lib/user";
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

export const POST = async (
  request: NextRequest,
  context: { params: { route: string } }
) => {
  const route = context?.params?.route ?? "";
  const body = await request.json();

  if (route === "login") {
    return await login(body);
  } else if (route === "register") {
    return await register(body);
  }
};

export const login = async (data: any) => {
  try {
    const result = (await userSevice.login(data)) as UserData;

    const response: ResponseService<UserData> = {
      success: true,
      message: "",
      data: result,
    };

    return NextResponse.json(response);
  } catch (error: any) {
    const response: ResponseService<UserData> = {
      success: false,
      message: error,
      data: null,
    };

    return NextResponse.json(response, { status: 401 });
  }
};

export const register = async (data: any) => {
  try {
    const result = (await userSevice.login(data)) as UserData;

    const response: ResponseService<UserData> = {
      success: true,
      message: "",
      data: result,
    };

    return NextResponse.json(response);
  } catch (error: any) {
    const response: ResponseService<UserData> = {
      success: false,
      message: error,
      data: null,
    };

    return NextResponse.json(response, { status: 401 });
  }
};
