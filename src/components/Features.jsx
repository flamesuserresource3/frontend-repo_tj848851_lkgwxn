import { Globe, Layers, Database, Shield } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Katalog Geospasial Terpadu',
    desc: 'Satu portal untuk menemukan, mempratinjau, dan mengakses data geospasial nasional dengan metadata terstandar.',
  },
  {
    icon: Layers,
    title: 'Integrasi Lintas Instansi',
    desc: 'Sinkronisasi layer dari K/L/D melalui standar interoperabilitas untuk peta tematik yang konsisten.',
  },
  {
    icon: Database,
    title: 'Kualitas & Validasi Data',
    desc: 'Proses kurasi, versi, dan validasi agar setiap fitur spasial dapat ditelusuri dan dipercaya.',
  },
  {
    icon: Shield,
    title: 'Akses Aman & Terkendali',
    desc: 'Manajemen peran dan perizinan memastikan data sensitif tetap terproteksi saat berkolaborasi.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Dirancang untuk skala nasional</h2>
        <p className="mt-3 text-white/70">
          Fondasi geospasial yang modern untuk merealisasikan Kebijakan Satu Peta.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition hover:border-emerald-500/30">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}
