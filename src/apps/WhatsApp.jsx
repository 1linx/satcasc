import { useState } from 'react'

const CHATS = [

  {
    id: 1,
    name: 'Jords 🍾🍾🍾',
    avatar: '🧑🏻',
    avatarBg: '#0077b5',
    lastMsg: 'OMFG you seeing this?!?!',
    time: '21:38',
    unread: 2,
  },
  {
    id: 2,
    name: 'Niamh',
    avatar: '👩',
    avatarBg: '#e67e22',
    lastMsg: 'Just got here! This is SICK!!',
    time: '20:48',
    unread: 1,
  },
  {
    id: 3,
    name: 'MMU BioMech 2nd Year',
    avatar: '🎓',
    avatarBg: '#7c4dff',
    lastMsg: 'Zara: Anyone else completely unable to focus rn 😂 #SatCasc',
    time: '18:47',
    unread: 0,
  },
  {
    id: 4,
    name: 'Baba',
    avatar: '👨🏽',
    avatarBg: '#26a69a',
    lastMsg: 'Be careful out there tonight, it\'s very busy',
    time: '17:58',
    unread: 0,
  },
  {
    id: 5,
    name: 'Ma',
    avatar: '👩🏽',
    avatarBg: '#FF6B9D',
    lastMsg: 'Stay safe!',
    time: '17:57',
    unread: 0,
  },
  {
    id: 6,
    name: '🌟 Priya 🌟',
    avatar: '👩🏽',
    avatarBg: '#e91e8c',
    lastMsg: 'aaaarrgh I hate you',
    time: '17:42',
    unread: 0,
  },
]

