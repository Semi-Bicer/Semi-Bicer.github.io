import useLayoutContext from '../hooks/useLayoutContext'

type Project = {
  title: string
  summaryLabel: string
  summary: string
  detailsLabel: string
  details: string
  skills: string[]
  link?: string
}

const copy = {
  en: {
    heading: 'Featured Projects',
    intro:
      'Each project is a playground for testing new ideas in gameplay feel, AI behavior, or engineering workflow. Below are a few highlights demonstrating how I approach prototyping, iteration, and player-focused design.',
    projects: [
      {
        title: 'Unity 2D Platformer',
        summaryLabel: 'Summary',
        summary: 'A responsive platform experience focused on precision movement and moment-to-moment polish.',
        detailsLabel: 'What I delivered',
        details:
          'Implemented bespoke physics, player state machines, and modular level systems. Tuned feedback loops for pick-ups, combat, and traversal.',
        skills: ['Unity', 'C#', 'Game Design'],
      },
      {
        title: 'Python Hack & Slash Prototype',
        summaryLabel: 'Summary',
        summary: 'A fast-paced arcade prototype built with Pygame to explore combat loops and enemy AI.',
        detailsLabel: 'What I delivered',
        details:
          'Optimized rendering pipelines, built configurable AI behaviors, and designed scalable content tools to tweak encounters rapidly.',
        skills: ['Python', 'Pygame', 'Optimization', 'AI Systems'],
      },
      {
        title: 'Health Insurance Prediction',
        summaryLabel: 'Summary',
        summary: 'Machine learning workflow predicting insurance costs using demographic health metrics.',
        detailsLabel: 'What I delivered',
        details:
          'Performed exploratory analysis, engineered features, and compared regression, decision tree, and random forest models to evaluate accuracy.',
        skills: ['Python', 'Machine Learning', 'Data Analysis'],
      },
    ] as Project[],
  },
  tr: {
    heading: 'Öne Çıkan Projeler',
    intro:
      'Her proje, oynanış hissi, yapay zekâ davranışları veya mühendislik süreçleri üzerine yeni fikirleri denediğim bir oyun alanı. Aşağıda prototipleme, iterasyon ve oyuncu odaklı tasarıma nasıl yaklaştığımı gösteren örnekleri bulabilirsiniz.',
    projects: [
      {
        title: 'Unity 2D Platform Oyunu',
        summaryLabel: 'Özet',
        summary: 'Keskin hareket ve anlık geri bildirimlere odaklanan duyarlı bir platformer deneyimi.',
        detailsLabel: 'Katkılarım',
        details:
          'Özel fizik sistemleri, oyuncu durum makineleri ve modüler seviye altyapıları geliştirdim. Toplanabilirler, dövüş ve keşif için geri bildirim döngülerini hassas şekilde ayarladım.',
        skills: ['Unity', 'C#', 'Oyun Tasarımı'],
      },
      {
        title: 'Python Hack & Slash Prototipi',
        summaryLabel: 'Özet',
        summary: 'Pygame ile inşa edilmiş, dövüş döngülerini ve düşman yapay zekâsını keşfeden hızlı tempolu bir arcade prototip.',
        detailsLabel: 'Katkılarım',
        details:
          'Render süreçlerini optimize ettim, yapılandırılabilir AI davranışları oluşturdum ve karşılaşmaları hızla dengelemek için içerik araçları tasarladım.',
        skills: ['Python', 'Pygame', 'Optimizasyon', 'AI Sistemleri'],
      },
      {
        title: 'Sağlık Sigortası Tahmini',
        summaryLabel: 'Özet',
        summary: 'Demografik sağlık metriklerini kullanarak sigorta maliyetlerini tahmin eden bir makine öğrenmesi akışı.',
        detailsLabel: 'Katkılarım',
        details:
          'Keşifsel analizler yaptım, özellik mühendisliği uyguladım ve doğruluk için regresyon, karar ağacı ve rastgele orman modellerini kıyasladım.',
        skills: ['Python', 'Makine Öğrenmesi', 'Veri Analizi'],
      },
    ] as Project[],
  },
} satisfies Record<'en' | 'tr', {
  heading: string
  intro: string
  projects: Project[]
}>

function Projects() {
  const { language, theme } = useLayoutContext()
  const content = copy[language]

  const surfaces = theme === 'dark'
    ? {
        heading: 'text-white',
        intro: 'text-slate-300',
        article: 'bg-slate-900/60 border border-slate-800',
        label: 'text-blue-300',
        body: 'text-slate-300',
        chip: 'bg-slate-800 text-slate-200',
        link: 'text-blue-300 hover:text-blue-200',
      }
    : {
        heading: 'text-gray-900',
        intro: 'text-gray-600',
        article: 'bg-white shadow-xl',
        label: 'text-blue-500',
        body: 'text-gray-600',
        chip: 'bg-gray-100 text-gray-700',
        link: 'text-blue-600 hover:text-blue-500',
      }

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className={`text-3xl font-semibold ${surfaces.heading}`}>{content.heading}</h2>
        <p className={`max-w-3xl text-sm leading-6 ${surfaces.intro}`}>{content.intro}</p>
      </section>

      <div className="space-y-6">
        {content.projects.map((project) => (
          <article key={project.title} className={`${surfaces.article} rounded-3xl p-8`}>
            <header className="flex flex-wrap items-center justify-between gap-4">
              <h3 className={`text-2xl font-semibold ${surfaces.heading}`}>{project.title}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-sm font-semibold ${surfaces.link}`}
                >
                  {language === 'tr' ? 'Depoyu görüntüle ↗' : 'View repository ↗'}
                </a>
              )}
            </header>
            <p className={`mt-4 text-sm font-semibold uppercase tracking-wider ${surfaces.label}`}>
              {project.summaryLabel}
            </p>
            <p className={`mt-2 text-sm leading-6 ${surfaces.body}`}>{project.summary}</p>
            <p className={`mt-4 text-sm font-semibold uppercase tracking-wider ${surfaces.label}`}>
              {project.detailsLabel}
            </p>
            <p className={`mt-2 text-sm leading-6 ${surfaces.body}`}>{project.details}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {project.skills.map((skill) => (
                <span key={skill} className={`rounded-full px-4 py-2 font-medium ${surfaces.chip}`}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects

