import React from 'react';
import { Friend } from '../types';

interface FriendListProps {
  friends: Friend[];
  selectedFriendId: string;
  onSelectFriend: (id: string) => void;
}

/**
 * Sidebar component to list friends and handle selection.
 */
const FriendList: React.FC<FriendListProps> = ({
  friends,
  selectedFriendId,
  onSelectFriend,
}) => {
  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <div
          key={friend.id}
          className={`friend-item ${
            friend.id === selectedFriendId ? 'active' : ''
          }`}
          onClick={() => onSelectFriend(friend.id)}
          role="button"
          tabIndex={0}
          aria-label={`Select chat with ${friend.name}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSelectFriend(friend.id);
            }
          }}
        >
          {friend.name}
        </div>
      ))}
    </div>
  );
};

export default React.memo(FriendList);
