import { useState, useEffect } from 'react'

function BatteryIcon({ pct = 72, dark = false }) {
  const fg = dark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)'
  const fill = dark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      <span style={{ fontSize: '11px', fontWeight: 500 }}>{pct}%</span>
      <div style={{
        width: '22px', height: '11px', borderRadius: '2px',
        border: `1px solid ${fg}`,
        position: 'relative', display: 'flex', alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute', right: '-4px', top: '2px',
          width: '2px', height: '5px', background: fill,
          borderRadius: '0 1px 1px 0',
        }} />
        <div style={{
          margin: '1px', height: '7px', borderRadius: '1px',
          width: `${(pct / 100) * 16}px`,
          background: pct > 20 ? (dark ? '#000' : 'white') : '#ff3b30',
        }} />
      </div>
    </div>
  )
}

function WifiIcon({ dark }) {
  return (
    <svg width="14" height="11" viewBox="0 0 14 11" fill={dark ? '#000' : 'white'}>
      <path opacity=".2" d="M7 8.5a1.2 1.2 0 1 1 0 2.4A1.2 1.2 0 0 1 7 8.5z" />
      <path opacity=".2" d="M3.8 6.2a4.5 4.5 0 0 1 6.4 0l-1 1a3 3 0 0 0-4.4 0l-1-1z" />
      <path opacity=".2" d="M1.1 3.5a8 8 0 0 1 11.8 0l-1 1a6.5 6.5 0 0 0-9.8 0l-1-1z" />
    </svg>
  )
}

function SignalIcon() {
  return (
    <span style={{ fontSize: '10px', fontWeight: 500, opacity: 0.6, letterSpacing: '0.02em' }}>
      No Service
    </span>
  )
}

export default function StatusBar({ transparent = false, dark = false }) {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const timeStr = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 20px 6px',
      color: dark ? '#000' : 'white',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.01em',
      position: 'relative',
      zIndex: 10,
      paddingTop: 'max(12px, env(safe-area-inset-top))',
    }}>
      <span style={{ minWidth: '60px' }}>{timeStr}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <SignalIcon />
        <WifiIcon dark={dark} />
        <BatteryIcon pct={72} dark={dark} />
      </div>
    </div>
  )
}
