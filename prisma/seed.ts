// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../lib/password'; // Adjust path if needed

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@vikram.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'password123'; // Use a strong password in reality

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await hashPassword(adminPassword);
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin User',
        password: hashedPassword,
        role: 'admin',
        emailVerified: new Date(), // Mark as verified for simplicity
      },
    });
    console.log(`Admin user ${adminEmail} created.`);
  } else {
    console.log(`Admin user ${adminEmail} already exists.`);
  }

  // You can also seed some Judgement data here if you like
  // ...
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });