import useLayoutContext from '../hooks/useLayoutContext'

const copy = {
  en: {
    profileTitle: 'Profile',
    profileParagraphs: [
      "I'm a computer engineer who loves building interactive systems. My journey blends academic research with practical game development—optimizing feel, implementing gameplay loops, and connecting code to player delight. I enjoy translating design intent into clean, reusable systems.",
      "Outside of code, you'll find me testing new indie titles, sketching level ideas, and exploring how machine learning can support smarter gameplay experiences.",
    ],
    contactTitle: 'Contact',
    contactInfo: [
      { label: 'Email', value: 'semih.bic.er@hotmail.com', href: 'mailto:semih.bic.er@hotmail.com' },
      { label: 'Phone', value: '+90 531 614 1027', href: 'tel:+905316141027' },
      { label: 'GitHub', value: 'Semi-Bicer', href: 'https://github.com/Semi-Bicer' },
      { label: 'LinkedIn', value: 'semih-bahadir-bicer', href: 'https://www.linkedin.com/in/semih-bahadir-bicer' },
      { label: 'Location', value: 'Denizli, Türkiye' },
    ],
    educationTitle: 'Education',
    education: {
      period: '2024 - Present',
      program: 'Computer Engineering',
      school: 'Pamukkale University',
      focus:
        'Specializing in game development, applied artificial intelligence, and modern software engineering practices.',
    },
    languagesTitle: 'Language Confidence',
    languageLevels: [
      { name: 'English', level: 'B2', confidence: 4 },
      { name: 'Japanese', level: 'JLPT N4', confidence: 2 },
    ],
    toolkitTitle: 'Technical Toolkit',
    technicalSkills: ['Unity', 'C#', 'C++', 'Python', 'Machine Learning', 'Git & GitHub'],
  },
  tr: {
    profileTitle: 'Profil',
    profileParagraphs: [
      'Etkileşimli sistemler kurmaktan keyif alan bir bilgisayar mühendisiyim. Akademik araştırmalarla pratik oyun geliştirmeyi harmanlayarak oyun hissini iyileştiriyor, oynanış döngülerini kuruyor ve kodu oyuncu deneyimine bağlıyorum. Tasarım hedeflerini temiz ve yeniden kullanılabilir sistemlere dönüştürmekten hoşlanıyorum.',
      'Kod dışında kalan vakitlerimde yeni indie oyunları dener, seviye fikirleri çizer ve yapay zekânın daha akıllı oynanış deneyimlerini nasıl destekleyebileceğini araştırırım.',
    ],
    contactTitle: 'İletişim',
    contactInfo: [
      { label: 'E-posta', value: 'semih.bic.er@hotmail.com', href: 'mailto:semih.bic.er@hotmail.com' },
      { label: 'Telefon', value: '+90 531 614 1027', href: 'tel:+905316141027' },
      { label: 'GitHub', value: 'Semi-Bicer', href: 'https://github.com/Semi-Bicer' },
      { label: 'LinkedIn', value: 'semih-bahadir-bicer', href: 'https://www.linkedin.com/in/semih-bahadir-bicer' },
      { label: 'Konum', value: 'Denizli, Türkiye' },
    ],
    educationTitle: 'Eğitim',
    education: {
      period: '2024 - Devam',
      program: 'Bilgisayar Mühendisliği',
      school: 'Pamukkale Üniversitesi',
      focus:
        'Oyun geliştirme, uygulamalı yapay zekâ ve modern yazılım mühendisliği pratiklerine odaklanıyorum.',
    },
    languagesTitle: 'Dil Yetkinliği',
    languageLevels: [
      { name: 'İngilizce', level: 'B2', confidence: 4 },
      { name: 'Japonca', level: 'JLPT N4', confidence: 2 },
    ],
    toolkitTitle: 'Teknik Araç Seti',
    technicalSkills: ['Unity', 'C#', 'C++', 'Python', 'Makine Öğrenmesi', 'Git & GitHub'],
  },
}

