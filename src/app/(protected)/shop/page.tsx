import LoginPage from "@/app/_components/pages/login/LoginPage";
import ShopPage from "@/app/_components/pages/shop/ShopPage";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "shop",
  description: "shop page",
};

export default function Shop() {
  return <ShopPage />;
}