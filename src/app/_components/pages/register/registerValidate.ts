import { z } from "zod";

export const registerValidate = z.object({
  firsName: z.string({
    message: "กรุณากรอกชื่อ",
  }),
  lastName: z.string({
    message: "กรุณากรอกนามสกุล",
  }),
  email: z
    .string({
      message: "กรุณากรอกอีเมล์",
    })
    .email({
      message: "รูปแบบอีเมล์ไม่ถูกต้อง",
    }),
  password: z
    .string({
      message: "กรุณากรอกรหัสผ่าน",
    })
    .min(6, "รหัสผ่านต้องมีความยาวมากกว่า 6 ตัวอักษร"),
  age: z
    .number({
      message: "กรุณากรอกอายุ",
    })
    .min(18, "อายุต้องไม่น้อยกว่า 18 ปี"),
});
