# Simple React Todo App

A simple todo list application built with **React** (no Tailwind CSS). It allows you to:
- Add new todos
- Mark todos as completed
- Delete todos
- Clear all todos
- Clear only completed todos
- Persist todos to **localStorage**

## Features
- **React Hooks**: Uses `useState`, `useEffect`, and `useRef`
- **LocalStorage** persistence: Data remains after page refresh
- **CSS Styling**: All styles in `App.css` (no Tailwind)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/simple-react-todo.git
cd simple-react-todo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm start
```
The app will run at `http://localhost:3000`.

## File Structure
```
src/
  App.jsx      # Main React component
  App.css      # Styles for the app
  index.js     # React entry point
```

## How It Works
- **State Management**: `todos` array holds all todo items; `text` holds current input value.
- **Adding Todos**: The form submit handler creates a new todo and updates state.
- **Toggling**: Checkbox toggles `completed` state for a todo.
- **Deleting**: Removes the selected todo from the list.
- **Persistence**: `useEffect` watches `todos` and saves to localStorage.
- **Styling**: Controlled via `App.css`.

## Importing Styles
In `App.jsx`:
```javascript
import './App.css';
```

## License
This project is licensed under the MIT License.
