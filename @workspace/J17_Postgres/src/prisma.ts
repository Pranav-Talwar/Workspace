import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string) {
  const user = await prisma.user.create({
    data: { 
      username,
      password    },
  });

  console.log("User inserted:", user);
}

// Example usage:
insertUser("testUser", "securePassword")

