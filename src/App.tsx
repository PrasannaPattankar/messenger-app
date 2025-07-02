/**
 * Main App component for Messenger.
 * Loads friend list and manages chat state.
 */

import React, { useState, useCallback, useMemo } from 'react';
import FriendList from './components/FriendList';
import ChatWindow from './components/ChatWindow';
import { Friend, ChatHistory, Message } from './types';
import friendsData from './data/friends.json';

// Load friend list from JSON and cast to typed array
const initialFriends: Friend[] = friendsData as Friend[];

const App: React.FC = () => {
  // List of all friends
  const [friends] = useState<Friend[]>(initialFriends);

  // Currently selected friend's ID
  const [selectedFriendId, setSelectedFriendId] = useState<string>(
    friends[0]?.id || '',
  );

  // In-memory chat histories, keyed by friend ID
  const [chatHistory, setChatHistory] = useState<ChatHistory>({});

  /**
   * Handles selecting a friend from the sidebar.
   */
  const handleSelectFriend = useCallback((friendId: string) => {
    setSelectedFriendId(friendId);
  }, []);

  /**
   * Handles sending a message in the chat window.
   */
  const handleSendMessage = useCallback(
    (text: string) => {
      setChatHistory((prevHistory) => {
        const currentChat = prevHistory[selectedFriendId] || [];

        const newMessage: Message = {
          sender: 'me',
          text,
          timestamp: Date.now(),
        };

        return {
          ...prevHistory,
          [selectedFriendId]: [...currentChat, newMessage],
        };
      });
    },
    [selectedFriendId],
  );

  // Find currently selected friend object
  const selectedFriend = useMemo(
    () => friends.find((f) => f.id === selectedFriendId),
    [friends, selectedFriendId],
  );

  if (!selectedFriend) {
    return <div>Friend not found.</div>;
  }

  return (
    <div className="app-container">
      <FriendList
        friends={friends}
        selectedFriendId={selectedFriendId}
        onSelectFriend={handleSelectFriend}
      />
      <ChatWindow
        friend={selectedFriend}
        messages={chatHistory[selectedFriendId] || []}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default App;
