# Mini Message Board (Node.js)

A mini message board built with **Express**, **EJS**, and **Node.js**, as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board).

This project allows users to post and view messages in a simple, server-rendered web app. It simulates core backend concepts like routing, templating, and middleware.

---

## Features

- View all messages on the homepage
- Add a new message via `/new`
- View individual message details via `/message/:id`
- All messages include:
  - `id` — a unique UUID
  - `user` — the sender's name
  - `text` — the message content
  - `description` — a longer preview or secondary text
  - `added` — timestamp of creation

---

## What I Changed From Original

- Added **UUIDs** for each message using Node's `crypto.randomUUID()`
- Included a `description` field to store longer preview text
- Created controller functions to manage logic (e.g. `getMessages`, `getMessage`, `postMessage`)
- Currently learning how to implement **custom error handling** via Express middleware

---

## File Structure

```
.
├── app.js
├── controllers
│   ├── indexController.js
│   ├── messageController.js
│   └── newMessageController.js
├── db.js
├── errors
│   └── CustomNoMessageError.js
├── package.json
├── package-lock.json
├── README.md
├── routes
│   ├── indexRouter.js
│   ├── messageRouter.js
│   └── newMessageRouter.js
└── views
├── form.ejs
├── index.ejs
└── message.ejs
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Sahilcreate/mini-message-board.git
cd mini-message-board
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
node app.js
```

Then open your browser and visit:
`http://localhost:3000`

---

## Learning Goals

This project helped me understand:

- Express routing and middleware
- View rendering with EJS
- Passing data between files
- Handling POST requests
- Building modular apps with routes, views, and controllers
- Error handling in Express (in progress)

---

## Next Steps

- Implement proper custom error middleware
- Add form validation and feedback
- Connect to real database
- Add edit/delete functionality for messages

---

## Author

Made by Sahil as part of The Odin Project.
Feel free to fork, star, or suggest improvements!
