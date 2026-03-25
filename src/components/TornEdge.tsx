interface TornEdgeProps {
  variant: 'dark-to-light' | 'light-to-dark'
}

export function TornEdge({ variant }: TornEdgeProps) {
  return (
    <div className="w-full h-10 md:h-12 overflow-hidden -mt-1 relative z-10 flex items-end">
      <svg
        viewBox="0 0 1200 50"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ transform: variant === 'light-to-dark' ? 'rotate(180deg)' : 'none' }}
      >
        <path
          fill={variant === 'dark-to-light' ? '#F5F0E8' : '#0E0D0C'}
          d="M0,50 L0,15 L20,20 L40,10 L60,25 L80,5 L100,18 L120,8 L140,22 L160,12 L180,28 L200,15 L220,30 L240,10 L260,25 L280,12 L300,20 L320,8 L340,22 L360,5 L380,18 L400,10 L420,25 L440,15 L460,28 L480,12 L500,20 L520,8 L540,25 L560,10 L580,22 L600,15 L620,28 L640,12 L660,20 L680,8 L700,25 L720,10 L740,22 L760,15 L780,28 L800,12 L820,20 L840,8 L860,25 L880,10 L900,22 L920,15 L940,28 L960,12 L980,20 L1000,8 L1020,25 L1040,10 L1060,22 L1080,15 L1100,28 L1120,12 L1140,20 L1160,8 L1180,25 L1200,15 L1200,50 Z"
        />
      </svg>
    </div>
  )
}
