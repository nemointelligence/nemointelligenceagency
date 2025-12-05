const AIBrain = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto animate-float">
      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Robot Head Outline */}
        <defs>
          <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(222, 47%, 15%)" />
            <stop offset="100%" stopColor="hsl(222, 47%, 8%)" />
          </linearGradient>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(192, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(260, 80%, 60%)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Head Shell */}
        <ellipse
          cx="200"
          cy="200"
          rx="140"
          ry="160"
          fill="url(#headGradient)"
          stroke="hsl(222, 30%, 25%)"
          strokeWidth="2"
        />

        {/* Brain Container (Glass effect) */}
        <ellipse
          cx="200"
          cy="180"
          rx="100"
          ry="110"
          fill="hsl(222, 47%, 10%)"
          fillOpacity="0.6"
          stroke="hsl(192, 100%, 50%)"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {/* Neural Network Lines */}
        <g className="animate-neural" filter="url(#innerGlow)">
          {/* Central connections */}
          <path
            d="M150 150 Q200 130 250 150"
            stroke="url(#brainGradient)"
            strokeWidth="2"
            fill="none"
            strokeOpacity="0.6"
          />
          <path
            d="M130 180 Q200 160 270 180"
            stroke="url(#brainGradient)"
            strokeWidth="2"
            fill="none"
            strokeOpacity="0.7"
          />
          <path
            d="M140 210 Q200 190 260 210"
            stroke="url(#brainGradient)"
            strokeWidth="2"
            fill="none"
            strokeOpacity="0.6"
          />
          <path
            d="M160 240 Q200 220 240 240"
            stroke="url(#brainGradient)"
            strokeWidth="2"
            fill="none"
            strokeOpacity="0.5"
          />
        </g>

        {/* Brain Lobes */}
        <g filter="url(#glow)" className="animate-pulse-slow">
          {/* Left Hemisphere */}
          <path
            d="M140 140 Q120 180 130 220 Q140 250 180 260 Q200 265 200 180 Q200 130 160 130 Q140 130 140 140"
            fill="url(#brainGradient)"
            fillOpacity="0.15"
            stroke="url(#brainGradient)"
            strokeWidth="1.5"
          />
          {/* Right Hemisphere */}
          <path
            d="M260 140 Q280 180 270 220 Q260 250 220 260 Q200 265 200 180 Q200 130 240 130 Q260 130 260 140"
            fill="url(#brainGradient)"
            fillOpacity="0.15"
            stroke="url(#brainGradient)"
            strokeWidth="1.5"
          />
        </g>

        {/* Neural Nodes */}
        <g className="animate-glow">
          <circle cx="150" cy="150" r="6" fill="hsl(192, 100%, 50%)" fillOpacity="0.8" />
          <circle cx="250" cy="150" r="6" fill="hsl(192, 100%, 50%)" fillOpacity="0.8" />
          <circle cx="130" cy="190" r="5" fill="hsl(260, 80%, 60%)" fillOpacity="0.8" />
          <circle cx="270" cy="190" r="5" fill="hsl(260, 80%, 60%)" fillOpacity="0.8" />
          <circle cx="200" cy="140" r="8" fill="hsl(192, 100%, 50%)" fillOpacity="0.9" />
          <circle cx="170" cy="220" r="4" fill="hsl(192, 100%, 50%)" fillOpacity="0.7" />
          <circle cx="230" cy="220" r="4" fill="hsl(192, 100%, 50%)" fillOpacity="0.7" />
          <circle cx="200" cy="250" r="5" fill="hsl(260, 80%, 60%)" fillOpacity="0.8" />
        </g>

        {/* Robot Eyes */}
        <g>
          <ellipse
            cx="160"
            cy="320"
            rx="25"
            ry="15"
            fill="hsl(222, 47%, 12%)"
            stroke="hsl(192, 100%, 50%)"
            strokeWidth="2"
            className="animate-glow"
          />
          <ellipse
            cx="240"
            cy="320"
            rx="25"
            ry="15"
            fill="hsl(222, 47%, 12%)"
            stroke="hsl(192, 100%, 50%)"
            strokeWidth="2"
            className="animate-glow"
          />
          {/* Eye Glow */}
          <ellipse
            cx="160"
            cy="320"
            rx="10"
            ry="6"
            fill="hsl(192, 100%, 50%)"
            fillOpacity="0.8"
          />
          <ellipse
            cx="240"
            cy="320"
            rx="10"
            ry="6"
            fill="hsl(192, 100%, 50%)"
            fillOpacity="0.8"
          />
        </g>

        {/* Mouth/Speaker */}
        <rect
          x="170"
          y="370"
          width="60"
          height="8"
          rx="4"
          fill="hsl(222, 47%, 15%)"
          stroke="hsl(222, 30%, 25%)"
          strokeWidth="1"
        />

        {/* Neck */}
        <rect
          x="175"
          y="400"
          width="50"
          height="30"
          fill="url(#headGradient)"
          stroke="hsl(222, 30%, 25%)"
          strokeWidth="1"
        />

        {/* Circuit Lines on Head */}
        <g stroke="hsl(192, 100%, 50%)" strokeWidth="1" strokeOpacity="0.3">
          <line x1="100" y1="280" x2="130" y2="280" />
          <line x1="270" y1="280" x2="300" y2="280" />
          <line x1="90" y1="250" x2="110" y2="250" />
          <line x1="290" y1="250" x2="310" y2="250" />
        </g>

        {/* Antenna */}
        <g>
          <line
            x1="200"
            y1="40"
            x2="200"
            y2="70"
            stroke="hsl(222, 30%, 30%)"
            strokeWidth="4"
          />
          <circle
            cx="200"
            cy="35"
            r="8"
            fill="hsl(192, 100%, 50%)"
            className="animate-pulse-slow"
            filter="url(#glow)"
          />
        </g>
      </svg>
    </div>
  );
};

export default AIBrain;
