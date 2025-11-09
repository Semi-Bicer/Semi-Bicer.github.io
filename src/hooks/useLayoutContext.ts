import { useOutletContext } from 'react-router-dom'

export type LayoutContextValue = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  language: 'en' | 'tr'
  setLanguage: (lang: 'en' | 'tr') => void
}

export function useLayoutContext() {
  return useOutletContext<LayoutContextValue>()
}

export default useLayoutContext

