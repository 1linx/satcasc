import { useState } from 'react'

const CHATS = [
  {
    id: 1,
    name: 'Priya 🌟',
    avatar: '👩🏽',
    avatarBg: '#e91e8c',
    lastMsg: 'Did you see that?? The Veristar stream just went live 😭',
    time: '9:41',
    unread: 3,
  },
  {
    id: 2,
    name: 'Mum',
    avatar: '👩🏽',
    avatarBg: '#FF6B9D',
    lastMsg: 'Dinner\'s nearly ready, where are you? 🍛',
    time: '9:15',
    unread: 1,
  },
  {
    id: 3,
    name: 'Jordan',
    avatar: '🧑🏻',
    avatarBg: '#0077b5',
    lastMsg: 'Save me a spot on the roof 😂',
    time: 'Tue',
    unread: 0,
  },
  {
    id: 4,
    name: 'MMU BioMech 2nd Year',
    avatar: '🎓',
    avatarBg: '#7c4dff',
    lastMsg: 'Zara: Anyone else completely unable to focus rn 😂 #SatCasc',
    time: 'Mon',
    unread: 0,
  },
  {
    id: 5,
    name: 'Niamh',
    avatar: '👩',
    avatarBg: '#e67e22',
    lastMsg: 'Just got here! This is WILD 🚀',
    time: '9:18',
    unread: 0,
  },
  {
    id: 6,
    name: 'Dad',
    avatar: '👨🏽',
    avatarBg: '#26a69a',
    lastMsg: 'Be careful out there tonight, it\'s very busy',
    time: '9:30',
    unread: 0,
  },
]

const CONVERSATIONS = {
  1: [
    { id: 1, text: 'Are you watching tonight?? 🌌', time: '9:22', mine: false },
    { id: 2, text: 'Obviously!! We\'ve set up on the roof garden 😭 where are you?', time: '9:23', mine: true },
    { id: 3, text: 'Still at Niamh\'s, heading out soon. What time does it actually start?', time: '9:24', mine: false },
    { id: 4, text: 'Peak is meant to be around 21:41 but the lead-up is already visible apparently, look up #SatCasc it\'s insane how many satellites there are', time: '9:26', mine: true },
    { id: 5, text: 'I can\'t believe this is actually happening 🚀 Gideon Vale really just said "I\'m going to clean up space" and DID IT', time: '9:38', mine: false },
    { id: 6, text: 'Honestly iconic. Did you read that Coast article about him? He\'s terrifying in a good way', time: '9:40', mine: true },
    { id: 7, text: 'Did you see that?? The Veristar stream just went live 😭', time: '9:41', mine: false },
  ],
  2: [
    { id: 1, text: 'Beti where have you gone? Dinner is nearly done 🍛', time: '8:52', mine: false },
    { id: 2, text: 'On the roof, the early ones are already visible! Come up!', time: '8:53', mine: true },
    { id: 3, text: 'In the dark?? At least put a jacket on', time: '8:54', mine: false },
    { id: 4, text: 'Mum it\'s 21 degrees outside 😂', time: '8:55', mine: true },
    { id: 5, text: 'Fine. But your dad already took his plate up there, don\'t you start', time: '9:10', mine: false },
    { id: 6, text: 'He beat me to it 😂 coming down now, save me some of everything', time: '9:12', mine: true },
    { id: 7, text: 'Dinner\'s nearly ready, where are you? 🍛', time: '9:15', mine: false },
  ],
  3: [
    { id: 1, text: 'oi are you doing anything for the SatCasc night', time: '14:22', mine: false },
    { id: 2, text: 'Staying home, watching from the roof garden! Dad\'s already talking about getting the telescope out 🔭', time: '14:25', mine: true },
    { id: 3, text: 'sick. I might go into the city, everyone\'s making a whole thing of it apparently', time: '14:27', mine: false },
    { id: 4, text: 'You should honestly, it\'s going to be mad. Come up to Manchester', time: '14:28', mine: true },
    { id: 5, text: 'nah I\'m skint after last weekend lol', time: '14:29', mine: false },
    { id: 6, text: 'Fair 😂 I\'ll send you videos', time: '14:30', mine: true },
    { id: 7, text: 'Save me a spot on the roof 😂', time: '14:31', mine: false },
  ],
  4: [
    { id: 1, text: 'has anyone actually done the Tamboli reading or are we all just watching satellites tonight', time: '11:04', mine: false },
    { id: 2, text: 'watching satellites obviously 🛰️', time: '11:06', mine: false },
    { id: 3, text: 'both. multitasking 😌', time: '11:09', mine: true },
    { id: 4, text: 'Priya said she\'s watching from the Northern Quarter with a load of people', time: '11:14', mine: false },
    { id: 5, text: 'Tamboli is DEFINITELY going to reference this in BME2003. I can already feel it', time: '11:31', mine: false },
    { id: 6, text: '💀 "as we observed during last year\'s cascade event"', time: '11:33', mine: true },
    { id: 7, text: 'Anyone else completely unable to focus rn 😂 #SatCasc', time: '11:47', mine: false },
  ],
  5: [
    { id: 1, text: 'are you going out for the satellite thing or staying home?', time: '8:44', mine: false },
    { id: 2, text: 'Staying home! Watching from the roof with my parents 🥰', time: '8:45', mine: true },
    { id: 3, text: 'ahh that\'s so lovely. I\'m going into town, Piccadilly should be an amazing spot for it', time: '8:46', mine: false },
    { id: 4, text: 'Oh that\'ll be incredible, send me pictures!!', time: '8:47', mine: true },
    { id: 5, text: 'will do! have the best night with your fam 🥹', time: '8:48', mine: false },
    { id: 6, text: 'you too!! 💛', time: '8:49', mine: true },
    { id: 7, text: 'Just got here! This is WILD 🚀', time: '9:18', mine: false },
  ],
  6: [
    { id: 1, text: 'Shreya have you seen the forecast? They\'re saying visibility in Manchester will be excellent tonight', time: '7:30', mine: false },
    { id: 2, text: 'Yes!! I\'m so excited, can we go up on the roof?', time: '7:32', mine: true },
    { id: 3, text: 'Of course. I\'m already looking for the old telescope 🔭', time: '7:33', mine: false },
    { id: 4, text: 'Dad you are the BEST', time: '7:34', mine: true },
    { id: 5, text: 'This is history, beta. Your generation will talk about this night', time: '9:22', mine: false },
    { id: 6, text: '😭 stop it you\'re going to make me cry', time: '9:23', mine: true },
    { id: 7, text: 'Be careful out there tonight, it\'s very busy', time: '9:30', mine: false },
  ],
}

