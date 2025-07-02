import React from 'react';
import { Friend, Message } from '../types';
import MessageInput from './MessageInput';

interface ChatWindowProps {
  friend: Friend;
  messages: Message[];
  onSendMessage: (text: string) => void;
}

/**
 * Displays messages and message input for a selected friend.
 */
const ChatWindow: React.FC<ChatWindowProps> = ({
  friend,
  messages,
  onSendMessage,
}) => {
  return (
    <div className="chat-window">
      <h2>Chat with {friend.name}</h2>
      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.timestamp}
            className={`message ${msg.sender === 'me' ? 'me' : 'other'}`}
          >
            <div>{msg.text}</div>
            <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <MessageInput onSend={onSendMessage} />
    </div>
  );
};

export default React.memo(ChatWindow);
