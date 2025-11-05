import { LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
          <span className="font-semibold tracking-tight">Integrasi KSP</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Fitur</a>
          <a href="#map" className="hover:text-white transition">Peta</a>
          <a href="#about" className="hover:text-white transition">Tentang</a>
          <a href="#contact" className="hover:text-white transition">Kontak</a>
        </nav>
        <a href="#login" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition border border-white/10">
          <LogIn className="h-4 w-4" />
          <span>Login</span>
        </a>
      </div>
    </header>
  );
}
