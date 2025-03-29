import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  {
    id: "1",
    name: "อิเล็กทรอนิกส์",
  },
  {
    id: "2",
    name: "เครื่องใช้ไฟฟ้า",
  },
  {
    id: "3",
    name: "เสื้อผ้าและแฟชั่น",
  },
  {
    id: "4",
    name: "อาหารและเครื่องดื่ม",
  },
  {
    id: "5",
    name: "อุปกรณ์กีฬา",
  },
];

async function main() {
  categories.map(async (category) => {
    await prisma.category.create({
      data: category,
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
