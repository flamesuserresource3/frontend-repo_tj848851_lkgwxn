import Spline from '@splinetool/react-spline';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays for contrast and thematic network connectivity */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />

      {/* Lightweight network overlay as simbol simpul jaringan */}
      <NetworkOverlay />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-emerald-300/90 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Kebijakan Satu Peta • BIG
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Peta Satu, Jaringan Terintegrasi
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/80 sm:text-lg">
            Integrasi KSP menyatukan simpul jaringan data geospasial lintas instansi menjadi satu ekosistem.
            Akses, analisis, dan kolaborasi pada peta tematik nasional dengan konektivitas yang andal.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              Jelajahi Fitur
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10 transition"
            >
              <PlayCircle className="h-4 w-4" />
              Pelajari Lebih Lanjut
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 text-center sm:text-left sm:grid-cols-3">
            <Stat value="80+" label="Layer Tematik" />
            <Stat value="30+" label="K/L Terintegrasi" />
            <Stat value="24/7" label="Ketersediaan Layanan" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
      <div className="text-xl font-bold text-white sm:text-2xl">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  );
}

function NetworkOverlay() {
  // A subtle SVG network overlay indicating connected map nodes (simpul jaringan)
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#34d399" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Lines connecting nodes */}
      <g stroke="#34d399" strokeOpacity="0.35" strokeWidth="0.3">
        <line x1="15" y1="70" x2="35" y2="55" />
        <line x1="35" y1="55" x2="55" y2="62" />
        <line x1="55" y1="62" x2="75" y2="48" />
        <line x1="35" y1="55" x2="28" y2="35" />
        <line x1="28" y1="35" x2="48" y2="28" />
        <line x1="48" y1="28" x2="70" y2="35" />
        <line x1="70" y1="35" x2="85" y2="20" />
      </g>

      {/* Nodes with glow */}
      {[{ x: 15, y: 70 }, { x: 35, y: 55 }, { x: 55, y: 62 }, { x: 75, y: 48 }, { x: 28, y: 35 }, { x: 48, y: 28 }, { x: 70, y: 35 }, { x: 85, y: 20 }].map(
        (n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="3.5" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx={n.x} cy={n.y} r="0.9" fill="#34d399" className="animate-pulse" />
          </g>
        )
      )}
    </svg>
  );
}
