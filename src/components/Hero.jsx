import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        {/* Subtle network overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" fill="none">
          <defs>
            <linearGradient id="grid" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 80} y1={0} x2={i * 80} y2={800} stroke="url(#grid)" strokeOpacity="0.08" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h-${i}`} x1={0} y1={i * 80} x2={1200} y2={i * 80} stroke="url(#grid)" strokeOpacity="0.08" />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Login untuk Mulai Integrasi Data Geospasial
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Satukan data spasial lintas kementerian dan lembaga ke dalam satu platform yang
          aman, cepat, dan mudah diakses.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#login"
            className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Login
          </a>
          <a
            href="#features"
            className="px-6 py-3 rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            Pelajari Fitur
          </a>
        </div>
      </div>
    </section>
  );
}
