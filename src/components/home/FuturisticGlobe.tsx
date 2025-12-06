import { Brain } from "lucide-react";

const FuturisticGlobe = () => {
  // Define shooting brain positions and directions
  const shootingBrains = [
    { angle: 0, delay: 0 },
    { angle: 45, delay: 0.8 },
    { angle: 90, delay: 1.6 },
    { angle: 135, delay: 2.4 },
    { angle: 180, delay: 3.2 },
    { angle: 225, delay: 4 },
    { angle: 270, delay: 4.8 },
    { angle: 315, delay: 5.6 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl animate-pulse-slow" />
      
      {/* Globe container */}
      <div className="relative w-full h-full flex items-center justify-center">
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
                animationDuration: '4s',
                animationIterationCount: 'infinite',
              }}
            >
              <div
                style={{
                  transform: `rotate(-${brain.angle}deg)`,
                }}
              >
                <Brain 
                  className="w-5 h-5 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" 
                />
              </div>
            </div>
          </div>
        ))}

        {/* Main globe */}
        <svg
          viewBox="0 0 400 400"
          className="w-3/4 h-3/4 animate-spin"
          style={{ animationDuration: '30s' }}
        >
          <defs>
            {/* Globe gradient */}
            <radialGradient id="globeGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="0.1" />
            </radialGradient>
            
            {/* Glow filter */}
            <filter id="globeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Globe sphere */}
          <circle cx="200" cy="200" r="150" fill="url(#globeGradient)" filter="url(#globeGlow)" />
          
          {/* Globe outline */}
          <circle cx="200" cy="200" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.6" />
          
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
              strokeOpacity="0.3"
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
              strokeOpacity="0.3"
              transform={`rotate(${lng} 200 200)`}
            />
          ))}

          {/* Data points */}
          {[
            { x: 180, y: 120 },
            { x: 250, y: 150 },
            { x: 160, y: 200 },
            { x: 220, y: 230 },
            { x: 280, y: 180 },
            { x: 140, y: 160 },
            { x: 200, y: 280 },
          ].map((point, i) => (
            <g key={`point-${i}`}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill="hsl(var(--primary))"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="8"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity="0.5"
                className="animate-ping"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }}
              />
            </g>
          ))}

          {/* Connection lines between points */}
          <g stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.2">
            <line x1="180" y1="120" x2="250" y2="150" className="animate-neural" />
            <line x1="250" y1="150" x2="220" y2="230" className="animate-neural" style={{ animationDelay: '0.5s' }} />
            <line x1="160" y1="200" x2="220" y2="230" className="animate-neural" style={{ animationDelay: '1s' }} />
            <line x1="140" y1="160" x2="180" y2="120" className="animate-neural" style={{ animationDelay: '1.5s' }} />
            <line x1="280" y1="180" x2="250" y2="150" className="animate-neural" style={{ animationDelay: '2s' }} />
          </g>
        </svg>

        {/* Center core with brain */}
        <div className="absolute w-10 h-10 rounded-full bg-primary/20 animate-pulse shadow-[0_0_40px_hsl(var(--primary))] flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Bottom reflection */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-primary/10 to-transparent blur-xl" />
    </div>
  );
};

export default FuturisticGlobe;
