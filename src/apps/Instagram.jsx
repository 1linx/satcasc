const POST = {
  user: 'iamtallulahrose',
  avatarInitials: 'IA',
  avatarBg: 'linear-gradient(135deg, #c9a0dc, #f0b8d0)',
  location: 'London, UK',
  time: 'June 19, 2027',
  likes: '2,847',
  commentCount: 341,
  caption: `ok so I know I've been quiet this week but I have been DEEP in a styling spiral for the most important outfit of the year and I think I've finally cracked it 🌟✨\n\njune 19th is basically a national holiday at this point?? like my entire group chat has been planning this for WEEKS. we've got the rooftop sorted, @harrist is bringing the prosecco situation under control, and I refuse to be the one who shows up underdressed to watch literal SPACE happen in real time 🚀🛰️\n\ncurrent vision: silver and midnight blue. celestial but make it fashion. statement earrings that say "I understand orbital mechanics" (I do not understand orbital mechanics)\n\nif you haven't seen what #aphelionproject actually is yet please go look it up I'm not exaggerating when I say this is the biggest free event any of us will ever see in our lifetimes?? like put down the Netflix and go OUTSIDE for once\n\ncannot wait to see everyone's looks on the night — drop yours in the comments because we are absolutely making this a whole thing 💫\n\nwhat are YOU wearing for the light show?? 👇👇`,
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
      user: 'sojoords_',
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
  { user: 'shreya.chakraborty', avatarBg: 'linear-gradient(135deg, #10d358, #045a0a)', isOwn: true },
  { user: 'bexmcallister', avatarBg: '#f5a623' },
  { user: 'sojoords', avatarBg: '#e91e8c' },
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
            <Avatar initials={POST.avatarInitials} bg="linear-gradient(135deg, #f9a825, #e65100)" size={36} ring />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 700 }}>{POST.user}</div>
              <div style={{ fontSize: '12px', color: '#888' }}>{POST.location}</div>
            </div>
            <span style={{ fontSize: '20px', color: '#888', cursor: 'pointer' }}>···</span>
          </div>

          {/* Post image */}
          <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
            <img src="/images/insta_2.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
            <Avatar initials="SC" bg="linear-gradient(135deg, #f9a825, #e65100)" size={28} />
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
        <Avatar initials="SC" bg="linear-gradient(135deg, #f9a825, #e65100)" size={26} />
      </div>
    </div>
  )
}
