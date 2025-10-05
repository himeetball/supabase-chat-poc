import { RealtimeChat } from '@/components/realtime-chat'
import { useState } from 'react'

export default function ChatPage() {
  const [username, setUsername] = useState('')

  return (
    <>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <RealtimeChat roomName="my-chat-room" username={username} />
    </>
  )
}
