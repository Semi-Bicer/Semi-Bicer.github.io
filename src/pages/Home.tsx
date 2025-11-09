import { Link } from 'react-router-dom'
import useLayoutContext from '../hooks/useLayoutContext'

const copy = {
  en: {
    heroTitle: "Hi, I'm Semih – Game Developer & Computer Engineer",
    heroBody:
      'I design and build interactive worlds that feel responsive, rewarding, and technically sound. My toolkit blends gameplay programming with AI-driven experimentation, helping me move quickly from idea to polished prototype.',
    heroBadges: ['Unity & C#', 'Python & ML', 'Systems Thinking'],
    heroPrimary: 'See featured projects',
    heroSecondary: 'Discover my story',
    highlightCards: [
      {
        title: 'About',
        description: 'Education journey, strengths, and what drives my engineering mindset.',
        action: 'See my story',
        to: '/about',
      },
      {
        title: 'Projects',
        description: 'Unity prototypes, Python tooling, and machine-learning experiments.',
        action: 'Explore builds',
        to: '/projects',
      },
      {
        title: 'Experience',
        description: 'Hands-on roles where I built gameplay systems and AI features.',
        action: 'Review timeline',
        to: '/experience',
      },
    ],
    expectationTitle: 'What you can expect from me',
    expectationBody:
      "Whether it's shipping a feature in Unity or building prototypes for machine-learning ideas, I combine a disciplined engineering process with a love for game feel. I thrive in collaborative, player-focused teams.",
    skillPillars: [
      {
        title: 'Gameplay Engineering',
        details: ['Unity/C#', 'Physics systems', 'Input & UX polish'],
      },
      {
        title: 'Technical Foundations',
        details: ['C++ fundamentals', 'Data structures', 'Design patterns'],
      },
      {
        title: 'AI & ML Curiosity',
        details: ['Python tooling', 'Model experimentation', 'Data visualization'],
      },
    ],
  },
  tr: {
    heroTitle: 'Merhaba, ben Semih – Oyun Geliştiricisi ve Bilgisayar Mühendisi',
    heroBody:
      'Etkileşimli dünyaları duyarlı, ödüllendirici ve teknik açıdan sağlam olacak şekilde tasarlayıp geliştiriyorum. Oyun programlama ve yapay zekâ denemelerini harmanlayan yaklaşımım, fikirleri hızla parlatılmış prototiplere dönüştürmemi sağlıyor.',
    heroBadges: ['Unity & C#', 'Python & ML', 'Sistemsel Yaklaşım'],
    heroPrimary: 'Öne çıkan projeleri gör',
    heroSecondary: 'Hikayemi keşfet',
    highlightCards: [
      {
        title: 'Hakkımda',
        description: 'Eğitim yolculuğum, güçlü yönlerim ve mühendislik yaklaşımımı şekillendiren motivasyonlar.',
        action: 'Hikayemi incele',
        to: '/about',
      },
      {
        title: 'Projeler',
        description: 'Unity prototipleri, Python araçları ve makine öğrenmesi deneylerim.',
        action: 'Çalışmaları keşfet',
        to: '/projects',
      },
      {
        title: 'Deneyim',
        description: 'Oynanış sistemleri ve yapay zekâ özellikleri geliştirdiğim gerçek projeler.',
        action: 'Zaman çizelgesine bak',
        to: '/experience',
      },
    ],
    expectationTitle: 'Benden neler bekleyebilirsiniz',
    expectationBody:
      'İster Unity’de yeni bir özellik geliştireyim ister makine öğrenmesi fikirlerini prototipleştireyim; disiplinli mühendislik süreçlerini oyun hissine verdiğim önemle birleştiriyorum. Takım oyununa ve oyuncu odağına dayalı ortamlarda parlıyorum.',
    skillPillars: [
      {
        title: 'Oynanış Mühendisliği',
        details: ['Unity/C#', 'Fizik sistemleri', 'Girdi ve kullanıcı deneyimi cilası'],
      },
      {
        title: 'Teknik Temeller',
        details: ['C++ temelleri', 'Veri yapıları', 'Tasarım kalıpları'],
      },
      {
        title: 'Yapay Zekâ Merakı',
        details: ['Python araçları', 'Model denemeleri', 'Veri görselleştirme'],
      },
    ],
  },
}

