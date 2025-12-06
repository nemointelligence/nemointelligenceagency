import { Brain, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

const FuturisticGlobe = () => {
  const [stage, setStage] = useState<'buildings' | 'zoom' | 'globe'>('buildings');

  useEffect(() => {
    // Stage 1: Buildings grow (0-3s)
    // Stage 2: Zoom out (3-4.5s)
    // Stage 3: Globe spinning with brains (4.5s+)
    const zoomTimer = setTimeout(() => setStage('zoom'), 3000);
    const globeTimer = setTimeout(() => setStage('globe'), 4500);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(globeTimer);
    };
  }, []);

  // Building configurations
  const buildings = [
    { height: 120, delay: 0, x: 15 },
    { height: 180, delay: 0.2, x: 25 },
    { height: 140, delay: 0.4, x: 35 },
    { height: 200, delay: 0.1, x: 45 },
    { height: 160, delay: 0.3, x: 55 },
    { height: 220, delay: 0.15, x: 65 },
    { height: 130, delay: 0.35, x: 75 },
    { height: 170, delay: 0.25, x: 85 },
  ];

  // Shooting brain positions
  const shootingBrains = [
    { angle: 0, delay: 0 },
    { angle: 45, delay: 0.6 },
    { angle: 90, delay: 1.2 },
    { angle: 135, delay: 1.8 },
    { angle: 180, delay: 2.4 },
    { angle: 225, delay: 3 },
    { angle: 270, delay: 3.6 },
    { angle: 315, delay: 4.2 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto overflow-hidden">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl animate-pulse-slow" />

      {/* Main container with zoom animation */}
      <div 
        className={`relative w-full h-full flex items-center justify-center transition-all duration-1500 ease-out ${
          stage === 'buildings' ? 'scale-100' : stage === 'zoom' ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Buildings Stage */}
        {(stage === 'buildings' || stage === 'zoom') && (
          <div className="absolute inset-0 flex items-end justify-center pb-8">
            <div className="relative w-full h-full flex items-end justify-center gap-1">
              {buildings.map((building, i) => (
                <div
                  key={`building-${i}`}
                  className="relative flex flex-col items-center"
                  style={{ 
                    position: 'absolute',
                    left: `${building.x}%`,
                    bottom: '20%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  {/* Building */}
                  <div
                    className="w-6 md:w-8 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-sm animate-building-grow"
                    style={{
                      animationDelay: `${building.delay}s`,
                      height: `${building.height}px`,
                      boxShadow: '0 0 20px hsl(var(--primary) / 0.4)',
                    }}
                  >
                    {/* Windows */}
                    <div className="w-full h-full p-1 grid grid-cols-2 gap-1">
                      {Array.from({ length: Math.floor(building.height / 20) }).map((_, j) => (
                        <div
                          key={j}
                          className="w-full h-2 bg-primary/60 animate-window-flicker"
                          style={{ animationDelay: `${j * 0.1 + building.delay}s` }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Building base glow */}
                  <div className="w-full h-2 bg-primary/30 blur-sm" />
                </div>
              ))}
              
              {/* Ground line */}
              <div className="absolute bottom-[20%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              
              {/* City glow */}
              <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/20 blur-2xl rounded-full" />
            </div>
          </div>
        )}

        {/* Globe Stage */}
        {stage === 'globe' && (
          <>
            {/* Orbital rings */}
            <div className="absolute inset-4 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-8 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            <div className="absolute inset-12 rounded-full border border-primary/40 animate-spin" style={{ animationDuration: '25s' }} />

            {/* Shooting AI Brains */}
            {shootingBrains.map((brain, i) => (
              <div
                key={`shooting-brain-${i}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${brain.angle}deg)`,
                }}
              >
                <div
                  className="animate-shoot-out"
                  style={{
                    animationDelay: `${brain.delay}s`,
                    animationDuration: '3s',
                    animationIterationCount: 'infinite',
                  }}
                >
                  <div style={{ transform: `rotate(-${brain.angle}deg)` }}>
                    <Brain 
                      className="w-5 h-5 text-primary drop-shadow-[0_0_12px_hsl(var(--primary))]" 
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Main globe */}
            <svg
              viewBox="0 0 400 400"
              className="w-3/4 h-3/4 animate-spin animate-globe-appear"
              style={{ animationDuration: '30s' }}
            >
              <defs>
                <radialGradient id="globeGradient" cx="30%" cy="30%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="0.1" />
                </radialGradient>
                
                <filter id="globeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Globe sphere */}
              <circle cx="200" cy="200" r="150" fill="url(#globeGradient)" filter="url(#globeGlow)" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.7" />
              
              {/* Latitude lines */}
              {[-60, -30, 0, 30, 60].map((lat, i) => (
                <ellipse
                  key={`lat-${i}`}
                  cx="200"
                  cy={200 + lat}
                  rx={150 * Math.cos((lat * Math.PI) / 180)}
                  ry={20}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  className="animate-pulse-slow"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
              
              {/* Longitude lines */}
              {[0, 30, 60, 90, 120, 150].map((lng, i) => (
                <ellipse
                  key={`lng-${i}`}
                  cx="200"
                  cy="200"
                  rx={Math.sin((lng * Math.PI) / 180) * 150}
                  ry="150"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  transform={`rotate(${lng} 200 200)`}
                />
              ))}

              {/* City points on globe */}
              {[
                { x: 180, y: 120 },
                { x: 250, y: 150 },
                { x: 160, y: 200 },
                { x: 220, y: 230 },
                { x: 280, y: 180 },
                { x: 140, y: 160 },
                { x: 200, y: 280 },
                { x: 120, y: 220 },
              ].map((point, i) => (
                <g key={`point-${i}`}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="hsl(var(--primary))"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="10"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeOpacity="0.6"
                    className="animate-ping"
                    style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }}
                  />
                  {/* Small building icon at each point */}
                  <rect
                    x={point.x - 3}
                    y={point.y - 8}
                    width="6"
                    height="8"
                    fill="hsl(var(--primary))"
                    fillOpacity="0.8"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                </g>
              ))}

              {/* Connection lines */}
              <g stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3">
                <line x1="180" y1="120" x2="250" y2="150" className="animate-neural" />
                <line x1="250" y1="150" x2="220" y2="230" className="animate-neural" style={{ animationDelay: '0.5s' }} />
                <line x1="160" y1="200" x2="220" y2="230" className="animate-neural" style={{ animationDelay: '1s' }} />
                <line x1="140" y1="160" x2="180" y2="120" className="animate-neural" style={{ animationDelay: '1.5s' }} />
                <line x1="280" y1="180" x2="250" y2="150" className="animate-neural" style={{ animationDelay: '2s' }} />
                <line x1="120" y1="220" x2="160" y2="200" className="animate-neural" style={{ animationDelay: '2.5s' }} />
              </g>
            </svg>

            {/* Center core with brain */}
            <div className="absolute w-12 h-12 rounded-full bg-primary/30 animate-pulse shadow-[0_0_50px_hsl(var(--primary))] flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
          </>
        )}
      </div>

      {/* Bottom reflection */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-primary/10 to-transparent blur-xl" />
    </div>
  );
};

export default FuturisticGlobe;
