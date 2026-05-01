const HOURLY = [
  { time: '22:00', icon: '✨', temp: 21 },
  { time: '23:00', icon: '🌙', temp: 20 },
  { time: '00:00', icon: '🌙', temp: 19 },
  { time: '01:00', icon: '🌙', temp: 18 },
  { time: '02:00', icon: '🌙', temp: 17 },
  { time: '03:00', icon: '🌙', temp: 16 },
  { time: '04:00', icon: '🌙', temp: 16 },
  { time: '05:00', icon: '🌅', temp: 16 },
]

const WEEKLY = [
  { day: 'Today', hi: 24, lo: 15, icon: '☀️' },
  { day: 'Sun', hi: 23, lo: 14, icon: '🌤' },
  { day: 'Mon', hi: 21, lo: 13, icon: '⛅' },
  { day: 'Tue', hi: 18, lo: 12, icon: '🌦' },
  { day: 'Wed', hi: 16, lo: 11, icon: '🌧' },
  { day: 'Thu', hi: 18, lo: 12, icon: '🌤' },
  { day: 'Fri', hi: 20, lo: 13, icon: '☀️' },
]

export default function Weather() {
  return (
    <div
      className="scrollable"
      style={{
        height: '100%',
        background: 'linear-gradient(180deg, #0a1628 0%, #0d2550 50%, #1a3a6e 100%)',
        color: 'white',
        padding: '0 0 24px',
      }}
    >
      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '28px 20px 20px' }}>
        <div style={{ fontSize: '18px', fontWeight: 500, opacity: 0.9 }}>Manchester</div>
        <div style={{ fontSize: '72px', fontWeight: 200, lineHeight: 1.1, margin: '4px 0' }}>21°</div>
        <div style={{ fontSize: '18px', opacity: 0.85 }}>Clear</div>
        <div style={{ fontSize: '15px', opacity: 0.65, marginTop: '4px' }}>H:24° L:15°</div>
      </div>

      {/* Hourly */}
      <div style={{
        margin: '0 16px 12px',
        padding: '16px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.2)',
      }}>
        <div style={{ fontSize: '12px', fontWeight: 600, opacity: 0.7, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
          ✨ Clear skies overnight. Perfect for the SatCasc event.
        </div>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto' }}>
          {HOURLY.map(h => (
            <div key={h.time} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
              <div style={{ fontSize: '13px', opacity: 0.7 }}>{h.time}</div>
              <div style={{ fontSize: '22px' }}>{h.icon}</div>
              <div style={{ fontSize: '15px', fontWeight: 500 }}>{h.temp}°</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly */}
      <div style={{
        margin: '0 16px 12px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.2)',
        overflow: 'hidden',
      }}>
        <div style={{ fontSize: '12px', fontWeight: 600, opacity: 0.7, letterSpacing: '0.04em', textTransform: 'uppercase', padding: '14px 16px 10px' }}>
          📅 7-day forecast
        </div>
        {WEEKLY.map((d, i) => (
          <div key={d.day} style={{
            display: 'flex', alignItems: 'center',
            padding: '10px 16px',
            borderTop: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
          }}>
            <span style={{ flex: 1, fontSize: '15px', fontWeight: 500 }}>{d.day}</span>
            <span style={{ fontSize: '20px', marginRight: '12px' }}>{d.icon}</span>
            <div style={{ display: 'flex', gap: '16px', fontSize: '15px' }}>
              <span style={{ opacity: 0.5 }}>{d.lo}°</span>
              <span style={{ fontWeight: 500 }}>{d.hi}°</span>
            </div>
          </div>
        ))}
      </div>

      {/* Details grid */}
      <div style={{
        margin: '0 16px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
      }}>
        {[
          { label: 'UV Index', value: '0', sub: 'None — night' },
          { label: 'Wind', value: '6', sub: 'km/h SW' },
          { label: 'Humidity', value: '52%', sub: 'Feels 21°' },
          { label: 'Visibility', value: '40+', sub: 'km — excellent' },
        ].map(d => (
          <div key={d.label} style={{
            padding: '16px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}>
            <div style={{ fontSize: '12px', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>{d.label}</div>
            <div style={{ fontSize: '28px', fontWeight: 200, lineHeight: 1 }}>{d.value}</div>
            <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>{d.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
