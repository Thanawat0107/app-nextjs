"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Controller, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { loginValidate } from "./loginValidate";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isHidePass, setisHidePass] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: zodResolver(loginValidate),
  });

  const onSubmit = handleSubmit((value) => {
    console.log("value", value);
  })

  return (
    <div className="max-w-[30rem] m-auto">
      <p className="text-center text-3x1 font-bold my-2">เข้าสู่ระบบ</p>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.email}
              helperText={errors.email?.message ?? ""}
              label="อีเมล"
              variant="outlined"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.password}
              helperText={errors.password?.message ?? ""}
              label="รหัสผ่าน"
              type={isHidePass ? "text" : "password"}
              variant="outlined"
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton onClick={() => setisHidePass(!isHidePass)}>
                      {isHidePass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  ),
                },
              }}
            />
          )}
        />

        <div className="flex justify-end gap-2">
          <Button
            variant="contained"
            color="success"
            onClick={() => router.push("/register")}
          >
            สมัครสมาชิก
          </Button>
          <Button variant="contained" type="submit">
            ตกลง
          </Button>
        </div>
      </form>
    </div>
  );
}
