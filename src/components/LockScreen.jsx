import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDevice } from '../context/DeviceContext'
import StatusBar from './StatusBar'

const NOTIFICATIONS = [
  {
    id: 1,
    app: 'WhatsApp',
    icon: '💬',
    iconBg: '#25D366',
    title: 'Jords',
    body: 'OMFG you seeing this you seeing this?!?!',
    time: '21:41 PM',
  },
  {
    id: 2,
    app: 'Instagram',
    icon: '📷',
    iconBg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    title: 'Veristar started a Live Stream',
    body: '#ReachTheStars — De-orbit process is underway 🛰️',
    time: '21:25 PM',
  },

  {
    id: 3,
    app: 'WhatsApp',
    icon: '💬',
    iconBg: '#25D366',
    title: 'Niamh',
    body: '📷 Photo',
    time: '21:02 PM',
  },
  {
    id: 4,
    app: 'Local News',
    icon: '📰',
    iconBg: '#d00',
    title: 'Breaking News',
    body: 'Cascade Parties Light Up Manchester as City Prepares for Tonight\'s Sky Show',
    time: '21:00 PM',
  },
]

function NotificationBanner({ n, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '12px 14px',
        borderRadius: '16px',
        background: 'rgba(30,30,32,0.78)',
        backdropFilter: 'blur(30px) saturate(200%)',
        WebkitBackdropFilter: 'blur(30px) saturate(200%)',
        border: '1px solid rgba(255,255,255,0.1)',
        marginBottom: '8px',
      }}
    >
      <div style={{
        width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
        background: n.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '18px',
      }}>
        {n.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{n.app}</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>{n.time}</span>
        </div>
        <p style={{ color: 'white', fontSize: '14px', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{n.title}</p>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', margin: '2px 0 0', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.body}</p>
      </div>
    </motion.div>
  )
}

export default function LockScreen() {
  const { unlock } = useDevice()
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const timeStr = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  const dateStr = 'Saturday, 19 June'

  return (
    <motion.div
      key="lockscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.3 }}
      onClick={unlock}
      style={{
        position: 'absolute',
        inset: 0,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Wallpaper */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, #0f0c29 0%, #302b63 40%, #1a4a6e 70%, #0a2a4a 100%)',
        zIndex: 0,
      }} />
      {/* Subtle light bloom */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '30%',
        width: '60%',
        height: '40%',
        background: 'radial-gradient(ellipse, rgba(120,80,220,0.25) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Status bar */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <StatusBar transparent />
      </div>

      {/* Clock */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          marginTop: '40px',
          color: 'white',
        }}
      >
        <div style={{
          fontSize: '80px',
          fontWeight: 200,
          letterSpacing: '-2px',
          lineHeight: 1,
          textShadow: '0 2px 20px rgba(0,0,0,0.4)',
        }}>
          {timeStr}
        </div>
        <div style={{
          fontSize: '18px',
          fontWeight: 400,
          marginTop: '8px',
          color: 'rgba(255,255,255,0.8)',
          letterSpacing: '0.02em',
        }}>
          {dateStr}
        </div>
      </motion.div>

      {/* Notifications */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        flex: 1,
        padding: '40px 20px 0',
        overflow: 'hidden',
      }}>
        {NOTIFICATIONS.map((n, i) => (
          <NotificationBanner key={n.id} n={n} index={i} />
        ))}
      </div>

      {/* Swipe up prompt */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '24px 0 32px',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.03em',
        }}
      >
        Tap to unlock
      </motion.div>
    </motion.div>
  )
}
