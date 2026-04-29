const HOURLY = [
  { time: 'Now', icon: '⛅', temp: 14 },
  { time: '12', icon: '🌤', temp: 16 },
  { time: '13', icon: '☀️', temp: 17 },
  { time: '14', icon: '☀️', temp: 18 },
  { time: '15', icon: '🌤', temp: 17 },
  { time: '16', icon: '⛅', temp: 15 },
  { time: '17', icon: '🌦', temp: 13 },
  { time: '18', icon: '🌧', temp: 12 },
]

const WEEKLY = [
  { day: 'Today', hi: 18, lo: 10, icon: '⛅' },
  { day: 'Thu', hi: 20, lo: 11, icon: '☀️' },
  { day: 'Fri', hi: 16, lo: 9, icon: '🌦' },
  { day: 'Sat', hi: 14, lo: 8, icon: '🌧' },
  { day: 'Sun', hi: 15, lo: 9, icon: '🌤' },
  { day: 'Mon', hi: 17, lo: 10, icon: '⛅' },
  { day: 'Tue', hi: 19, lo: 11, icon: '☀️' },
]

export default function Weather() {
  return (
    <div
      className="scrollable"
      style={{
        height: '100%',
        background: 'linear-gradient(180deg, #1a6fad 0%, #0d3d6e 60%, #0a2a4a 100%)',
        color: 'white',
        padding: '0 0 24px',
      }}
    >
      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '28px 20px 20px' }}>
        <div style={{ fontSize: '18px', fontWeight: 500, opacity: 0.9 }}>Manchester</div>
        <div style={{ fontSize: '72px', fontWeight: 200, lineHeight: 1.1, margin: '4px 0' }}>14°</div>
        <div style={{ fontSize: '18px', opacity: 0.85 }}>Partly Cloudy</div>
        <div style={{ fontSize: '15px', opacity: 0.65, marginTop: '4px' }}>H:18° L:10°</div>
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
          ⛅ Partly cloudy conditions expected this afternoon.
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
          { label: 'UV Index', value: '3', sub: 'Moderate' },
          { label: 'Wind', value: '14', sub: 'km/h SW' },
          { label: 'Humidity', value: '68%', sub: 'Feels 13°' },
          { label: 'Visibility', value: '10', sub: 'km' },
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
