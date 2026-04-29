const POST = {
  user: 'iamtallulahrose',
  avatarInitials: 'TR',
  avatarBg: 'linear-gradient(135deg, #c9a0dc, #f0b8d0)',
  location: 'Manchester, England',
  time: 'June 19, 2027',
  likes: '2,847',
  commentCount: 341,
  caption: `ok so I know I've been quiet this week but I have been DEEP in a styling spiral for the most important outfit of the year and I think I've finally cracked it 🌟✨\n\njune 19th is basically a national holiday at this point?? like my entire group chat has been planning this for WEEKS. we've got the rooftop sorted, @bexmcallister is bringing the prosecco situation under control, and I refuse to be the one who shows up underdressed to watch literal SPACE happen in real time 🚀🛰️\n\ncurrent vision: silver and midnight blue. celestial but make it fashion. statement earrings that say "I understand orbital mechanics" (I do not understand orbital mechanics)\n\nif you haven't seen what #projectaphelion actually is yet please go look it up I'm not exaggerating when I say this is the biggest free event any of us will ever see in our lifetimes?? like put down the Netflix and go OUTSIDE for once\n\ncannot wait to see everyone's looks on the night — drop yours in the comments because we are absolutely making this a whole thing 💫\n\nwhat are YOU wearing for the light show?? 👇👇`,
  hashtags: '#Aphelion #ProjectAphelion #SatCasc #June19 #Veristar #VeristarLive #ReachTheStars #LightShow #NightSky #OutfitInspo #GRWM #GettingReady #CelestialVibes #SpaceFashion #Manchester #MCR #MancsOfInstagram #WhatImWearing #SummerSolstice #PartyTime #GirlsNight #RooftopVibes',
  comments: [
    {
      user: 'bexmcallister',
      avatarBg: '#f5a623',
      text: 'omg the PRESSURE of the prosecco situation being mentioned publicly 😭 it will be handled I promise',
      likes: 284,
      replies: [
        { user: 'iamtallulahrose', avatarBg: 'linear-gradient(135deg, #c9a0dc, #f0b8d0)', text: 'babe I have full confidence in you 🥂', isOP: true, likes: 91 },
      ],
    },
    {
      user: 'georgiafletcher_',
      avatarBg: '#e91e8c',
      text: 'the earrings. WHAT earrings. link NOW',
      likes: 167,
    },
    {
      user: 'maddieokoro',
      avatarBg: '#7c4dff',
      text: 'silver and midnight blue is so right for this I\'m fuming I didn\'t think of it first',
      likes: 203,
    },
    {
      user: 'the_real_danhurst',
      avatarBg: '#607d8b',
      text: 'my gf has been going on about this for two weeks so I guess I\'m watching it too 😅 still don\'t fully understand what\'s happening',
      likes: 445,
      replies: [
        { user: 'iamtallulahrose', avatarBg: 'linear-gradient(135deg, #c9a0dc, #f0b8d0)', text: 'honestly same but it\'s going to look incredible so who cares', isOP: true, likes: 312 },
      ],
    },
    {
      user: 'fashionbylorna',
      avatarBg: '#ff6f61',
      text: 'CELESTIAL BUT MAKE IT FASHION I\'m putting that on a mood board',
      likes: 118,
    },
    {
      user: 'n.prakash93',
      avatarBg: '#26a69a',
      text: 'not to be boring but is it definitely safe to stare at?? I read something about not looking directly',
      likes: 76,
      replies: [
        { user: 'iamtallulahrose', avatarBg: 'linear-gradient(135deg, #c9a0dc, #f0b8d0)', text: 'it\'s satellites burning up in the atmosphere babe not a solar eclipse 😂 we\'ll be fine', isOP: true, likes: 529 },
      ],
    },
    {
      user: 'stellaray__',
      avatarBg: '#ab47bc',
      text: 'the "I understand orbital mechanics" energy is sending me 💀',
      likes: 391,
    },
  ],
}

const STORIES = [
  { user: 'iamtallulahrose', avatarBg: 'linear-gradient(135deg, #c9a0dc, #f0b8d0)', isOwn: true },
  { user: 'bexmcallister', avatarBg: '#f5a623' },
  { user: 'georgiafletcher_', avatarBg: '#e91e8c' },
  { user: 'maddieokoro', avatarBg: '#7c4dff' },
  { user: 'veristar', avatarBg: 'linear-gradient(135deg, #0d1530, #1a2050)' },
  { user: 'fashionbylorna', avatarBg: '#ff6f61' },
]

function renderText(text) {
  return text.split(/(\s+)/).map((word, i) => {
    if (word.startsWith('#') || word.startsWith('@')) {
      return <span key={i} style={{ color: '#00376b' }}>{word}</span>
    }
    return word
  })
}

function Avatar({ initials, bg, size = 32, ring = false, isOP = false }) {
  const inner = (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.35, fontWeight: 700, color: 'white',
      flexShrink: 0,
      border: '2px solid white',
    }}>
      {initials}
    </div>
  )
  if (!ring) return inner
  return (
    <div style={{
      padding: '2px', borderRadius: '50%',
      background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
      flexShrink: 0,
    }}>
      {inner}
    </div>
  )
}

