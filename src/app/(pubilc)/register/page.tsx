import RegisterPage from "@/app/_components/pages/register/RegisterPage";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "register",
  description: "register page",
};

export default function Login() {
  return <RegisterPage />;
}
