# Messenger App

A simple Messenger app built with **React** and **TypeScript** as part of a coding challenge.

This project demonstrates:
- Selecting a friend to open a chat
- Sending messages in an in-memory chat window
- Clean React component architecture
- TypeScript best practices

**No backend calls or data persistence implemented, per the challenge instructions.**

---

## ✨ Features

- View a list of 10 friends from JSON data
- Click to select a friend and see their chat
- Type and send messages
- Chats are kept in memory (not persisted on page reload)
- Fully typed with TypeScript
- Optimized with React.memo, useCallback, and good coding standards
- Simple styling with CSS

---

## 🚀 Getting Started

Clone this repository:

```bash
git clone git@github.com:PrasannaPattankar/messenger-app.git
cd messenger-app

Install dependencies:

npm install


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 📝 Project Structure
/src
  /components
    FriendList.tsx
    ChatWindow.tsx
    MessageInput.tsx
  /data
    friends.json
  /types
    index.ts
  App.tsx
  index.tsx
  index.css

FriendList → Sidebar for selecting friends

ChatWindow → Displays messages and input box

MessageInput → Input field to type/send messages

### Technologies Used

React (with functional components)

TypeScript

CSS
