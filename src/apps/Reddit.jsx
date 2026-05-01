const OP = {
  id: 0,
  subreddit: 'r/deals',
  user: 'u/BargainBoffin99',
  time: '4 hours ago',
  title: 'Veristar vs. competitors — I spent 3 hours comparing every deal so you don\'t have to [VIDEO]',
  votes: 2841,
  isVideo: true,
  videoTitle: 'Veristar vs. EE vs. Three: Which Satellite Plan Is Actually Worth It?',
  videoChannel: 'TechValueUK',
  videoDuration: '18:42',
  videoViews: '124K views',
  commentCount: 347,
}

const COMMENTS = [
  {
    id: 1,
    user: 'u/SatComms_Nerd',
    time: '3 hours ago',
    votes: 1204,
    text: 'Good breakdown. Worth noting for anyone on the fence: Veristar is literally owned by Vale Group, the same holding company behind VeraFuel. Gideon Vale is basically building a vertically integrated empire — energy, connectivity, the works. The satellite broadband is loss-leading to get people locked into the ecosystem.',
    replies: [
      {
        id: 11,
        user: 'u/JustHereForMemes',
        time: '3 hours ago',
        votes: 387,
        text: 'Wait, Vale Group owns VeraFuel?? I genuinely did not know that. That\'s kind of wild for a biofuel brand.',
      },
      {
        id: 12,
        user: 'u/SatComms_Nerd',
        time: '3 hours ago',
        votes: 521,
        text: 'Yep. Vale Group > Verdant Agritech (the farming/cultivation side) > VeraFuel (the consumer-facing fuel brand). Veristar is the newest arm. Tonight\'s whole SatCasc deorbit stunt is basically a £4bn ad campaign.',
      },
      {
        id: 13,
        user: 'u/GreenEnergyWatch',
        time: '2 hours ago',
        votes: 298,
        text: 'And Verdant Agritech has been buying up agricultural land across East Anglia, the Fens, the Welsh Valleys and the Pennine Moors, for about 6 years now. Enormous acreages dedicated entirely to their "proprietary organic cultivars". Nobody outside the company seems to know exactly what crop it is — they just call it a high-yield biomass feedstock. Smells off to me (sometimes literally, according to locals near the processing sites).',
      },
    ],
  },
  {
    id: 2,
    user: 'u/deal_or_no_deal_uk',
    time: '3 hours ago',
    votes: 876,
    text: 'The 24-month lock-in on Veristar Home is what kills it for me. Cancel fee is obscene. EE satellite is pricier per month but you can leave after 12.',
    replies: [],
  },
  {
    id: 3,
    user: 'u/TruthPillz_Actual',
    time: '2 hours ago',
    votes: 712,
    text: 'I\'ve been following the VeraFuel supply chain rabbit hole for months. Here\'s what I\'ve pieced together and nobody in MSM will touch:\n\n1. The Verdant "organic cultivar" grows unusually fast. We\'re talking industrial-scale growth rates that don\'t match any known bioenergy crop — not switchgrass, not miscanthus, nothing.\n2. It requires specialist harvest equipment that Verdant manufactures in-house. Won\'t sell or license it externally.\n3. The processing plants have unusually high perimeter security for what is supposedly a farm.\n4. Multiple people who\'ve worked on Verdant sites report mandatory NDAs and describe a plant that\'s "unlike anything they\'d seen before". One former contractor told me it moves. I don\'t mean sways in the wind.\n\nI\'m not saying anything. I\'m just saying look into it.',
    replies: [
      {
        id: 31,
        user: 'u/SkepticalSam_MCR',
        time: '2 hours ago',
        votes: 634,
        text: 'lmaooo here we go. It\'s a crop, mate. They keep it proprietary because it\'s commercially valuable IP. The "it moves" thing is just someone winding you up.',
      },
      {
        id: 32,
        user: 'u/TruthPillz_Actual',
        time: '1 hour ago',
        votes: 489,
        text: 'Laugh all you want. You can find planning documents from a 2024 Lincolnshire site application that describe fencing rated for "autonomous response containment". What does that mean for a plant? I\'ll wait.',
      },
      {
        id: 33,
        user: 'u/GreenEnergyWatch',
        time: '1 hour ago',
        votes: 203,
        text: 'I can corroborate the NDA point at least — a friend worked a logistics contract for Verdant last summer and couldn\'t talk about it at all. Said the pay was exceptional. Said he wouldn\'t go back.',
      },
    ],
  },
  {
    id: 4,
    user: 'u/NorthernTech_Lad',
    time: '1 hour ago',
    votes: 142,
    text: 'Anyway back on topic — does anyone know if Veristar works in areas with poor existing 4G? That\'s the only thing I actually care about.',
    replies: [
      {
        id: 41,
        user: 'u/SatComms_Nerd',
        time: '58 minutes ago',
        votes: 98,
        text: 'Yes, that\'s literally the point of LEO satellite. Should be solid anywhere with clear sky view. Tonight\'s deorbit will free up the orbital slots for the next-gen constellation apparently.',
      },
    ],
  },
]

