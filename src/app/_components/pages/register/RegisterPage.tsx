"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidate } from "./registerValidate";
import Swal from "sweetalert2";
import { register } from "@/app/_actions/userAction";
import { useRouter } from "next/navigation";


export default function RegisterPage() {
  const [isHidePass, setisHidePass] = useState<boolean>(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firsName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
    },

    // resolver: zodResolver(registerValidate),
  });

  const onSubmit = handleSubmit(async (value) => {
    const result = await register(value as any);

    if (result.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "สมัครสมาชิกสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        router.push("/login");
      });
      return;
    }

    Swal.fire({
      position: "center",
      text: result.message,
      icon: "error",
      title: "สมัครสมาชิกไม่สำเร็จ",
      showConfirmButton: false,
      timer: 1500,
    });

    return;
  });

  return (
    <div className="max-w-[30rem] m-auto">
      <p className="text-center text-3x1 font-bold my-2">สมัครสมาชิก</p>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Controller
          control={control}
          name="firsName"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.firsName}
              helperText={errors.firsName?.message ?? ""}
              label="ชื่อ"
              variant="outlined"
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.lastName}
              helperText={errors.lastName?.message ?? ""}
              label="นามสกุล"
              variant="outlined"
            />
          )}
        />

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

        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.age}
              helperText={errors.age?.message ?? ""}
              label="อายุ"
              variant="outlined"
            />
          )}
        />

        <div className="flex justify-end gap-2">
          <Button variant="contained" type="submit">
            ตกลง
          </Button>
        </div>
      </form>
    </div>
  );
}
