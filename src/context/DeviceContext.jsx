import { createContext, useContext, useReducer, useCallback } from 'react'

const DeviceContext = createContext()

const initialState = {
  screen: 'locked',   // 'locked' | 'home' | 'app'
  openApp: null,      // app id string
  activeTabs: {},     // { [appId]: tabIndex }
}

function reducer(state, action) {
  switch (action.type) {
    case 'UNLOCK':
      return { ...state, screen: 'home' }
    case 'LOCK':
      return { ...state, screen: 'locked', openApp: null }
    case 'OPEN_APP':
      return { ...state, screen: 'app', openApp: action.appId }
    case 'CLOSE_APP':
      return { ...state, screen: 'home', openApp: null }
    case 'SET_TAB':
      return {
        ...state,
        activeTabs: { ...state.activeTabs, [action.appId]: action.tab },
      }
    default:
      return state
  }
}

export function DeviceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const unlock = useCallback(() => dispatch({ type: 'UNLOCK' }), [])
  const lock = useCallback(() => dispatch({ type: 'LOCK' }), [])
  const openApp = useCallback((appId) => dispatch({ type: 'OPEN_APP', appId }), [])
  const closeApp = useCallback(() => dispatch({ type: 'CLOSE_APP' }), [])
  const setTab = useCallback((appId, tab) => dispatch({ type: 'SET_TAB', appId, tab }), [])

  return (
    <DeviceContext.Provider value={{ state, unlock, lock, openApp, closeApp, setTab }}>
      {children}
    </DeviceContext.Provider>
  )
}

export function useDevice() {
  return useContext(DeviceContext)
}