function VoteButton({ count }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', minWidth: '28px' }}>
      <span style={{ fontSize: '14px', color: '#ff4500', lineHeight: 1 }}>▲</span>
      <span style={{ fontSize: '11px', fontWeight: 700, color: '#ff4500' }}>{count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count}</span>
      <span style={{ fontSize: '14px', color: '#878a8c', lineHeight: 1 }}>▼</span>
    </div>
  )
}

function Comment({ c, depth = 0 }) {
  return (
    <div style={{
      marginLeft: depth > 0 ? '12px' : '0',
      borderLeft: depth > 0 ? '2px solid #edeff1' : 'none',
      paddingLeft: depth > 0 ? '10px' : '0',
      marginTop: '12px',
    }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
        <VoteButton count={c.votes} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', color: '#878a8c', marginBottom: '4px' }}>
            <span style={{ fontWeight: 600, color: '#0f1a1c' }}>{c.user}</span>
            {' · '}{c.time}
          </div>
          <div style={{ fontSize: '13px', color: '#1c1c1c', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
            {c.text}
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
            <span style={{ fontSize: '11px', color: '#878a8c', fontWeight: 600 }}>💬 Reply</span>
            <span style={{ fontSize: '11px', color: '#878a8c', fontWeight: 600 }}>Share</span>
          </div>
        </div>
      </div>
      {c.replies && c.replies.map(r => <Comment key={r.id} c={r} depth={depth + 1} />)}
    </div>
  )
}

export default function Reddit() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#dae0e6' }}>

      {/* Subreddit header */}
      <div style={{
        background: '#ff4500', padding: '8px 14px', flexShrink: 0,
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <span style={{ fontSize: '18px' }}>👽</span>
        <span style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>r/deals</span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginLeft: 'auto' }}>347 comments</span>
      </div>

      <div className="scrollable" style={{ flex: 1 }}>

        {/* OP card */}
        <div style={{ background: '#fff', marginBottom: '8px', padding: '12px 14px' }}>
          <div style={{ fontSize: '11px', color: '#878a8c', marginBottom: '6px' }}>
            Posted by <span style={{ fontWeight: 600, color: '#0f1a1c' }}>{OP.user}</span> · {OP.time}
          </div>

          <div style={{ fontSize: '17px', fontWeight: 700, color: '#1c1c1c', lineHeight: 1.35, marginBottom: '12px' }}>
            {OP.title}
          </div>

          {/* Mock YouTube thumbnail */}
          <div style={{
            borderRadius: '8px', overflow: 'hidden', border: '1px solid #edeff1', marginBottom: '12px',
          }}>
            <div style={{ height: '330px', position: 'relative', overflow: 'hidden' }}>
              <img src="/images/youtube.png" alt={OP.videoTitle} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              {/* Play button */}
              <div style={{
                position: 'absolute', bottom: '10px', left: '10px',
                background: '#ff0000', borderRadius: '4px', padding: '3px 7px',
                display: 'flex', alignItems: 'center', gap: '4px',
              }}>
                <span style={{ color: 'white', fontSize: '10px' }}>▶</span>
                <span style={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>YouTube</span>
              </div>
              {/* Duration badge */}
              <div style={{
                position: 'absolute', bottom: '10px', right: '10px',
                background: 'rgba(0,0,0,0.8)', borderRadius: '3px', padding: '2px 5px',
                color: 'white', fontSize: '11px', fontWeight: 600,
              }}>
                {OP.videoDuration}
              </div>
            </div>
            <div style={{ padding: '8px 10px', background: '#f8f8f8' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1c1c1c' }}>{OP.videoTitle}</div>
              <div style={{ fontSize: '11px', color: '#878a8c', marginTop: '2px' }}>
                {OP.videoChannel} · {OP.videoViews}
              </div>
            </div>
          </div>

          {/* OP vote / action bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '16px', color: '#ff4500' }}>▲</span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#ff4500' }}>2.8k</span>
              <span style={{ fontSize: '16px', color: '#878a8c' }}>▼</span>
            </div>
            <span style={{ fontSize: '12px', color: '#878a8c', fontWeight: 600 }}>💬 {OP.commentCount} Comments</span>
            <span style={{ fontSize: '12px', color: '#878a8c', fontWeight: 600 }}>Share</span>
            <span style={{ fontSize: '12px', color: '#878a8c', fontWeight: 600 }}>Save</span>
          </div>
        </div>

        {/* Sort bar */}
        <div style={{
          background: '#fff', marginBottom: '8px', padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', color: '#878a8c', fontWeight: 600,
        }}>
          <span style={{ color: '#ff4500' }}>⬆ Top</span>
          <span style={{ margin: '0 4px', opacity: 0.4 }}>|</span>
          <span>New</span>
          <span style={{ margin: '0 4px', opacity: 0.4 }}>|</span>
          <span>Controversial</span>
        </div>

        {/* Comments */}
        <div style={{ background: '#fff', padding: '12px 14px', marginBottom: '8px' }}>
          {COMMENTS.map(c => <Comment key={c.id} c={c} />)}
        </div>

      </div>
    </div>
  )
}
