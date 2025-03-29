"use client";

import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function LoginPage() {
 const [isHidePass, setisHidePass] = useState<boolean>(false);

  return (
    <div className="max-w-[30rem] m-auto">
      <p className="text-center text-3x1 font-bold my-2">LoginPage</p>
      <div className="flex flex-col gap-3">
        <TextField label="อีเมล" variant="outlined" />

        <TextField
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

        <div className="flex ่ flex-col gap-3">
          <Button variant="contained">ตกลง</Button>
        </div>
      </div>
    </div>
  );
}
