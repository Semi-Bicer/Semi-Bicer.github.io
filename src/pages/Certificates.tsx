import useLayoutContext from '../hooks/useLayoutContext'

type Certificate = {
  title: string
  issuer: string
  year: string
  summary: string
  status?: 'Completed' | 'In Progress' | 'Tamamlandı' | 'Devam Ediyor'
  credentialUrl?: string
}

type CopyContent = {
  heading: string
  intro: string
  viewCredential: string
  calloutTitle: string
  calloutBody: string
  certificates: Certificate[]
}

const copy: Record<'en' | 'tr', CopyContent> = {
  en: {
    heading: 'Certificates & Learning',
    intro:
      'I stay curious by consistently investing in structured learning. These programs sharpen my technical instincts and expose me to new ideas that flow straight into my gameplay and AI work.',
    viewCredential: 'View credential ↗',
    calloutTitle: 'Keep Learning',
    calloutBody:
      'Have a new certificate or workshop? Duplicate one of the cards above and drop the details in. The layout will adapt automatically.',
    certificates: [
      {
        title: 'Unity Essentials Pathway',
        issuer: 'Unity Learn',
        year: '2024',
        status: 'Completed',
        summary:
          'Structured deep dive through Unity workflows, covering scene management, scripting patterns, and optimization fundamentals.',
      },
      {
        title: 'Machine Learning Crash Course',
        issuer: 'Google Developers',
        year: '2023',
        status: 'Completed',
        summary:
          'Hands-on practice with supervised learning, model evaluation, and practical ML tooling using TensorFlow and Python.',
        credentialUrl: 'https://drive.google.com/file/d/1RzsgpJd7FF-obuXaj3OCcsk2awfb-gK0/view?usp=sharing'
        },
      {
        title: 'Game Design Foundations',
        issuer: 'GameDev.tv',
        year: '2022',
        status: 'In Progress',
        summary:
          'Exploring player psychology, core loop design, and balancing techniques to reinforce engineering decisions with design insights.',
      },
    ] satisfies Certificate[],
  },
  tr: {
    heading: 'Sertifikalar ve Öğrenme',
    intro:
      'Sürekli olarak yapılandırılmış eğitimlere yatırım yaparak merakımı canlı tutuyorum. Bu programlar teknik sezgilerimi keskinleştiriyor ve oynanış ile yapay zekâ çalışmalarımı besleyen yeni fikirler sunuyor.',
    viewCredential: 'Sertifikayı görüntüle ↗',
    calloutTitle: 'Öğrenmeye Devam',
    calloutBody:
      'Yeni bir sertifikanız veya atölye çalışmanız mı var? Yukarıdaki kartlardan birini kopyalayıp bilgileri eklemeniz yeterli; yerleşim otomatik olarak uyum sağlar.',
    certificates: [
      {
        title: 'Unity Essentials Pathway',
        issuer: 'Unity Learn',
        year: '2024',
        status: 'Tamamlandı',
        summary:
          'Unity iş akışlarını derinlemesine inceleyen, sahne yönetimi, betik kalıpları ve optimizasyon temellerini kapsayan yapılandırılmış bir eğitim.',
      },
      {
        title: 'Machine Learning Crash Course',
        issuer: 'Google Developers',
        year: '2023',
        status: 'Tamamlandı',
        summary:
          'Denetimli öğrenme, model değerlendirme ve TensorFlow ile Python tabanlı ML araçlarına yönelik uygulamalı çalışmalar.',
        credentialUrl: 'https://drive.google.com/file/d/1RzsgpJd7FF-obuXaj3OCcsk2awfb-gK0/view?usp=sharing'
      },
      {
        title: 'Game Design Foundations',
        issuer: 'GameDev.tv',
        year: '2022',
        status: 'Devam Ediyor',
        summary:
          'Mühendislik kararlarını desteklemek için oyuncu psikolojisi, temel döngü tasarımı ve dengeleme tekniklerini inceliyorum.',
      },
    ] satisfies Certificate[],
  },
}

function Certificates() {
  const { language, theme } = useLayoutContext()
  const content = copy[language]

  const surfaces = theme === 'dark'
    ? {
        heading: 'text-white',
        intro: 'text-slate-300',
        article: 'bg-slate-900/60 border border-slate-800',
        issuer: 'text-blue-300',
        meta: 'text-slate-400',
        status: 'bg-blue-400/20 text-blue-200',
        body: 'text-slate-300',
        link: 'text-blue-300 hover:text-blue-200',
        callout: 'border border-dashed border-blue-400/40 bg-slate-900/60 text-blue-100',
        calloutHeading: 'text-blue-200',
      }
    : {
        heading: 'text-gray-900',
        intro: 'text-gray-600',
        article: 'bg-white shadow-xl',
        issuer: 'text-blue-600',
        meta: 'text-gray-500',
        status: 'bg-blue-50 text-blue-600',
        body: 'text-gray-600',
        link: 'text-blue-600 hover:underline',
        callout: 'border border-dashed border-blue-200 bg-blue-50/80 text-blue-900',
        calloutHeading: 'text-blue-900',
      }

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className={`text-3xl font-semibold ${surfaces.heading}`}>{content.heading}</h2>
        <p className={`max-w-3xl text-sm leading-6 ${surfaces.intro}`}>{content.intro}</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {content.certificates.map((certificate) => (
          <article key={certificate.title} className={`${surfaces.article} rounded-3xl p-7`}>
            <header className="space-y-2">
              <h3 className={`text-xl font-semibold ${surfaces.heading}`}>{certificate.title}</h3>
              <p className={`text-sm font-medium ${surfaces.issuer}`}>{certificate.issuer}</p>
              <div className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-wider ${surfaces.meta}`}>
                <span>{certificate.year}</span>
                {certificate.status && (
                  <span className={`rounded-full px-3 py-1 ${surfaces.status}`}>{certificate.status}</span>
                )}
              </div>
            </header>
            <p className={`mt-4 text-sm leading-6 ${surfaces.body}`}>{certificate.summary}</p>
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 inline-block text-sm font-semibold ${surfaces.link}`}
              >
                {content.viewCredential}
              </a>
            )}
          </article>
        ))}
      </div>

      <section className={`${surfaces.callout} rounded-3xl p-8 text-sm`}>
        <h3 className={`text-xl font-semibold ${surfaces.calloutHeading}`}>{content.calloutTitle}</h3>
        <p className="mt-3 leading-6">{content.calloutBody}</p>
      </section>
    </div>
  )
}

export default Certificates

