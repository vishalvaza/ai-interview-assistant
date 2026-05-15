import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold tracking-tight">
          AI Interview Assistant
        </h1>



        <Link
  href="/upload"
  className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
>
  Start Interview
</Link>

      </div>
    </nav>
  );
}