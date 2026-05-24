import { signIn } from "@/auth";

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">
      <div className="w-full max-w-md p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
        <h1 className="text-3xl font-black italic tracking-tighter text-white mb-8 text-center">
          OHMNX <span className="text-blue-500">LOGIN</span>
        </h1>

        {searchParams.error && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-xl text-center">
                {searchParams.error}
            </div>
        )}

        <form
          action={async (formData) => {
            "use server";
            try {
              await signIn("credentials", {
                username: formData.get("username"),
                password: formData.get("password"),
                redirectTo: "/admin",
              });
            } catch (error) {
               throw error;
            }
          }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Username</label>
            <input
              name="username"
              type="text"
              required
              className="w-full p-4 bg-black border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 transition-colors"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full p-4 bg-black border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 rounded-xl text-white font-black uppercase tracking-widest hover:bg-blue-500 transition-all"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-gray-500">
          Default: admin / admin123
        </p>
      </div>
    </div>
  );
}
