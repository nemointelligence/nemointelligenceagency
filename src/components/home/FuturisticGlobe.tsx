import { useEffect, useRef } from "react";

const FuturisticGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      container.style.setProperty('--scroll-progress', scrollProgress.toString());
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl animate-pulse-slow" />
      
      {/* Globe container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Orbital rings */}
        <div className="absolute inset-4 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-8 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute inset-12 rounded-full border border-primary/40 animate-spin" style={{ animationDuration: '25s' }} />
        
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

            {/* Grid pattern */}
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
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

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary animate-float"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Center core */}
        <div className="absolute w-4 h-4 rounded-full bg-primary/80 animate-pulse shadow-[0_0_30px_hsl(var(--primary))]" />
      </div>

      {/* Bottom reflection */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-primary/10 to-transparent blur-xl" />
    </div>
  );
};

export default FuturisticGlobe;
