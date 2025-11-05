export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Integrasi KSP. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#about" className="hover:text-white transition">Tentang</a>
          <a href="#features" className="hover:text-white transition">Fitur</a>
          <a href="#login" className="hover:text-white transition">Login</a>
        </div>
      </div>
    </footer>
  );
}
