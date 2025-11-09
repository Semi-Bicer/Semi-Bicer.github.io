import useLayoutContext from '../hooks/useLayoutContext'

type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  achievements: string[]
}

const copy = {
  en: {
    heading: 'Experience Timeline',
    intro:
      'My experience blends academic rigor with hands-on prototyping. I gravitate toward multidisciplinary teams and love the challenge of balancing technical excellence with creative ambition.',
    calloutTitle: "Let's build something great",
    calloutBody:
      "I'm excited about roles where I can keep blending gameplay programming with AI-driven systems. If that sounds like your team, feel free to reach out directly at",
    calloutCta: 'semih.bic.er@hotmail.com',
    experiences: [
      {
        role: 'Independent Game Developer',
        company: 'Self-Directed Projects',
        period: '2022 – Present',
        location: 'Remote',
        achievements: [
          'Prototype and ship Unity games with bespoke input, physics, and camera systems.',
          'Collaborate with artists and designers to iterate on core loops and player onboarding.',
          'Profile builds regularly, resolving frame spikes and GC pressure before release.',
        ],
      },
      {
        role: 'Computer Engineering Student',
        company: 'Pamukkale University',
        period: '2024 – Present',
        location: 'Denizli, Türkiye',
        achievements: [
          'Lead team coursework around data structures, algorithms, and software engineering principles.',
          'Explore reinforcement learning concepts to support AI-driven game mechanics.',
          'Facilitate study groups focused on modern C++, debugging, and clean architecture.',
        ],
      },
      {
        role: 'ML & Data Enthusiast',
        company: 'Open-source & Kaggle Practice',
        period: '2023 – Present',
        location: 'Remote',
        achievements: [
          'Build exploratory notebooks to evaluate model accuracy and visualize insights for stakeholders.',
          'Automate data preparation workflows using pandas, NumPy, and lightweight pipelines.',
          'Integrate prototype ML systems into gameplay concepts to inform adaptive difficulty.',
        ],
      },
    ] satisfies ExperienceItem[],
  },
  tr: {
    heading: 'Deneyim Zaman Çizelgesi',
    intro:
      'Deneyimim; akademik titizlik ile sahadaki prototiplemeyi birleştiriyor. Disiplinler arası ekiplerde çalışmayı seviyor ve teknik mükemmeliyet ile yaratıcı vizyonu dengeleme zorluklarından keyif alıyorum.',
    calloutTitle: 'Birlikte harika işler çıkaralım',
    calloutBody:
      'Oynanış programlamasını yapay zekâ tabanlı sistemlerle harmanlayabildiğim roller beni heyecanlandırıyor. Ekibinizin ihtiyaçları bunlara uyuyorsa benimle doğrudan iletişime geçebilirsiniz:',
    calloutCta: 'semih.bic.er@hotmail.com',
    experiences: [
      {
        role: 'Bağımsız Oyun Geliştiricisi',
        company: 'Kişisel Projeler',
        period: '2022 – Günümüz',
        location: 'Uzaktan',
        achievements: [
          'Unity ile özel girdi, fizik ve kamera sistemlerine sahip oyun prototipleri üretip yayınladım.',
          'Sanatçılar ve tasarımcılarla iş birliği yaparak temel döngüler ve oyuncu onboarding adımlarını iyileştirdim.',
          'Yayın öncesi kare zamanı düşüşlerini ve GC baskısını gidermek için düzenli profil çıkarma yaptım.',
        ],
      },
      {
        role: 'Bilgisayar Mühendisliği Öğrencisi',
        company: 'Pamukkale Üniversitesi',
        period: '2024 – Günümüz',
        location: 'Denizli, Türkiye',
        achievements: [
          'Veri yapıları, algoritmalar ve yazılım mühendisliği derslerinde ekip çalışmalarına liderlik ettim.',
          'Yapay zekâ destekli oynanış mekaniğine katkı sağlamak için pekiştirmeli öğrenme kavramlarını araştırdım.',
          'Modern C++, hata ayıklama ve temiz mimari odaklı çalışma gruplarını yönettim.',
        ],
      },
      {
        role: 'ML & Veri Meraklısı',
        company: 'Açık Kaynak & Kaggle Çalışmaları',
        period: '2023 – Günümüz',
        location: 'Uzaktan',
        achievements: [
          'Model doğruluğunu değerlendirmek ve içgörüleri görselleştirmek için keşifsel notebooklar hazırladım.',
          'Pandas, NumPy ve hafif akışlar kullanarak veri hazırlama süreçlerini otomatikleştirdim.',
          'Uyarlanabilir zorluk için prototip makine öğrenmesi sistemlerini oynanış konseptlerine entegre ettim.',
        ],
      },
    ] satisfies ExperienceItem[],
  },
}