const BG_PATTERN = "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23c8b9a3' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E\")"

function ChatRow({ chat, onOpen }) {
  return (
    <div
      onClick={() => onOpen(chat)}
      style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '12px 16px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0',
        background: 'white',
      }}
    >
      <div style={{
        width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
        background: chat.avatarBg, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '22px',
      }}>
        {chat.avatar}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: '15px', color: '#111' }}>{chat.name}</span>
          <span style={{ fontSize: '12px', color: chat.unread ? '#25D366' : '#999' }}>{chat.time}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
          <span style={{ fontSize: '13px', color: '#888', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '220px' }}>
            {chat.lastMsg}
          </span>
          {chat.unread > 0 && (
            <div style={{
              minWidth: '20px', height: '20px', borderRadius: '10px',
              background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', color: 'white', fontWeight: 700, padding: '0 5px', flexShrink: 0,
            }}>
              {chat.unread}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ConversationView({ chat, messages, onBack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '10px 16px',
        background: '#fff',
        borderBottom: '1px solid #f0f0f0',
        flexShrink: 0,
      }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#25D366' }}>
          ←
        </button>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: chat.avatarBg, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '18px',
        }}>
          {chat.avatar}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '15px' }}>{chat.name}</div>
          <div style={{ fontSize: '12px', color: '#888' }}>online</div>
        </div>
      </div>

      <div
        className="scrollable"
        style={{ flex: 1, padding: '12px 14px', background: '#e5ddd5', backgroundImage: BG_PATTERN }}
      >
        {messages.map(msg => (
          <div key={msg.id} style={{
            display: 'flex',
            justifyContent: msg.mine ? 'flex-end' : 'flex-start',
            marginBottom: '6px',
          }}>
            <div style={{
              maxWidth: '72%',
              padding: '8px 12px',
              borderRadius: msg.mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              background: msg.mine ? '#dcf8c6' : '#fff',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              fontSize: '14px',
              lineHeight: 1.5,
              color: '#111',
            }}>
              {msg.text}
              <div style={{ textAlign: 'right', fontSize: '11px', color: '#888', marginTop: '2px' }}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '8px 12px 12px',
        background: '#f0f0f0',
        flexShrink: 0,
      }}>
        <div style={{
          flex: 1, background: '#fff', borderRadius: '24px',
          padding: '10px 16px', fontSize: '14px', color: '#aaa',
        }}>
          Message
        </div>
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', flexShrink: 0,
        }}>🎤</div>
      </div>
    </div>
  )
}

export default function WhatsApp() {
  const [openChat, setOpenChat] = useState(null)

  if (openChat) {
    return (
      <ConversationView
        chat={openChat}
        messages={CONVERSATIONS[openChat.id] ?? []}
        onBack={() => setOpenChat(null)}
      />
    )
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 16px 12px',
        borderBottom: '1px solid #f0f0f0',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '22px', fontWeight: 700, color: '#111' }}>Chats</span>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ fontSize: '20px' }}>⋯</span>
          <span style={{ fontSize: '20px', color: '#25D366' }}>✎</span>
        </div>
      </div>

      <div style={{ padding: '8px 12px', background: '#fff', flexShrink: 0 }}>
        <div style={{
          background: '#f2f2f7', borderRadius: '10px', padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <span style={{ color: '#999', fontSize: '14px' }}>🔍</span>
          <span style={{ color: '#aaa', fontSize: '14px' }}>Search</span>
        </div>
      </div>

      <div className="scrollable" style={{ flex: 1 }}>
        {CHATS.map(c => <ChatRow key={c.id} chat={c} onOpen={setOpenChat} />)}
      </div>
    </div>
  )
}
