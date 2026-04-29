const TABS = [
  {
    id: 0,
    title: 'Forpes',
    url: 'forpes.com/sites/sophiamarchetti/2027/04/03/gideon-vale-the-man-who-owns-the-sky',
    favicon: '🔴',
    content: (
      <iframe
        src="/forpes.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Forpes — Gideon Vale: The Man Who Owns The Sky"
      />
    ),
  },
  {
    id: 1,
    title: 'About Us',
    url: 'www.valegroup.com/about',
    favicon: '🌐',
    content: (
      <div style={{ padding: '24px 20px', background: '#f2f2f7', height: '100%' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 16px' }}>Vale Group</h2>
          <p style={{ color: '#555', lineHeight: 1.7, margin: '0 0 14px' }}>
            Placeholder about page for Vale Group. Add brand copy and supporting information here.
          </p>
          <p style={{ color: '#555', lineHeight: 1.7, margin: 0 }}>
            This tab can link to a real page or contain further static content about the campaign.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Project Aphelion',
    url: 'veristar.com/aphelion',
    favicon: '⭐',
    content: (
      <div style={{ padding: '24px 20px', background: '#07090f', height: '100%', color: 'white' }}>
        <div style={{ borderRadius: '16px', padding: '28px 24px', border: '1px solid rgba(100,160,255,0.2)', background: 'rgba(255,255,255,0.04)' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px', color: 'rgba(100,180,255,0.9)' }}>
            Project Aphelion
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 20px' }}>
            19 June 2027
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 14px', fontStyle: 'italic' }}>
            "The greatest light show in human history."
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, fontSize: '14px' }}>
            Add watch event details, registration links, and campaign content here.
          </p>
        </div>
      </div>
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
