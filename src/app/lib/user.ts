import { LoginRequest, registerRequest } from "@/interface/userInterface";
import { db } from "./db";
import { compare, hashSync } from "bcrypt";

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

  if (await compare(data.password, user.passwordHash)) {
    return user;
  }

  throw "รหัสผ่านไม่ถูกต้อง";
};

const register = async (data: registerRequest) => {
  const user = await db.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (user) throw "อีเมลนี้มีผู้ใช้งานแล้ว";

  const passwordHash = hashSync(data.password, 10);

  const newUser = await db.user.create({
    data: {
      firsName: data.firsName,
      lastName: data.lastName,
      email: data.email,
      passwordHash,
      age: Number(data.age),
    },
  });

  return newUser;
};
