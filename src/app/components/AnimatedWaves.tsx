'use client'

export const AnimatedWaves = () => {
  return (
    <div className="waves-container absolute inset-0 overflow-hidden">
      <svg 
        className="waves relative w-full h-48 min-w-[1000px]"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 24 150 28" 
        preserveAspectRatio="none"
      >
        <defs>
          <path 
            id="wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            href="#wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.4)"
            style={{
              animation: 'move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite'
            }}
          />
          <use
            href="#wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.3)"
            style={{
              animation: 'move-forever 20s cubic-bezier(.55,.5,.45,.5) infinite'
            }}
          />
          <use
            href="#wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.2)"
            style={{
              animation: 'move-forever 15s cubic-bezier(.55,.5,.45,.5) infinite'
            }}
          />
          <use
            href="#wave"
            x="48"
            y="7"
            fill="rgba(255,255,255,0.1)"
            style={{
              animation: 'move-forever 10s cubic-bezier(.55,.5,.45,.5) infinite'
            }}
          />
        </g>
      </svg>
    </div>
  )
}

