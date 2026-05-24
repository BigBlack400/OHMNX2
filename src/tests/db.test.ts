import { prisma } from "../lib/prisma";

async function testDB() {
  console.log("Testing DB connection...");
  try {
    const count = await prisma.content.count();
    console.log(`DB Connection successful. Found ${count} content records.`);

    const testKey = "test_run_" + Date.now();
    await prisma.content.create({
      data: {
        key: testKey,
        value: "test_value"
      }
    });
    console.log("Write successful.");

    await prisma.content.delete({
      where: { key: testKey }
    });
    console.log("Delete successful.");
    console.log("DB Test PASSED.");
  } catch (err) {
    console.error("DB Test FAILED:", err);
    process.exit(1);
  }
}

testDB();
