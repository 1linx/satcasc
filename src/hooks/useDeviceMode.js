import { useState, useEffect } from 'react'

const FRAME_BREAKPOINT = 1024

export function useDeviceMode() {
  const [mode, setMode] = useState(
    () => window.innerWidth >= FRAME_BREAKPOINT ? 'framed' : 'fullscreen'
  )

  useEffect(() => {
    const handler = () =>
      setMode(window.innerWidth >= FRAME_BREAKPOINT ? 'framed' : 'fullscreen')
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return mode
}