function Experience() {
  const { language, theme } = useLayoutContext()
  const content = copy[language]

  const surfaces = theme === 'dark'
    ? {
        heading: 'text-white',
        intro: 'text-slate-300',
        border: 'border-slate-800',
        bullet: 'border-white bg-blue-400',
        card: 'bg-slate-900/60 border border-slate-800',
        cardHeading: 'text-white',
        cardCompany: 'text-blue-300',
        cardMeta: 'text-slate-400',
        cardBody: 'text-slate-300',
        callout: 'border border-dashed border-slate-700 bg-slate-900/60 text-slate-300',
        calloutHeading: 'text-white',
        calloutLink: 'text-blue-300 hover:text-blue-200',
      }
    : {
        heading: 'text-gray-900',
        intro: 'text-gray-600',
        border: 'border-gray-300',
        bullet: 'border-white bg-blue-500',
        card: 'bg-white shadow-xl',
        cardHeading: 'text-gray-900',
        cardCompany: 'text-blue-600',
        cardMeta: 'text-gray-500',
        cardBody: 'text-gray-600',
        callout: 'border border-dashed border-gray-300 bg-white/80 text-gray-600',
        calloutHeading: 'text-gray-900',
        calloutLink: 'text-blue-600 hover:underline',
      }

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className={`text-3xl font-semibold ${surfaces.heading}`}>{content.heading}</h2>
        <p className={`max-w-3xl text-sm leading-6 ${surfaces.intro}`}>{content.intro}</p>
      </section>

      <ol className={`relative border-l pl-6 ${surfaces.border}`}>
        {content.experiences.map((experience) => (
          <li key={`${experience.role}-${experience.company}`} className="mb-10 ml-4 last:mb-0">
            <div className={`absolute -left-[9px] h-4 w-4 rounded-full border-2 ${surfaces.bullet}`} aria-hidden />
            <div className={`${surfaces.card} rounded-3xl p-6`}>
              <header className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className={`text-xl font-semibold ${surfaces.cardHeading}`}>{experience.role}</h3>
                  <p className={`text-sm font-medium ${surfaces.cardCompany}`}>{experience.company}</p>
                </div>
                <div className={`text-right text-xs font-semibold uppercase tracking-wider ${surfaces.cardMeta}`}>
                  <p>{experience.period}</p>
                  <p>{experience.location}</p>
                </div>
              </header>
              <ul className={`mt-4 space-y-3 text-sm leading-6 ${surfaces.cardBody}`}>
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-500 dark:text-blue-300">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <section className={`${surfaces.callout} rounded-3xl p-8 text-sm`}>
        <h3 className={`text-xl font-semibold ${surfaces.calloutHeading}`}>{content.calloutTitle}</h3>
        <p className="mt-3 leading-6">
          {content.calloutBody}{' '}
          <a href="mailto:semih.bic.er@hotmail.com" className={`font-semibold ${surfaces.calloutLink}`}>
            {content.calloutCta}
          </a>
          .
        </p>
      </section>
    </div>
  )
}

export default Experience

