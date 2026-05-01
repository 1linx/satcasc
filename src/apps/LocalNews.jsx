const ARTICLES = [
  {
    id: 1,
    category: 'BREAKING',
    headline: 'Cascade Parties Light Up Manchester as City Prepares for Tonight\'s Sky Show',
    summary: 'Bars, parks and rooftops across Greater Manchester are hosting sell-out Cascade parties ahead of tonight\'s \'deorbiting\' event. Piccadilly Gardens and Castlefield Bowl are expected to draw tens of thousands of revellers.',
    author: 'Jane Hartley',
    time: '1 hour ago',
    imgEmoji: '🎉',
    imgBg: 'linear-gradient(135deg, #1a1a4e, #4a2080)',
    hot: true,
  },
  {
    id: 2,
    category: 'LOCAL',
    headline: 'High Street Footfall Up 12% Following New Pedestrian Zone',
    summary: 'The first full month of data since the pedestrian zone opened shows a significant increase in visitors to local shops. Traders report the busiest April in five years.',
    author: 'Tom Wells',
    time: '3 hours ago',
    imgEmoji: '🛍️',
    imgBg: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
  },
  {
    id: 3,
    category: 'SPORT',
    headline: 'Rusholme FC Secure Play-Off Place With Late Winner',
    summary: 'A stoppage-time goal from substitute Danny Brooks secured a dramatic 2-1 victory and clinched a top-six finish for Town FC.',
    author: 'Marcus Reid',
    time: '5 hours ago',
    imgEmoji: '⚽',
    imgBg: 'linear-gradient(135deg, #00b894, #00cec9)',
  },
  {
    id: 4,
    category: 'BUSINESS',
    headline: 'Verdant Agritech Submits Plans for Major Salford Site Expansion',
    summary: 'The biotech firm has filed a planning application to nearly double its Salford facility, citing growing demand for VeraFuel organic cultivars. Local residents\' groups have raised concerns over traffic and odour.',
    author: 'Amy Clarke',
    time: 'Yesterday',
    imgEmoji: '🌿',
    imgBg: 'linear-gradient(135deg, #1e5c2e, #4a9e5c)',
  },
  {
    id: 5,
    category: 'BUSINESS',
    headline: 'New Co-Working Space to Open in Former Bank Building',
    summary: 'A national operator has signed a lease on the landmark former HSBC building on Market Street, promising 120 flexible desks and a café open to the public.',
    author: 'Phil Nash',
    time: 'Yesterday',
    imgEmoji: '🏢',
    imgBg: 'linear-gradient(135deg, #0984e3, #74b9ff)',
  },
]

function Article({ a }) {
  return (
    <div style={{
      borderBottom: '1px solid #eee',
      padding: '16px',
      background: '#fff',
    }}>
      {/* Category */}
      <div style={{
        display: 'inline-block',
        padding: '3px 8px',
        borderRadius: '4px',
        background: a.hot ? '#cc0000' : '#f0f0f0',
        color: a.hot ? '#fff' : '#666',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.06em',
        marginBottom: '10px',
      }}>
        {a.category}
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            margin: '0 0 8px',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 1.3,
            color: '#1a1a1a',
          }}>
            {a.headline}
          </h3>
          <p style={{
            margin: '0 0 8px',
            fontSize: '14px',
            color: '#555',
            lineHeight: 1.5,
          }}>
            {a.summary}
          </p>
          <div style={{ fontSize: '12px', color: '#999' }}>
            {a.author} · {a.time}
          </div>
        </div>

        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '10px',
          flexShrink: 0,
          background: a.imgBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
        }}>
          {a.imgEmoji}
        </div>
      </div>
    </div>
  )
}

export default function LocalNews() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f9f9f9' }}>
      {/* Masthead */}
      <div style={{
        padding: '12px 16px 10px',
        background: '#cc0000',
        flexShrink: 0,
      }}>
        <div style={{ fontSize: '20px', fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>
          Manchester Gazette
        </div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', marginTop: '2px' }}>
          Your local news, updated hourly
        </div>
      </div>

      <div className="scrollable" style={{ flex: 1 }}>
        {ARTICLES.map(a => <Article key={a.id} a={a} />)}
      </div>
    </div>
  )
}
