import { motion } from 'framer-motion'
import { useDevice } from '../context/DeviceContext'

export default function AppIcon({ app }) {
  const { openApp } = useDevice()

  return (
    <motion.div
      whileTap={{ scale: 0.88 }}
      onClick={() => openApp(app.id)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '18px',
          background: app.iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '34px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          flexShrink: 0,
        }}
      >
        {app.emoji}
      </div>
      <span style={{
        color: 'white',
        fontSize: '12px',
        fontWeight: 500,
        textAlign: 'center',
        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
        maxWidth: '72px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
        {app.name}
      </span>
    </motion.div>
  )
}
