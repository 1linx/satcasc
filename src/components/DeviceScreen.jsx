import { AnimatePresence } from 'framer-motion'
import { useDevice } from '../context/DeviceContext'
import LockScreen from './LockScreen'
import HomeScreen from './HomeScreen'
import AppWindow from './AppWindow'

export default function DeviceScreen({ mode }) {
  const { state } = useDevice()

  const style = mode === 'framed'
    ? { width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }
    : { width: '100%', height: '100dvh', position: 'relative', overflow: 'hidden' }

  return (
    <div style={style}>
      <AnimatePresence mode="wait">
        {state.screen === 'locked' && <LockScreen key="lock" />}
        {state.screen === 'home' && <HomeScreen key="home" />}
        {state.screen === 'app' && <AppWindow key={`app-${state.openApp}`} />}
      </AnimatePresence>
    </div>
  )
}