const CONVERSATIONS = {

  1: [
    { id: 1, text: 'Heyyyy where you watching tonight??? 🌌', time: '17:22', mine: false },
    { id: 2, text: 'At home, with my parents 😭 where are you?', time: '17:23', mine: true },
    { id: 3, text: 'Still at Neemy\'s, heading out soon. What time does it actually start?', time: '17:23', mine: false },
    { id: 4, text: 'Peak is meant to be around 9:45 but there will be visible buildup apparently, look up #SatCasc it\'s insane how many satellites there actually are', time: '17:26', mine: true },
    { id: 5, text: 'You missing out on a party here girl literally EVERYONE is out', time: '17:38', mine: false },
    { id: 6, text: 'Ugh stfu bitch I am so jealous', time: '17:40', mine: true },
    { id: 7, text: 'lolololol miss you ❤️❤️❤️', time: '20:41', mine: false },
    { id: 8, text: 'Oh shit its starting', time: '21:21', mine: false },
    { id: 9, text: 'this is so cracked', time: '21:36', mine: false },
    { id: 10, text: 'OMFG you seeing this you seeing this?!?!', time: '21:38', mine: false },
  ],
  2: [
    { id: 1, text: 'are you really not coming out for the cascade party? 😢', time: '19:14', mine: false },
    { id: 2, text: 'yeah sry, watching with my parents and sis in the garden 🥰', time: '19:15', mine: true },
    { id: 3, text: 'ahh that\'s so lovely. I\'m going into town, Piccadilly is going to be WILD', time: '19:16', mine: false },
    { id: 4, text: 'Oh that\'ll be incredible, send me pictures!!', time: '19:17', mine: true },
    { id: 5, text: 'will do! have the best night with your fam 🥹', time: '19:18', mine: false },
    { id: 6, text: 'you too!! 💛', time: '19:19', mine: true },
    { id: 7, text: 'Just got here this is SICK!!', time: '20:48', mine: false },
    { id: 8, img: '/images/niamh.png', time: '21:02', mine: false },
  ],
  3: [
    { id: 1, text: 'has anyone actually done the Tamboli reading or are we all just watching satellites tonight', time: '11:04', mine: false },
    { id: 2, text: 'watching satellites obviously 🛰️', time: '11:06', mine: false },
    { id: 3, text: 'both. multitasking 😌', time: '11:09', mine: true },
    { id: 4, text: 'Niamh said she\'s watching from the Northern Quarter with a load of people', time: '11:14', mine: false },
    { id: 5, text: 'Dr T is DEFINITELY going to reference this in BME2003. I can already feel it', time: '11:31', mine: false },
    { id: 6, text: '💀 "as we observed during last year\'s cascade event"', time: '11:33', mine: true },
    { id: 7, text: 'Anyone else completely unable to focus rn 😂 #SatCasc', time: '18:47', mine: false },
  ],
  4: [
    { id: 1, text: 'Khuku have you seen the forecast? They\'re saying visibility in Manchester will be excellent tonight', time: '16:30', mine: false },
    { id: 2, text: 'Yes!! I\'m so excited, can we get the telescope out?', time: '16:32', mine: true },
    { id: 3, text: 'Of course. I will get it out of the loft.', time: '16:33', mine: false },
    { id: 4, text: 'Baba you are the BEST', time: '16:34', mine: true },
    { id: 5, text: 'It\'s all set up. And I found some of your things. Little Shreya\'s first science kit, do you remember that?', time: '16:52', mine: false },
    { id: 6, text: 'Aww, yeah I remember those blue crystals and how you spilled copper sulfate on the tablecloth', time: '16:54', mine: true },
    { id: 7, text: '❤️', time: '17:57', mine: false },
    { id: 8, text: 'Be careful out there tonight, it\'s very busy', time: '17:58', mine: false },
  ],
  5: [
    { id: 1, text: 'Shreya whattime are you cominh? I will mak you some dinmer', time: '17:52', mine: false },
    { id: 2, text: 'Thanks Ma, I\'m on my way, hopefully be there soon', time: '17:53', mine: true },
    { id: 3, text: 'Call me when you get tot he bus atop. I will send youre Baba to get you', time: '17:54', mine: false },
    { id: 4, text: 'It\'s fine Ma, I can walk', time: '17:55', mine: true },
    { id: 5, text: 'Be carful out their. A lot of strange people around', time: '17:55', mine: false },
    { id: 6, text: 'That\'s just because of the cascade night Ma, everyone is out', time: '17:56', mine: true },
    { id: 7, text: 'Stay safe!', time: '17:57', mine: false },
  ],
  6: [
    { id: 1, text: 'hi when you getting here?', time: '17:32', mine: false },
    { id: 2, text: 'Dad is driving me crazy he\'s been emptying out the loft again', time: '17:32', mine: false },
    { id: 3, text: 'I swear this place is going to be full of spiders', time: '17:32', mine: false },
    { id: 4, text: 'I\'m on way but the bus is packed, feels like I\'m breathing 90% old man stank 🤮', time: '17:33', mine: true },
    { id: 5, text: 'ewww', time: '17:34', mine: false },
    { id: 6, text: 'the is one guy has rolls that are like into the aisle', time: '17:35', mine: true },
    { id: 7, text: 'noooo', time: '17:35', mine: false },
    { id: 8, text: 'I\'m going to give him your snap kay 😂', time: '17:35', mine: true },
    { id: 9, text: 'srsly Shrey don\'t you dare I will end you', time: '17:35', mine: false },
    { id: 10, text: 'he\'s actually really nice', time: '17:41', mine: true },
    { id: 11, text: 'you\'re going to make a sweet couple 😂😂😂', time: '17:41', mine: true },
    { id: 12, text: 'aaaarrgh I hate you', time: '17:42', mine: false },
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
            {msg.img ? (
              <div style={{
                maxWidth: '72%',
                borderRadius: msg.mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                overflow: 'hidden',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                position: 'relative',
              }}>
                <img src={msg.img} alt="" style={{ display: 'block', width: '100%', maxWidth: '220px' }} />
                <div style={{
                  position: 'absolute', bottom: '6px', right: '8px',
                  fontSize: '11px', color: 'rgba(255,255,255,0.9)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                }}>
                  {msg.time}
                </div>
              </div>
            ) : (
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
            )}
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
