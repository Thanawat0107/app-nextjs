import { productService } from "@/app/lib/product";
import { NextRequest, NextResponse } from "next/server";

const GET = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  const id = context?.params?.id ?? "";

  const product = await productService.getProduct(id);
  return NextResponse.json(product);
};
