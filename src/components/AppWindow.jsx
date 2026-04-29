import { motion } from 'framer-motion'
import { useDevice } from '../context/DeviceContext'
import { APPS } from '../apps/registry'
import StatusBar from './StatusBar'

export default function AppWindow() {
  const { state, closeApp, setTab } = useDevice()
  const app = APPS.find(a => a.id === state.openApp)
  if (!app) return null

  const AppComponent = app.component
  const activeTab = state.activeTabs[app.id] ?? 0

  return (
    <motion.div
      key={`app-${app.id}`}
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.96, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 36 }}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background: app.screenBg ?? '#fff',
        overflow: 'hidden',
        zIndex: 20,
      }}
    >
      {/* App status bar area */}
      <div style={{
        background: app.statusBarBg ?? 'rgba(0,0,0,0.0)',
        flexShrink: 0,
      }}>
        <StatusBar />
      </div>

      {/* App chrome header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px 10px',
        flexShrink: 0,
        background: app.headerBg ?? 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={closeApp}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: app.accentColor ?? '#007AFF',
            fontSize: '16px',
            fontWeight: 400,
            padding: '4px 0',
          }}
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="currentColor">
            <path d="M8 1L1 8l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          Home
        </motion.button>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px' }}>{app.emoji}</span>
          <span style={{
            fontSize: '16px',
            fontWeight: 600,
            color: app.titleColor ?? '#000',
          }}>
            {app.name}
          </span>
        </div>

        {/* Spacer to balance the back button */}
        <div style={{ minWidth: '64px' }} />
      </div>

      {/* App content */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <AppComponent
          activeTab={activeTab}
          onTabChange={(tab) => setTab(app.id, tab)}
        />
      </div>
    </motion.div>
  )
}
