import Spline from '@splinetool/react-spline';
import { LogIn, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for contrast; keep interactive Spline clickable */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />

      {/* Subtle network overlay to emphasize integrated connectivity */}
      <NetworkOverlay />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-emerald-300/90 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Kebijakan Satu Peta • BIG
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Login untuk Mulai Integrasi Data Geospasial
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/85 sm:text-lg">
            Akses portal Integrasi KSP untuk menghubungkan, memvalidasi, dan memvisualisasikan layer
            tematik nasional pada kanvas topografi 3D yang interaktif.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#login"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              <LogIn className="h-4 w-4" />
              Login
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10 transition"
            >
              <PlayCircle className="h-4 w-4" />
              Pelajari Fitur
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
        <line x1="12" y1="72" x2="34" y2="56" />
        <line x1="34" y1="56" x2="55" y2="65" />
        <line x1="55" y1="65" x2="78" y2="47" />
        <line x1="34" y1="56" x2="27" y2="34" />
        <line x1="27" y1="34" x2="49" y2="27" />
        <line x1="49" y1="27" x2="71" y2="36" />
        <line x1="71" y1="36" x2="88" y2="18" />
      </g>

      {/* Nodes with glow */}
      {[{ x: 12, y: 72 }, { x: 34, y: 56 }, { x: 55, y: 65 }, { x: 78, y: 47 }, { x: 27, y: 34 }, { x: 49, y: 27 }, { x: 71, y: 36 }, { x: 88, y: 18 }].map(
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
