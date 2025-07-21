import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const Test = async () => {
  const result = await prisma.property.findFirst(); // no `where`, no props
  console.log(result);
  return null;
};

export default Test;
