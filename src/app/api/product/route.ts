import { productService } from "@/lib/product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;

    const searchName = searchParams.get("searchName") || undefined;
    const categoryId = searchParams.get("categoryId") || undefined;
    const sortPrice = searchParams.get("sortPrice") || "asc";

    const products = await productService.getProducts({
        searchName,
        categoryId,
        sortPrice,
    });

    return NextResponse.json(products);
};

export const POST = async (request: NextRequest) => {
    const body = await request.json();

    const products = await productService.createProduct(body);
    
    return NextResponse.json(products, { status: 200 });
};
