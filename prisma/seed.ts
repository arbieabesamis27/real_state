import { PrismaClient } from "../generated/prisma";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
const getRandomImages = (count: number) =>
  Array.from(
    { length: count },
    () =>
      `https://loremflickr.com/640/480/house?random=${faker.number.int(999999)}`
  );

async function main() {
  await prisma.property.deleteMany();

  const purposes = ["for-rent", "for-sale"];
  const rentFrequencies = ["monthly", "yearly", "weekly"];

  for (let i = 0; i < 100; i++) {
    const imageCount = faker.number.int({ min: 3, max: 6 });
    const imageArray = getRandomImages(imageCount);

    await prisma.property.create({
      data: {
        purpose: faker.helpers.arrayElement(purposes),
        title: faker.lorem.words(4),
        description: faker.lorem.paragraph(),
        price: faker.number.int({ min: 500, max: 1000000 }),
        rentFrequency: faker.helpers.arrayElement(rentFrequencies),
        location: faker.location.city(),
        area: faker.number.int({ min: 40, max: 500 }),
        bedrooms: faker.number.int({ min: 1, max: 6 }),
        bathrooms: faker.number.int({ min: 1, max: 4 }),
        images: JSON.stringify(imageArray),
        agency: faker.image.avatarGitHub(),
        isVerified: faker.datatype.boolean(),
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
