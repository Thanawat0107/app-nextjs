import { z } from "zod";

export const loginValidate = z.object({
  email: z
    .string()
    .min(1, "กรุณากรอกอีเมล")
    .email({
      message: "รูปแบบอีเมล์ไม่ถูกต้อง",
    }),
  password: z
    .string({
      message: "กรุณากรอกรหัสผ่าน",
    })
    .min(6, "รหัสผ่านต้องมีความยาวมากกว่า 6 ตัวอังษร"),
});
