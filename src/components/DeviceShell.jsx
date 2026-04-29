import { useState, useEffect } from 'react'

const FRAME_W = 820
const FRAME_H = 1100

function useFrameScale() {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const compute = () => {
      const sx = (window.innerWidth - 80) / FRAME_W
      const sy = (window.innerHeight - 40) / FRAME_H
      setScale(Math.min(1, sx, sy))
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])
  return scale
}

export default function DeviceShell({ mode, children }) {
  const scale = useFrameScale()

  if (mode === 'fullscreen') {
    return (
      <div style={{ width: '100%', height: '100dvh', overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    )
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 90% 70% at 50% 35%, #2e2e30 0%, #0d0d0f 100%)',
        position: 'relative',
      }}
    >
      {/* Subtle desk texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '8px 8px',
          pointerEvents: 'none',
        }}
      />

      {/* Tablet frame */}
      <div
        style={{
          width: `${FRAME_W}px`,
          height: `${FRAME_H}px`,
          borderRadius: '38px',
          background:
            'linear-gradient(160deg, #4e4e50 0%, #3c3c3e 25%, #2c2c2e 60%, #1c1c1e 100%)',
          boxShadow: [
            'inset 0 0 0 1px rgba(255,255,255,0.13)',
            'inset 0 1px 0 rgba(255,255,255,0.18)',
            '0 50px 120px rgba(0,0,0,0.85)',
            '0 20px 50px rgba(0,0,0,0.5)',
            '0 0 0 1px rgba(0,0,0,0.6)',
          ].join(', '),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flexShrink: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {/* Front camera */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            background: '#111',
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.08), inset 0 0 3px rgba(100,180,255,0.25)',
          }}
        />

        {/* Volume up */}
        <div style={{ position: 'absolute', left: '-3px', top: '200px', width: '4px', height: '40px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(90deg, #3a3a3c, #2e2e30)', boxShadow: '-1px 0 2px rgba(0,0,0,0.6)' }} />
        {/* Volume down */}
        <div style={{ position: 'absolute', left: '-3px', top: '255px', width: '4px', height: '55px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(90deg, #3a3a3c, #2e2e30)', boxShadow: '-1px 0 2px rgba(0,0,0,0.6)' }} />
        {/* Mute switch */}
        <div style={{ position: 'absolute', left: '-3px', top: '155px', width: '4px', height: '30px', borderRadius: '2px 0 0 2px', background: 'linear-gradient(90deg, #3a3a3c, #2e2e30)', boxShadow: '-1px 0 2px rgba(0,0,0,0.6)' }} />

        {/* Power button */}
        <div style={{ position: 'absolute', right: '-3px', top: '260px', width: '4px', height: '70px', borderRadius: '0 2px 2px 0', background: 'linear-gradient(270deg, #3a3a3c, #2e2e30)', boxShadow: '1px 0 2px rgba(0,0,0,0.6)' }} />

        {/* Screen */}
        <div
          style={{
            width: '768px',
            height: '1024px',
            borderRadius: '10px',
            overflow: 'hidden',
            background: '#000',
            boxShadow:
              'inset 0 0 0 1px rgba(0,0,0,0.9), inset 0 0 30px rgba(0,0,0,0.5)',
            position: 'relative',
          }}
        >
          {children}
        </div>

        {/* Screen reflection glare */}
        <div
          style={{
            position: 'absolute',
            top: '44px',
            left: '26px',
            width: '768px',
            height: '400px',
            borderRadius: '10px 10px 60% 60%',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}