function Comment({ c, isReply = false }) {
  return (
    <div style={{ marginBottom: isReply ? '8px' : '14px', paddingLeft: isReply ? '44px' : '0' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <Avatar
          initials={c.user.slice(0, 2).toUpperCase()}
          bg={c.avatarBg}
          size={isReply ? 26 : 30}
          ring={c.isOP}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#111' }}>
            <span style={{ fontWeight: 700, marginRight: '6px' }}>{c.user}</span>
            {renderText(c.text)}
          </div>
          <div style={{ display: 'flex', gap: '14px', marginTop: '4px', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: '#999' }}>
              {isReply ? '2h' : typeof c.likes > 100 ? '3h' : '4h'}
            </span>
            {c.likes > 0 && (
              <span style={{ fontSize: '11px', color: '#999', fontWeight: 600 }}>{c.likes.toLocaleString()} likes</span>
            )}
            <span style={{ fontSize: '11px', color: '#999', fontWeight: 600, cursor: 'pointer' }}>Reply</span>
          </div>
        </div>
        <span style={{ fontSize: '12px', color: '#ccc', alignSelf: 'center' }}>♡</span>
      </div>
    </div>
  )
}

export default function Instagram() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>

      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 16px',
        borderBottom: '1px solid #efefef',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '22px', fontWeight: 700, fontStyle: 'italic', fontFamily: 'Georgia, serif', letterSpacing: '-0.5px' }}>
          Instagram
        </span>
        <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </div>
      </div>

      <div className="scrollable" style={{ flex: 1 }}>

        {/* Stories */}
        <div style={{
          display: 'flex', gap: '14px', padding: '12px 14px',
          overflowX: 'auto', borderBottom: '1px solid #efefef',
        }}>
          {STORIES.map((s, i) => (
            <div key={s.user} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
              <Avatar
                initials={s.user.slice(0, 2).toUpperCase()}
                bg={s.avatarBg}
                size={52}
                ring={!s.isOwn}
              />
              <span style={{ fontSize: '11px', color: '#333', maxWidth: '60px', textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {s.isOwn ? 'Your story' : s.user.split('_')[0]}
              </span>
            </div>
          ))}
        </div>

        {/* Post */}
        <div>
          {/* Post header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px' }}>
            <Avatar initials="TR" bg={POST.avatarBg} size={36} ring />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 700 }}>{POST.user}</div>
              <div style={{ fontSize: '12px', color: '#888' }}>{POST.location}</div>
            </div>
            <span style={{ fontSize: '20px', color: '#888', cursor: 'pointer' }}>···</span>
          </div>

          {/* Post image — CSS celestial art */}
          <div style={{
            width: '100%',
            aspectRatio: '1 / 1',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #060818 0%, #0b1030 30%, #111840 60%, #0a0f22 100%)',
          }}>
            {/* Star field */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: [
                'radial-gradient(1px 1px at 8% 12%, rgba(255,255,255,0.9) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 18% 28%, rgba(255,255,255,0.7) 0%, transparent 100%)',
                'radial-gradient(1.5px 1.5px at 30% 8%, rgba(200,210,255,0.95) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 42% 22%, rgba(255,255,255,0.6) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,0.8) 0%, transparent 100%)',
                'radial-gradient(1.5px 1.5px at 67% 5%, rgba(220,220,255,0.9) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 75% 20%, rgba(255,255,255,0.7) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 82% 35%, rgba(255,255,255,0.5) 0%, transparent 100%)',
                'radial-gradient(2px 2px at 90% 10%, rgba(200,215,255,0.8) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 95% 28%, rgba(255,255,255,0.6) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 12% 45%, rgba(255,255,255,0.4) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 22% 55%, rgba(255,255,255,0.5) 0%, transparent 100%)',
                'radial-gradient(1.5px 1.5px at 48% 40%, rgba(255,255,255,0.7) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 60% 50%, rgba(200,220,255,0.6) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 78% 48%, rgba(255,255,255,0.5) 0%, transparent 100%)',
                'radial-gradient(2px 2px at 88% 55%, rgba(255,220,255,0.6) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 5% 70%, rgba(255,255,255,0.4) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 35% 72%, rgba(255,255,255,0.5) 0%, transparent 100%)',
                'radial-gradient(1.5px 1.5px at 70% 65%, rgba(200,210,255,0.7) 0%, transparent 100%)',
                'radial-gradient(1px 1px at 92% 72%, rgba(255,255,255,0.4) 0%, transparent 100%)',
              ].join(', '),
            }} />

            {/* Aurora / glow effect */}
            <div style={{
              position: 'absolute',
              top: '15%', left: '10%',
              width: '80%', height: '40%',
              background: 'radial-gradient(ellipse, rgba(100,120,255,0.18) 0%, rgba(140,80,220,0.08) 50%, transparent 70%)',
              borderRadius: '50%',
            }} />
            <div style={{
              position: 'absolute',
              top: '25%', right: '5%',
              width: '50%', height: '35%',
              background: 'radial-gradient(ellipse, rgba(180,160,255,0.12) 0%, transparent 70%)',
              borderRadius: '50%',
            }} />

            {/* Silver sheen — the outfit preview area */}
            <div style={{
              position: 'absolute',
              bottom: '0', left: '0', right: '0',
              height: '55%',
              background: 'linear-gradient(180deg, transparent 0%, rgba(10,14,35,0.6) 40%, rgba(8,10,25,0.9) 100%)',
            }} />

            {/* Stylised figure silhouette */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '140px',
              height: '320px',
              background: 'linear-gradient(180deg, rgba(180,180,220,0.1) 0%, rgba(160,160,200,0.15) 30%, transparent 100%)',
              clipPath: 'polygon(35% 0%, 65% 0%, 70% 8%, 72% 16%, 80% 22%, 82% 35%, 90% 55%, 95% 80%, 100% 100%, 0% 100%, 5% 80%, 10% 55%, 18% 35%, 20% 22%, 28% 16%, 30% 8%)',
            }} />

            {/* Silver fabric shimmer */}
            <div style={{
              position: 'absolute',
              bottom: '8%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '110px',
              height: '180px',
              background: 'linear-gradient(135deg, rgba(200,205,230,0.22) 0%, rgba(160,170,210,0.08) 40%, rgba(200,200,240,0.18) 70%, transparent 100%)',
              clipPath: 'polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)',
            }} />

            {/* Orbit streak — suggests a satellite arc */}
            <div style={{
              position: 'absolute',
              top: '38%', left: '-10%',
              width: '120%', height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(180,180,255,0.4) 30%, rgba(220,220,255,0.7) 50%, rgba(180,180,255,0.4) 70%, transparent 100%)',
              transform: 'rotate(-12deg)',
            }} />

            {/* Second fainter streak */}
            <div style={{
              position: 'absolute',
              top: '32%', left: '-10%',
              width: '120%', height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(180,180,255,0.15) 30%, rgba(200,200,255,0.3) 55%, rgba(180,180,255,0.15) 75%, transparent 100%)',
              transform: 'rotate(-12deg)',
            }} />

            {/* Date watermark */}
            <div style={{
              position: 'absolute',
              top: '16px', right: '16px',
              fontFamily: '-apple-system, sans-serif',
              fontSize: '10px',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(180,190,255,0.5)',
            }}>
              19.06.27
            </div>

            {/* Location tag */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <svg width="10" height="12" viewBox="0 0 12 16" fill="rgba(255,255,255,0.5)">
                <path d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 7.5C4.62 7.5 3.5 6.38 3.5 5S4.62 2.5 6 2.5 8.5 3.62 8.5 5 7.38 7.5 6 7.5z"/>
              </svg>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>Manchester, England</span>
            </div>
          </div>

          {/* Action bar */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px 6px' }}>
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          </div>

          {/* Likes */}
          <div style={{ padding: '0 14px 6px', fontSize: '14px', fontWeight: 700 }}>
            {POST.likes} likes
          </div>

          {/* Caption */}
          <div style={{ padding: '0 14px 10px', fontSize: '14px', lineHeight: 1.55, color: '#111' }}>
            <span style={{ fontWeight: 700, marginRight: '6px' }}>{POST.user}</span>
            {POST.caption.split('\n').map((line, i) => (
              <span key={i}>
                {renderText(line)}
                {i < POST.caption.split('\n').length - 1 && <br />}
              </span>
            ))}
          </div>

          {/* Hashtags */}
          <div style={{ padding: '0 14px 10px', fontSize: '13px', lineHeight: 1.6, color: '#00376b' }}>
            {POST.hashtags}
          </div>

          {/* View all comments */}
          <div style={{ padding: '0 14px 10px', fontSize: '13px', color: '#999', cursor: 'pointer' }}>
            View all {POST.commentCount} comments
          </div>

          {/* Comments */}
          <div style={{ padding: '0 14px', borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>
            {POST.comments.map((c) => (
              <div key={c.user}>
                <Comment c={c} />
                {c.replies?.map(r => (
                  <Comment key={r.user + r.text} c={r} isReply />
                ))}
              </div>
            ))}
          </div>

          {/* Reply bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '12px 14px',
          }}>
            <Avatar initials="ME" bg="#ddd" size={28} />
            <div style={{
              flex: 1, fontSize: '13px', color: '#aaa',
              borderBottom: '1px solid #efefef', paddingBottom: '6px',
            }}>
              Add a comment…
            </div>
            <span style={{ fontSize: '13px', color: '#b0d0ff' }}>Post</span>
          </div>

          {/* Timestamp */}
          <div style={{ padding: '0 14px 20px', fontSize: '11px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {POST.time}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        padding: '10px 20px 14px',
        borderTop: '1px solid #efefef',
        background: '#fff',
        flexShrink: 0,
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#111" stroke="none"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <div style={{ width: '26px', height: '26px', border: '2px solid #111', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '12px', height: '12px', border: '2px solid #111', borderRadius: '2px' }} />
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
        <Avatar initials="TR" bg="linear-gradient(135deg, #c9a0dc, #f0b8d0)" size={26} />
      </div>
    </div>
  )
}
