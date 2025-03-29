import { productService } from "@/app/lib/product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    const products = await productService.getProducts();

    return NextResponse.json(products);
};

export const POST = async (request: NextRequest) => {
    const body = await request.json();

    const products = await productService.createProduct(body);
    
    return NextResponse.json(products, { status: 200 });
};
