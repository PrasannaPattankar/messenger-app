import React, { useState, useCallback } from 'react';

interface MessageInputProps {
  onSend: (text: string) => void;
}

/**
 * Input box for typing and sending a message.
 */
const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [text, setText] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleSend = useCallback(() => {
    if (text.trim()) {
      onSend(text.trim());
      setText('');
    }
  }, [text, onSend]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <div className="message-input">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        aria-label="Type your message"
      />
      <button onClick={handleSend} aria-label="Send message">
        Send
      </button>
    </div>
  );
};

export default React.memo(MessageInput);
