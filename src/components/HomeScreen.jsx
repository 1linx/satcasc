import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import StatusBar from './StatusBar'
import AppIcon from './AppIcon'
import { APPS } from '../apps/registry'

const DOCK_APP_IDS = ['browser', 'whatsapp', 'instagram', 'weather']
const dockApps = DOCK_APP_IDS.map(id => APPS.find(a => a.id === id)).filter(Boolean)
const allGridApps = [...APPS]

export default function HomeScreen() {
  const [narrow, setNarrow] = useState(() => window.innerWidth < 550)

  useEffect(() => {
    const handler = () => setNarrow(window.innerWidth < 550)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return (
    <motion.div
      key="homescreen"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Wallpaper — same as lock screen */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, #0f0c29 0%, #302b63 40%, #1a4a6e 70%, #0a2a4a 100%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        top: '10%', left: '30%', width: '60%', height: '40%',
        background: 'radial-gradient(ellipse, rgba(120,80,220,0.25) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Status bar */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <StatusBar transparent />
      </div>

      {/* Icon grid */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        flex: 1,
        padding: '16px 28px 12px',
        display: 'grid',
        gridTemplateColumns: narrow ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
        gridAutoRows: '108px',
        alignContent: 'start',
        gap: '0',
      }}>
        {allGridApps.map((app, i) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04, duration: 0.3, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <AppIcon app={app} />
          </motion.div>
        ))}
      </div>

      {/* Dock */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        margin: '0 24px 24px',
        padding: '16px 20px',
        borderRadius: '28px',
        background: 'rgba(255,255,255,0.12)',
        backdropFilter: 'blur(30px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.18)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        {(narrow ? dockApps.slice(0, 3) : dockApps).map(app => (
          <AppIcon key={app.id} app={app} />
        ))}
      </div>

      {/* Home indicator */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '8px',
      }}>
        <div style={{
          width: '120px',
          height: '4px',
          borderRadius: '2px',
          background: 'rgba(255,255,255,0.5)',
        }} />
      </div>
    </motion.div>
  )
}
