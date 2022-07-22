import { PrismaClient } from '@prisma/client';
import models from './models.exports';

const prisma = new PrismaClient()

async function main() {
  await prisma.vacancy.createMany({
    data: models.vacancies, skipDuplicates: true
  })
}

main().catch((e) => {
  throw e;
}).finally(async () => {
  await prisma.$disconnect();
})