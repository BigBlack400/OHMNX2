import { auth, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { updateContent } from "./actions";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const contents = await prisma.content.findMany();
  const contentMap = contents.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {} as Record<string, string>);

  const heroTitle = contentMap["heroTitle"] || "Revolutionize Your Sales. Empower Your Team.";
  const heroSubtitle = contentMap["heroSubtitle"] || "Streamline your sales process with AI-powered automation, predictive insights, and tools built to connect your business to the world.";
  const collabText = contentMap["collabText"] || "Seamless Collaboration+";

  async function handleUpdate(formData: FormData) {
    "use server";
    const title = formData.get("heroTitle") as string;
    const subtitle = formData.get("heroSubtitle") as string;
    const collab = formData.get("collabText") as string;

    await updateContent("heroTitle", title);
    await updateContent("heroSubtitle", subtitle);
    await updateContent("collabText", collab);
  }

  return (
    <div className="p-12 min-h-screen bg-black text-white font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-black italic tracking-tighter">OHMNX <span className="text-blue-500">ADMIN</span></h1>
          <div className="flex items-center gap-6">
            <div className="text-sm text-gray-500">Logged in as {session.user?.name}</div>
            <form action={async () => { "use server"; await signOut(); }}>
              <button className="text-xs text-red-500 hover:underline">Logout</button>
            </form>
          </div>
        </header>

        <form action={handleUpdate} className="space-y-8">
          <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-xl font-bold mb-6 text-blue-400">Hero Section</h2>
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-bold uppercase tracking-widest text-gray-500">Main Title</label>
                <input
                  name="heroTitle"
                  defaultValue={heroTitle}
                  className="w-full p-4 bg-black border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold uppercase tracking-widest text-gray-500">Subtitle Description</label>
                <textarea
                  name="heroSubtitle"
                  defaultValue={heroSubtitle}
                  rows={4}
                  className="w-full p-4 bg-black border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none transition-colors"
                />
              </div>
            </div>
          </section>

          <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-xl font-bold mb-6 text-blue-400">Collaboration Section</h2>
            <div>
              <label className="block mb-2 text-sm font-bold uppercase tracking-widest text-gray-500">Collaboration Badge Text</label>
              <input
                name="collabText"
                defaultValue={collabText}
                className="w-full p-4 bg-black border border-white/10 rounded-xl text-white focus:border-blue-500 outline-none transition-colors"
              />
            </div>
          </section>

          <button type="submit" className="w-full py-5 bg-blue-600 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
            Push Updates Live
          </button>
        </form>
      </div>
    </div>
  );
}
