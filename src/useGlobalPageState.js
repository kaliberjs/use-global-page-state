const state = new Map()
const listeners = new Map()

export function useGlobalPageState(key) {
  const [value, setValue] = React.useState(() => state.get(key))

  React.useEffect(
    () => {
      const keyListeners = listeners.get(key) || listeners.set(key, new Set()).get(key)
      keyListeners.add(setValue)
      return () => { keyListeners.delete(setValue) }
    },
    [key]
  )

  const setGlobalValue = React.useCallback(
    x => {
      const newState = typeof x === 'function' ? x(state.get(key)) : x
      state.set(key, newState)
      const keyListeners = listeners.get(key)
      if (keyListeners) keyListeners.forEach(x => x(newState))
    },
    [key]
  )

  return [value, setGlobalValue]
}
