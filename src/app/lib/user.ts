import { LoginRequest } from "@/interface/userInterface";
import { db } from "./db";

const getUsers = async () => {
  return await db.user.findMany({
    omit: {
      passwordHash: true,
    },
  });
};

const login = async (data: LoginRequest) => {
  const user = await db.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (!user) throw "ไม่พบข้อมูลผู้ใช้งาน";
};
