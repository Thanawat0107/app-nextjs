import { PrismaClient } from "@prisma/client";

declare global {
  var prismaClient: PrismaClient | undefined;
}

const createPrismaClient = () => {
    if(!globalThis.prismaClient){
        globalThis.prismaClient = new PrismaClient();
    }
    
    return globalThis.prismaClient;
};

export const db = createPrismaClient();