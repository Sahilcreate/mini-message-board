# Mini Message Board (Node.js)

A full-stack message board app built with **Express**, **EJS**, and **PostgreSQL**. Users can submit, view, and now **persist messages** in a real database — even after server restarts. Built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board).

This project allows users to post and view messages in a simple, server-rendered web app. It simulates core backend concepts like routing, templating, and middleware.

---

## Features

- View all messages on the homepage
- Add a new message via `/new`
- View individual message details via `/message/:id`
- All messages include:
  - `id` — a unique UUID
  - `username` — the sender's name
  - `message_heading` — the message content
  - `message_description` — a longer preview or secondary text
  - `added_date` — timestamp of creation

---

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL (via `pg`)
- **Templating:** EJS
- **Styling:** CSS
- **Hosting:** Supports connection to remote DBs (Aiven)

---

## File Structure

```
.
├── app.js                      # Entry point
├── ca.pem / ca_base64.txt      # SSL certs for hosted DB
├── controllers/                # Route logic
│ ├── deleteController.js
│ ├── indexController.js
│ ├── messageController.js
│ └── newMessageController.js
├── db/                         # DB setup + queries
│ ├── alterdb.js
│ ├── pool.js
│ ├── populatedb.js
│ └── queries.js
├── errors/                     # Custom errors
│ └── CustomNoMessageError.js
├── public/                     # Static assets
│ └── styles.css
├── routes/                     # Express routers
│ ├── deleteRouter.js
│ ├── indexRouter.js
│ ├── messageRouter.js
│ └── newMessageRouter.js
├── views/                      # EJS templates
│ ├── form.ejs
│ ├── index.ejs
│ └── message.ejs
├── .env                        # Environment variables
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
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

### 3. Configure environment

Create an `.env` file:

```env
PG_USER=your_db_user
PG_PASSWORD=your_password
PG_HOST=your_host
PG_PORT=your_port
PG_DATABASE=your_db_name
CA_CERT=your_base64_encoded_cert   # optional if using SSL

```

If you're using a remote database with SSL, ensure you base64-encode your `ca.pem`:

```bash
base 64 ca.pem > ca_base64.txt
```

### 4. Setup the DB

Run the script to create and populate the table:

```bash
node db/populatedb.js
```

### 5. Run the server

```bash
node app.js
```

Visit `http://localhost:3000` in your browser.

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

## Notable Improvements

Compared to original version:

- Persistent storage with PostgreSQL
- Modular DB logic using `pg.Pool` and async queries
- Secure `.env` usage with `dotenv`
- Route and controller separation for scalability
- Support for DB SSL certificates (Aiven)
- Added delete feature

---

## Next Steps

- [ ] Add edit functionality for messages
- [ ] Client-side form validation
- [ ] Dark mode toggle (just for fun)

## Author

Made by Sahil as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board).
Feel free to fork, star, or suggest improvements!
