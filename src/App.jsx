import { DeviceProvider } from './context/DeviceContext'
import { useDeviceMode } from './hooks/useDeviceMode'
import DeviceShell from './components/DeviceShell'
import DeviceScreen from './components/DeviceScreen'

function AppInner() {
  const mode = useDeviceMode()
  return (
    <DeviceShell mode={mode}>
      <DeviceScreen mode={mode} />
    </DeviceShell>
  )
}

export default function App() {
  return (
    <DeviceProvider>
      <AppInner />
    </DeviceProvider>
  )
}
