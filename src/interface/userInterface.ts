export interface UserData {
  id: string;
  firsName: string;
  lastName: string;
  email: string;
  age: number;
  roleName?: string;
  roleCode?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: UserData;
  token: string;
}

export interface registerRequest {
  firsName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
}
