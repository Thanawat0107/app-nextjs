"use server";

import { SignJWT } from "jose";
import { LoginRequest, registerRequest, UserData } from "@/interface/userInterface";
import fetchInterceptor from "@/utils/fetchInterceptor";
import { ResponseService } from "@/interface/responseService";
import { cookies } from "next/headers";
import { JWT_COOKIE, JWT_DURATION, JWT_SECRETKEY } from "@/utils/constant";

export const register = async (data: registerRequest) : Promise<ResponseService<UserData>> => {
    const result = await fetchInterceptor.post("/api/user/register",data);

    return result;
}

export async function login(
    data: LoginRequest
  ): Promise<ResponseService<UserData>> {
    const result: ResponseService<UserData> = await fetchInterceptor.post(
      "/api/user/login",
      data
    );
  
    const token = await new SignJWT({ ...result.data })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(new Date(Date.now() + JWT_DURATION))
      .sign(new TextEncoder().encode(JWT_SECRETKEY));
  
    const cookiesSession = await cookies();
  
    cookiesSession.set(
      JWT_COOKIE,
      JSON.stringify({
        token,
        user: result.data,
      })
    );
  
    return result;
}

export async function fetchMembers(): Promise<ResponseService<UserData[]>> {
  const result = await fetchInterceptor.get("/api/user");

  return result;
}

export const getUser = async (): Promise<UserData | null> => {
  const cookiesSession = await cookies()

  const cookieData = cookiesSession.get(JWT_COOKIE)?.value ?? null;

  return JSON.parse(cookieData || "{}").user as UserData;
}

export const logout = async (): Promise<string> => {
  const cookiesSession = await cookies()

  cookiesSession.delete(JWT_COOKIE);

  return "OK";
}