function About() {
  const { language, theme } = useLayoutContext()
  const content = copy[language]

  const surfaces = theme === 'dark'
    ? {
        panel: 'bg-slate-900/60 border border-slate-800',
        panelAlt: 'bg-slate-900/60 border border-slate-800',
        textMuted: 'text-slate-300',
        heading: 'text-white',
        link: 'text-blue-300 hover:text-blue-200',
        accentCard: 'border border-green-500/30 bg-green-500/10',
        accentLabel: 'text-green-200',
        accentBody: 'text-slate-200',
        languageBorder: 'border-slate-800',
        languageFill: 'bg-blue-400',
        languageTrack: 'bg-slate-800',
        chip: 'bg-blue-500/15 text-blue-200',
      }
    : {
        panel: 'bg-white shadow-xl',
        panelAlt: 'bg-white shadow-xl',
        textMuted: 'text-gray-600',
        heading: 'text-gray-900',
        link: 'text-blue-600 hover:text-blue-500',
        accentCard: 'border border-green-200 bg-green-50',
        accentLabel: 'text-green-700',
        accentBody: 'text-gray-600',
        languageBorder: 'border-gray-200',
        languageFill: 'bg-blue-500',
        languageTrack: 'bg-gray-200',
        chip: 'bg-blue-100 text-blue-700',
      }

  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className={`${surfaces.panel} rounded-3xl p-8`}>
          <h2 className={`text-2xl font-semibold ${surfaces.heading}`}>{content.profileTitle}</h2>
          {content.profileParagraphs.map((paragraph) => (
            <p key={paragraph} className={`mt-4 text-sm leading-6 ${surfaces.textMuted}`}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={`${surfaces.panelAlt} rounded-3xl p-8`}>
          <h3 className={`text-xl font-semibold ${surfaces.heading}`}>{content.contactTitle}</h3>
          <ul className={`mt-4 space-y-4 text-sm ${surfaces.textMuted}`}>
            {content.contactInfo.map((item) => (
              <li key={item.label} className="flex flex-col">
                <span className={`font-semibold ${surfaces.heading}`}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className={`mt-1 ${surfaces.link}`}>
                    {item.value}
                  </a>
                ) : (
                  <span className="mt-1">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className={`${surfaces.panel} rounded-3xl p-8`}>
          <h3 className={`text-xl font-semibold ${surfaces.heading}`}>{content.educationTitle}</h3>
          <div className={`mt-4 rounded-2xl p-6 ${surfaces.accentCard}`}>
            <p className={`text-sm font-semibold ${surfaces.accentLabel}`}>{content.education.period}</p>
            <h4 className={`mt-1 text-lg font-semibold ${surfaces.heading}`}>{content.education.program}</h4>
            <p className={`text-sm ${surfaces.textMuted}`}>{content.education.school}</p>
            <p className={`mt-4 text-sm leading-6 ${surfaces.accentBody}`}>{content.education.focus}</p>
          </div>
        </div>

        <div className={`${surfaces.panelAlt} rounded-3xl p-8`}>
          <h3 className={`text-xl font-semibold ${surfaces.heading}`}>{content.languagesTitle}</h3>
          <ul className="mt-4 space-y-4">
            {content.languageLevels.map((lang) => (
              <li key={lang.name} className={`rounded-2xl border p-4 ${surfaces.languageBorder}`}>
                <div className={`flex items-center justify-between text-sm font-semibold ${surfaces.heading}`}>
                  <span>{lang.name}</span>
                  <span className="text-blue-500 dark:text-blue-300">{lang.level}</span>
                </div>
                <div className="mt-3 flex gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={`lang-${lang.name}-${index}`}
                      className={`h-2.5 flex-1 rounded-full ${
                        index < lang.confidence ? surfaces.languageFill : surfaces.languageTrack
                      }`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${surfaces.panel} rounded-3xl p-8`}>
        <h3 className={`text-xl font-semibold ${surfaces.heading}`}>{content.toolkitTitle}</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {content.technicalSkills.map((skill) => (
            <span key={skill} className={`rounded-full px-4 py-2 text-sm font-medium ${surfaces.chip}`}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About

