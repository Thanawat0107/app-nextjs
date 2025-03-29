import LoginPage from "@/app/_components/pages/login/LoginPage";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "login",
  description: "login page",
};

export default function Login() {
  return <LoginPage />;
}
