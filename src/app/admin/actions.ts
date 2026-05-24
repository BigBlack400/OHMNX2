import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateContent(key: string, value: string) {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  await prisma.content.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
  revalidatePath("/");
}

export async function logout() {
    // This will be used by a button later
}
