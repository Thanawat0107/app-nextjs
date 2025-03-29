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

const PUT = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  const id = context?.params?.id ?? "";
  const body = await request.json();
  const product = await productService.updateProduct(id, body);
  return NextResponse.json(product);
};

const DELETE = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  const id = context?.params?.id ?? "";
  const product = await productService.deleteProduct(id);
  return NextResponse.json(product);
};
