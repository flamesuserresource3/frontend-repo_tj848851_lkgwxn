import { ArrowRight, Map, Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <Map className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">Integrasi KSP</p>
              <p className="text-[11px] text-white/60">Badan Informasi Geospasial</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Fitur</a>
            <a href="#about" className="hover:text-white transition">Tentang</a>
            <a href="#contact" className="hover:text-white transition">Kontak</a>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition"
          >
            Mulai Eksplorasi
            <ArrowRight className="h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
          </a>
        </nav>
      </div>
    </header>
  );
}
