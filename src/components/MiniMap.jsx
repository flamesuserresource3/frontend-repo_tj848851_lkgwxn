import { Map, Share2, Building2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const AGENCIES = [
  { id: "bappenas", name: "Bappenas", x: 180, y: 160 },
  { id: "big", name: "BIG", x: 520, y: 120 },
  { id: "kemendagri", name: "Kemendagri", x: 380, y: 300 },
  { id: "klhk", name: "KLHK", x: 700, y: 260 },
  { id: "atrbpn", name: "ATR/BPN", x: 260, y: 420 },
];

const LINKS = [
  ["bappenas", "big"],
  ["bappenas", "kemendagri"],
  ["big", "klhk"],
  ["kemendagri", "atrbpn"],
  ["atrbpn", "klhk"],
  ["big", "kemendagri"],
];

function useFlowTicker(interval = 1400) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), interval);
    return () => clearInterval(id);
  }, [interval]);
  return tick;
}

export default function MiniMap() {
  const tick = useFlowTicker(1500);
  const nodes = AGENCIES;
  const links = LINKS.map(([a, b]) => ({
    source: nodes.find((n) => n.id === a),
    target: nodes.find((n) => n.id === b),
  }));

  const pulses = useMemo(() => {
    // Pick a link to animate a pulse along
    const idx = tick % links.length;
    return links[idx];
  }, [tick, links]);

  return (
    <section id="map" className="relative py-24 bg-gradient-to-b from-black to-[#07070b] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Map className="h-3.5 w-3.5" />
              Peta Mini • Jaringan Lembaga
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Jaringan terhubung antar lembaga, realtime
            </h2>
            <p className="mt-3 text-white/70">
              Visualisasi ringan yang memperlihatkan simpul data dari berbagai instansi
              pemerintah. Garis menunjukkan jalur pertukaran data dan animasi pulsa mewakili
              pergerakan paket informasi.
            </p>
            <ul className="mt-6 space-y-2 text-white/80">
              <li className="flex items-center gap-2"><Share2 className="h-4 w-4 text-cyan-300" /> Sinkronisasi antar instansi</li>
              <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-fuchsia-300" /> Node utama: Bappenas, BIG, Kemendagri, KLHK, ATR/BPN</li>
            </ul>
          </div>

          <div className="relative w-full md:w-[640px] lg:w-[720px] aspect-[4/3] rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            {/* Background grid */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 880 660" fill="none">
              <defs>
                <linearGradient id="stroke" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="flow" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#67e8f9" />
                  <stop offset="100%" stopColor="#f0abfc" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0v40" stroke="url(#stroke)" strokeOpacity="0.08" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#gridPattern)" />

              {/* Links */}
              {links.map((l, i) => (
                <g key={i}>
                  <path
                    d={`M ${l.source.x} ${l.source.y} L ${l.target.x} ${l.target.y}`}
                    stroke="url(#stroke)"
                    strokeOpacity="0.35"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="[stroke-dasharray:6_10] motion-reduce:[stroke-dasharray:none] animate-[dash_8s_linear_infinite]"
                  />
                </g>
              ))}

              {/* Flow pulse along one link */}
              {pulses && (
                <g filter="url(#glow)">
                  <circle
                    cx={pulses.source.x}
                    cy={pulses.source.y}
                    r="6"
                    fill="url(#flow)"
                    className="animate-ping opacity-60"
                  />
                  <circle cx={pulses.source.x} cy={pulses.source.y} r="3" fill="url(#flow)" />
                </g>
              )}

              {/* Nodes */}
              {nodes.map((n) => (
                <g key={n.id}>
                  <circle cx={n.x} cy={n.y} r="7" fill="#0ea5e9" />
                  <circle cx={n.x} cy={n.y} r="14" className="fill-cyan-400/10" />
                  <text
                    x={n.x + 12}
                    y={n.y - 12}
                    className="text-[12px] font-medium"
                    fill="#ffffff"
                  >
                    {n.name}
                  </text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div className="absolute left-3 bottom-3 flex items-center gap-3 rounded-md bg-black/40 border border-white/10 px-3 py-2 text-xs">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" /> Node
              <span className="inline-block h-2 w-8 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400" /> Jalur data
              <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-300 animate-ping" /> Pulsa
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe for flowing dashes */}
      <style>{`
        @keyframes dash { to { stroke-dashoffset: -200; } }
      `}</style>
    </section>
  );
}
