import { useEffect, useMemo, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

type ThemeMode = 'light' | 'dark'
type LanguageCode = 'en' | 'tr'

const navItems = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/about' },
  { key: 'projects', to: '/projects' },
  { key: 'experience', to: '/experience' },
  { key: 'certificates', to: '/certificates' },
]

const navLabels: Record<LanguageCode, Record<(typeof navItems)[number]['key'], string>> = {
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    certificates: 'Certificates',
  },
  tr: {
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    projects: 'Projeler',
    experience: 'Deneyim',
    certificates: 'Sertifikalar',
  },
}

const descriptors: Record<LanguageCode, { title: string; subtitle: string; tagline: string }> = {
  en: {
    title: 'Semih Biçer',
    subtitle: 'Game Developer & Computer Engineer',
    tagline: 'Building polished interactive experiences with clean, scalable systems.',
  },
  tr: {
    title: 'Semih Biçer',
    subtitle: 'Oyun Geliştiricisi & Bilgisayar Mühendisi',
    tagline: 'Ölçeklenebilir, temiz sistemlerle kusursuz etkileşimli deneyimler tasarlıyorum.',
  },
}

const LayoutContext = ({
  theme,
  toggleTheme,
  language,
  setLanguage,
}: {
  theme: ThemeMode
  toggleTheme: () => void
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
}) => {
  return <Outlet context={{ theme, toggleTheme, language, setLanguage }} />
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window === 'undefined') return 'en'
    const saved = window.localStorage.getItem('language')
    return saved === 'tr' ? 'tr' : 'en'
  })

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem('language', language)
  }, [language])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  const navigation = useMemo(
    () => navItems.map((item) => ({ ...item, label: navLabels[language][item.key] })),
    [language],
  )

  const palette = theme === 'dark'
    ? {
        background: 'bg-slate-950 text-slate-100',
        aside: 'bg-slate-900/70 border-slate-800/70',
        header: 'bg-slate-900/60 border-slate-800/80',
        footer: 'bg-slate-900/60 border-slate-800/80 text-slate-400',
        linkIdle: 'text-slate-300 hover:text-white',
        linkActive: 'border-blue-400 bg-blue-500/20 text-blue-200 shadow-none',
        linkBase: 'border border-transparent',
        profileSubtle: 'text-slate-400',
        languageBase: 'border-slate-700 bg-slate-900/60',
        languageActive: 'bg-blue-500 text-white shadow-lg shadow-blue-700/20',
        languageIdle: 'text-slate-300 hover:text-white',
        themeButton: 'border-slate-700 bg-slate-900/60 text-slate-200 hover:border-blue-400 hover:text-blue-200',
      }
    : {
        background: 'bg-gray-100 text-gray-900',
        aside: 'bg-white border-gray-200',
        header: 'bg-white/80 border-gray-200',
        footer: 'bg-white border-gray-200 text-gray-500',
        linkIdle: 'text-gray-600 hover:text-blue-600',
        linkActive: 'border-blue-500 bg-blue-100 text-blue-600 shadow-sm',
        linkBase: 'border border-transparent',
        profileSubtle: 'text-gray-500',
        languageBase: 'border-gray-200 bg-white',
        languageActive: 'bg-blue-500 text-white shadow-md',
        languageIdle: 'text-gray-500 hover:text-blue-600',
        themeButton: 'border-gray-200 bg-white text-gray-600 hover:border-blue-500 hover:text-blue-600',
      }

  const descriptor = descriptors[language]

  return (
    <div className={`transition-colors duration-300 ${palette.background}`}>
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <aside
          className={`hidden w-full max-w-xs flex-col border-r px-8 py-10 md:flex lg:max-w-sm ${palette.aside}`}
        >
          <div className="flex flex-col items-center gap-5 text-center">
            <img
              src="/Cv_foto2.jpg"
              alt="Semih Biçer profile"
              className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold">{descriptor.title}</h1>
              <p className={`text-sm font-medium ${palette.profileSubtle}`}>{descriptor.subtitle}</p>
            </div>
            <p className={`text-sm leading-6 ${palette.profileSubtle}`}>{descriptor.tagline}</p>
          </div>

          <nav className="mt-10 flex flex-col gap-2 text-sm font-medium">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-full px-5 py-2.5 transition-all ${palette.linkBase} ${
                    isActive ? palette.linkActive : palette.linkIdle
                  }`
                }
                end={item.to === '/'}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className={`border-b px-6 py-6 ${palette.header}`}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="md:hidden">
                  <h1 className="text-2xl font-bold">{descriptor.title}</h1>
                  <p className={`text-sm font-medium ${palette.profileSubtle}`}>{descriptor.subtitle}</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-xs uppercase tracking-[0.35em] text-blue-500">{descriptor.subtitle}</p>
                  <h2 className="mt-1 text-lg font-semibold">{descriptor.tagline}</h2>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${palette.themeButton}`}
                >
                  <span role="img" aria-hidden="true">
                    {theme === 'dark' ? '🌙' : '☀️'}
                  </span>
                  {theme === 'dark'
                    ? language === 'tr'
                      ? 'Aydınlık Tema'
                      : 'Light Mode'
                    : language === 'tr'
                      ? 'Koyu Tema'
                      : 'Dark Mode'}
                </button>

                <div
                  className={`flex items-center gap-1 rounded-full border p-1 text-sm font-semibold transition ${palette.languageBase}`}
                >
                  {(['en', 'tr'] as LanguageCode[]).map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLanguage(code)}
                      className={`rounded-full px-3 py-1 transition ${
                        language === code ? palette.languageActive : palette.languageIdle
                      }`}
                    >
                      {code === 'en' ? 'EN' : 'TR'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <nav className="mt-4 flex flex-wrap gap-2 md:hidden">
              {navigation.map((item) => (
                <NavLink
                  key={`mobile-${item.to}`}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition ${palette.linkBase} ${
                      isActive ? palette.linkActive : palette.linkIdle
                    }`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </header>

          <main className="flex-1 overflow-y-auto px-6 py-10 md:px-10">
            <LayoutContext theme={theme} toggleTheme={toggleTheme} language={language} setLanguage={setLanguage} />
          </main>

          <footer className={`border-t px-6 py-6 text-sm ${palette.footer}`}>
            © {new Date().getFullYear()} Semih Biçer. {language === 'tr' ? 'React & Tailwind ile geliştirildi.' : 'Built with React & Tailwind.'}
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App


