const TABS = [
  {
    id: 0,
    title: 'Manchester Metropolitan University',
    url: 'learn.mmu.ac.uk/courses/bme/year2/handbook',
    favicon: '🎓',
    content: (
      <iframe
        src="/university.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Manchester Metropolitan University eLearn — BEng Biomedical Engineering Year 2 Handbook"
      />
    ),
  },
  {
    id: 1,
    title: 'Biosystems Ethics & Policy',
    url: 'hallsworth.ac.uk/bep/11/3/okonkwo-lindqvist-2025',
    favicon: '📄',
    content: (
      <iframe
        src="/paper.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Biosystems Ethics & Policy — Engineered Organisms in Open Environments"
      />
    ),
  },
  {
    id: 2,
    title: 'Innovation & Entrepreneurship - Coast',
    url: 'coast.com/sites/sophiamarchetti/2027/04/03/gideon-vale-the-man-who-owns-the-sky',
    favicon: '🌊',
    content: (
      <iframe
        src="/forpes.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Coast — Gideon Vale: The Man Who Owns The Sky"
      />
    ),
  },
]

export default function Browser({ activeTab, onTabChange }) {
  const tab = TABS[activeTab] ?? TABS[0]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f2f2f7' }}>
      {/* Tab bar */}
      <div style={{
        display: 'flex',
        gap: '4px',
        padding: '10px 12px 8px',
        background: 'rgba(242,242,247,0.98)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        overflowX: 'auto',
        flexShrink: 0,
      }}>
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => onTabChange(t.id)}
            style={{
              padding: '7px 14px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: t.id === activeTab ? '#007AFF' : 'rgba(0,0,0,0.06)',
              color: t.id === activeTab ? '#fff' : '#555',
              transition: 'all 0.15s',
            }}
          >
            <span style={{ fontSize: '11px' }}>{t.favicon}</span>
            {t.title}
          </button>
        ))}
      </div>

      {/* URL bar */}
      <div style={{
        padding: '8px 12px',
        background: 'rgba(242,242,247,0.98)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        flexShrink: 0,
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.06)',
          borderRadius: '10px',
          padding: '7px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <svg width="11" height="14" viewBox="0 0 11 14" fill="#3c9" style={{ flexShrink: 0 }}>
            <path d="M5.5 0a4 4 0 0 0-4 4v1H0v9h11V5H9.5V4a4 4 0 0 0-4-4zm0 1.5A2.5 2.5 0 0 1 8 4v1H3V4A2.5 2.5 0 0 1 5.5 1.5zM1.5 6.5h8v6h-8v-6z"/>
          </svg>
          <span style={{ fontSize: '12px', color: '#333', flex: 1, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {tab.url}
          </span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="#999" style={{ flexShrink: 0 }}>
            <path d="M6.5 1a5.5 5.5 0 1 0 0 11A5.5 5.5 0 0 0 6.5 1zm0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-.5 1.5v3.25l2.5 1.5.5-.87-2-1.18V4H6z"/>
          </svg>
        </div>
      </div>

      {/* Page content */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {tab.content}
      </div>
    </div>
  )
}
