interface TornEdgeProps {
  variant: 'dark-to-light' | 'light-to-dark'
}

export function TornEdge({ variant }: TornEdgeProps) {
  const fillColor = variant === 'dark-to-light' ? '#F5F0E8' : '#0E0D0C'

  return (
    <svg
      width="100%"
      height="80"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      style={{ display: 'block' }}
    >
      <path
        d="M0,80 L0,45 Q20,28 40,48 Q60,65 80,40 Q100,18 120,42 Q140,62 160,38 Q180,16 200,44 Q220,68 240,42 Q260,20 280,46 Q300,66 320,40 Q340,16 360,48 Q380,68 400,38 Q420,14 440,44 Q460,70 480,40 Q500,14 520,46 Q540,68 560,38 Q580,14 600,44 Q620,70 640,40 Q660,14 680,48 Q700,68 720,38 Q740,14 760,44 Q780,70 800,40 Q820,14 840,48 Q860,68 880,38 Q900,14 920,44 Q940,70 960,40 Q980,14 1000,48 Q1020,68 1040,38 Q1060,14 1080,44 Q1100,70 1120,40 Q1140,14 1160,48 Q1180,68 1200,38 Q1220,14 1240,44 Q1260,70 1280,40 Q1300,14 1320,48 Q1340,68 1360,38 Q1380,14 1400,44 Q1420,70 1440,46 L1440,80 Z"
        fill={fillColor}
      />
    </svg>
  )
}