function Home() {
  const { language, theme } = useLayoutContext()
  const content = copy[language]

  const surface = theme === 'dark'
    ? {
        hero: 'bg-slate-900/80 border border-slate-800 shadow-none',
        highlight: 'bg-slate-900/60 border border-slate-800 hover:border-slate-700',
        expectation: 'border border-dashed border-blue-400/40 bg-slate-900/60',
        expectationText: 'text-blue-200',
        sectionCard: 'bg-slate-900/60 border border-slate-800',
        bodyText: 'text-slate-300',
      }
    : {
        hero: 'bg-white shadow-2xl',
        highlight: 'bg-white border border-gray-200 shadow hover:shadow-xl',
        expectation: 'border border-dashed border-blue-200 bg-blue-50',
        expectationText: 'text-blue-800',
        sectionCard: 'bg-white shadow',
        bodyText: 'text-gray-600',
      }

  const badgeClasses = theme === 'dark'
    ? ['bg-blue-500/15 text-blue-200', 'bg-green-500/15 text-green-200', 'bg-purple-500/20 text-purple-200']
    : ['bg-blue-100 text-blue-700', 'bg-green-100 text-green-700', 'bg-purple-100 text-purple-700']

  const primaryButtonClass = theme === 'dark'
    ? 'rounded-full bg-blue-500/90 px-5 py-2 text-white shadow-lg shadow-blue-700/30 transition hover:bg-blue-400'
    : 'rounded-full bg-blue-500 px-5 py-2 text-white shadow-lg shadow-blue-200 transition hover:bg-blue-600'

  const secondaryButtonClass = theme === 'dark'
    ? 'rounded-full border border-slate-700 px-5 py-2 text-slate-200 transition hover:border-blue-400 hover:text-blue-200'
    : 'rounded-full border border-gray-300 px-5 py-2 text-gray-600 transition hover:border-blue-500 hover:text-blue-600'

  return (
    <div className="space-y-10">
      <section className={`${surface.hero} rounded-3xl overflow-hidden`}> 
        <div className="flex flex-col gap-8 p-10 md:flex-row md:items-center">
          <img
            src="/Cv_foto2.jpg"
            alt="Semih Biçer profile"
            className="h-40 w-40 rounded-full border-4 border-blue-500 object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{content.heroTitle}</h2>
            <p className={`text-lg leading-relaxed ${surface.bodyText}`}>{content.heroBody}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {content.heroBadges.map((badge, index) => (
                <span key={badge} className={`rounded-full px-4 py-2 font-medium ${badgeClasses[index]}`}>
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
              <Link to="/projects" className={primaryButtonClass}>
                {content.heroPrimary}
              </Link>
              <Link to="/about" className={secondaryButtonClass}>
                {content.heroSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {content.highlightCards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className={`${surface.highlight} group rounded-2xl p-6 transition`}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300">
              {card.title}
            </h3>
            <p className={`mt-3 text-sm leading-6 ${surface.bodyText}`}>{card.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
              {card.action}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </section>

      <section className={`${surface.expectation} rounded-3xl p-8 md:p-10`}>
        <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200">{content.expectationTitle}</h3>
        <p className={`mt-3 max-w-3xl text-sm leading-6 ${surface.expectationText}`}>{content.expectationBody}</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {content.skillPillars.map((pillar) => (
            <div key={pillar.title} className={`${surface.sectionCard} rounded-2xl p-5`}> 
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{pillar.title}</h4>
              <ul className={`mt-3 space-y-2 text-sm ${surface.bodyText}`}>
                {pillar.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

