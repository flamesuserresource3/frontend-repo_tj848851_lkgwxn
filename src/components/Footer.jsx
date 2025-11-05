export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold text-white">Integrasi KSP</p>
          <p className="text-xs text-white/60">Badan Informasi Geospasial • Kebijakan Satu Peta</p>
        </div>
        <div className="text-xs text-white/60">
          © {new Date().getFullYear()} Integrasi KSP. Semua hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
