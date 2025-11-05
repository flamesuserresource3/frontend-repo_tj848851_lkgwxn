import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
            Integrasi KSP
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Menyatukan referensi geospasial Indonesia
          </h2>
          <p className="mt-3 text-white/70">
            Kebijakan Satu Peta (KSP) bertujuan mewujudkan satu referensi, satu standar, dan satu basis
            data geospasial nasional. Integrasi KSP oleh Badan Informasi Geospasial memudahkan instansi pemerintah
            dan masyarakat untuk mengakses peta tematik yang akurat, terkini, dan dapat diandalkan.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" /> Standar metadata & interoperabilitas OGC</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" /> Orkestrasi publikasi layer tematik lintas K/L/D</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" /> Portal penelusuran, unduh, dan pratinjau interaktif</li>
          </ul>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-[1] rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-transparent to-transparent blur-2xl" />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,_rgba(16,185,129,0.25),_transparent_40%),radial-gradient(circle_at_80%_30%,_rgba(59,130,246,0.2),_transparent_40%),radial-gradient(circle_at_50%_80%,_rgba(255,255,255,0.12),_transparent_40%)]">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="text-sm uppercase tracking-widest text-white/60">Topografi Digital</div>
                  <div className="mt-2 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-white/80">
                    KSP
                  </div>
                  <p className="mt-3 text-xs text-white/60">Layer kontur, batas administrasi, dan tematik dalam satu kanvas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
