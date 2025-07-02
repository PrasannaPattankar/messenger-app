/**
 * Types shared across the messenger app
 */

export interface Friend {
  id: string;
  name: string;
}

export interface Message {
  sender: 'me' | 'friend';
  text: string;
  timestamp: number;
}

export type ChatHistory = Record<string, Message[]>;
