import { useState } from 'react'

const CHATS = [
  {
    id: 1,
    name: 'Jordan',
    avatar: '🧑',
    avatarBg: '#25D366',
    lastMsg: 'Did you see that?? You need to call me 😂',
    time: '9:41',
    unread: 3,
  },
  {
    id: 2,
    name: 'Mum',
    avatar: '👩',
    avatarBg: '#FF6B9D',
    lastMsg: 'Are you coming for dinner Sunday?',
    time: '9:15',
    unread: 1,
  },
  {
    id: 3,
    name: 'Work Team',
    avatar: '💼',
    avatarBg: '#0077b5',
    lastMsg: 'Sarah: The meeting has been moved to 3pm',
    time: 'Tue',
    unread: 0,
  },
  {
    id: 4,
    name: 'Mike',
    avatar: '🧔',
    avatarBg: '#8e44ad',
    lastMsg: 'Cheers mate, see you there 👍',
    time: 'Mon',
    unread: 0,
  },
  {
    id: 5,
    name: 'Book Club',
    avatar: '📚',
    avatarBg: '#e67e22',
    lastMsg: 'Emma: Have we decided on next month?',
    time: 'Sun',
    unread: 0,
  },
  {
    id: 6,
    name: 'Sarah',
    avatar: '👩‍🦰',
    avatarBg: '#e91e63',
    lastMsg: 'Loved that brunch spot! We should go again',
    time: 'Sat',
    unread: 0,
  },
]

const CONVERSATION = [
  { id: 1, from: 'Jordan', text: 'Have you heard what\'s happening tonight??', time: '9:35', mine: false },
  { id: 2, from: 'me', text: 'No what?? Tell me 👀', time: '9:36', mine: true },
  { id: 3, from: 'Jordan', text: 'The council vote on the town centre thing', time: '9:37', mine: false },
  { id: 4, from: 'Jordan', text: 'Everyone\'s going down there apparently', time: '9:37', mine: false },
  { id: 5, from: 'me', text: 'Oh wow, I didn\'t realise it was tonight', time: '9:39', mine: true },
  { id: 6, from: 'Jordan', text: 'Did you see that?? You need to call me 😂', time: '9:41', mine: false },
]

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

function ConversationView({ chat, onBack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
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

      {/* Messages */}
      <div
        className="scrollable"
        style={{
          flex: 1,
          padding: '12px 14px',
          background: '#e5ddd5',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23c8b9a3\' fill-opacity=\'0.15\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        }}
      >
        {CONVERSATION.map(msg => (
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

      {/* Input bar */}
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
    return <ConversationView chat={openChat} onBack={() => setOpenChat(null)} />
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      {/* WhatsApp top bar */}
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

      {/* Search */}
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
