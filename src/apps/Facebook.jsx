const POSTS = [
  {
    id: 1,
    name: 'Jordan Matthews',
    avatar: '🧑',
    avatarBg: '#1877f2',
    privacy: '🌐',
    time: '2 hours ago',
    content: 'Can\'t believe what\'s happening with the town centre tonight. Everyone needs to see this. Share if you agree!',
    imgBg: 'linear-gradient(135deg, #2d3436, #636e72)',
    imgEmoji: '🏛️',
    reactions: { total: 84, types: ['👍', '😮', '❤️'] },
    comments: 42,
    shares: 18,
  },
  {
    id: 2,
    name: 'Local Events — Your Town',
    avatar: '📅',
    avatarBg: '#e91e63',
    privacy: '🌐',
    time: 'Yesterday',
    content: '📢 TONIGHT — Extraordinary Council Meeting\n📍 Civic Hall, 7:00pm\nAll welcome. Free entry.\n\nThis is YOUR chance to have a say on the future of our town centre. See you there! 👇',
    reactions: { total: 231, types: ['👍', '❤️', '🎉'] },
    comments: 88,
    shares: 65,
  },
  {
    id: 3,
    name: 'Sarah Jane',
    avatar: '👩',
    avatarBg: '#e91e63',
    privacy: '👥',
    time: '2 days ago',
    content: 'Sunday brunch at The Orchard — absolutely delicious. Highly recommend the eggs benedict if you\'re looking for a treat! 🍳☕',
    imgBg: 'linear-gradient(135deg, #f093fb, #f5576c)',
    imgEmoji: '🍳',
    reactions: { total: 57, types: ['❤️', '😋', '👍'] },
    comments: 12,
    shares: 0,
  },
]

function Post({ p }) {
  return (
    <div style={{ background: '#fff', marginBottom: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      {/* Header */}
      <div style={{ display: 'flex', gap: '10px', padding: '12px 14px', alignItems: 'flex-start' }}>
        <div style={{
          width: '42px', height: '42px', borderRadius: '50%', flexShrink: 0,
          background: p.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px',
        }}>
          {p.avatar}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: '14px', color: '#1c1e21' }}>{p.name}</div>
          <div style={{ fontSize: '12px', color: '#65676b' }}>{p.time} · {p.privacy}</div>
        </div>
        <span style={{ color: '#65676b', fontSize: '20px' }}>···</span>
      </div>

      {/* Content */}
      <div style={{ padding: '0 14px 12px', fontSize: '15px', color: '#1c1e21', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
        {p.content}
      </div>

      {/* Image */}
      {p.imgBg && (
        <div style={{
          width: '100%', height: '200px',
          background: p.imgBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '56px',
        }}>
          {p.imgEmoji}
        </div>
      )}

      {/* Reaction count */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        padding: '8px 14px', borderBottom: '1px solid #e4e6ea',
        fontSize: '13px', color: '#65676b',
      }}>
        <span>{p.reactions.types.join('')} {p.reactions.total}</span>
        <span>{p.comments > 0 ? `${p.comments} comments` : ''}{p.shares > 0 ? ` · ${p.shares} shares` : ''}</span>
      </div>

      {/* Action bar */}
      <div style={{ display: 'flex', padding: '2px 0' }}>
        {[['👍', 'Like'], ['💬', 'Comment'], ['↗', 'Share']].map(([icon, label]) => (
          <div key={label} style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
            padding: '8px 0', cursor: 'pointer', fontSize: '13px', color: '#65676b', fontWeight: 600,
          }}>
            <span style={{ fontSize: '18px' }}>{icon}</span>
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Facebook() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f0f2f5' }}>
      {/* Stories / create post */}
      <div style={{
        background: '#fff', borderBottom: '1px solid #e4e6ea', flexShrink: 0, padding: '10px 14px',
      }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '50%', background: '#1877f2',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0,
          }}>👤</div>
          <div style={{
            flex: 1, background: '#f0f2f5', borderRadius: '20px', padding: '10px 14px',
            fontSize: '14px', color: '#8a8d91',
          }}>
            What's on your mind?
          </div>
        </div>
      </div>

      <div className="scrollable" style={{ flex: 1 }}>
        {POSTS.map(p => <Post key={p.id} p={p} />)}
      </div>

      {/* Bottom nav */}
      <div style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        padding: '6px 0 12px',
        background: '#fff', borderTop: '1px solid #e4e6ea',
        flexShrink: 0,
      }}>
        {['🏠', '👥', '🎬', '🛍️', '🔔'].map(icon => (
          <span key={icon} style={{ fontSize: '22px', cursor: 'pointer', padding: '4px 8px' }}>{icon}</span>
        ))}
      </div>
    </div>
  )
}
