# 🐞 MERN Bug Tracker

A full-stack Bug Tracker built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to:

- Report bugs
- View all reported bugs
- Update bug status (open, in-progress, resolved)
- Delete bugs

Includes structured error handling and debugging tools. Testing setup is available but optional.

---

## 📁 Project Structure

```
mern-bug-tracker/
├── server/           # Backend (Express + MongoDB)
│   ├── index.js
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── tests/
└── client/           # Frontend (React)
    ├── src/
        ├── components/
        ├── tests/
        ├── App.js
        └── App.css
```

---

## 🚀 Features

### ✅ Core Functionality

- Add new bugs using a form
- View list of all bugs
- Update bug status
- Delete bugs

### 🧪 Testing (Optional Setup)

- Integration tests for backend API (`Jest` + `Supertest`)
- Unit/component tests for React frontend (`React Testing Library`)
- Tests are currently **optional**; not required to run the application.

---

## ⚙️ Installation & Running the App

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-bug-tracker.git
cd mern-bug-tracker
```

---

### 2. Backend Setup (Server)

```bash
cd server
npm install
```

#### 🔐 Create a `.env` file:

```
MONGO_URI=mongodb://localhost:27017/bugtracker
PORT=5000
```

#### ▶ Start the server

```bash
npm run dev
```

If using MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

---

### 3. Frontend Setup (Client)

```bash
cd ../client
npm install
npm start
```

This opens the app in your browser at `http://localhost:3000`

---

## 🎨 Styling

The frontend uses custom CSS (`App.css`) to provide:

- Centered layout
- Styled form & buttons
- Clean bug list with spacing
- Responsive elements (basic)

---

## 🐛 Debugging Tools

- **Console logs** in `App.js`, `BugForm.js`, and `BugList.js`
- **Chrome DevTools** to monitor network requests and component states
- **Error boundaries** for React (`ErrorBoundary.js`)
- **Node.js logs** for server-side errors
- **Express error middleware** to catch and display backend errors

---

## 🛠 Error Handling

### Backend (Node.js + Express)
- Centralized `errorHandler.js` middleware to capture any errors
- Responds with status `500` and a helpful message

### Frontend (React)
- `ErrorBoundary.js` component wraps the app
- Catches React runtime errors and shows a fallback UI

---

## ✅ Testing Setup (Optional)

To enable full test support:
1. Configure Jest to support ESM modules like Axios.
2. Set up Babel with React presets.
3. Mock Axios in tests if needed.

Tests are in:
- `server/tests/` – API tests using `supertest`
- `client/src/tests/` – UI/component tests

_Note: You can skip tests during development. The app works perfectly without them._

---

## 📦 Technologies Used

- **MongoDB** – NoSQL database
- **Express.js** – Backend framework
- **React.js** – Frontend library
- **Node.js** – Runtime environment
- **Axios** – HTTP client
- **Jest & Supertest** – Testing (optional)
- **React Testing Library** – Frontend testing (optional)

---

## 📜 License

This project is open-source and free to use.

