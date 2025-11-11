
# Getting Started with React

This project uses [React](https://reactjs.org/), a JavaScript library for building user interfaces.

## Prerequisites

Before you begin, make sure you have [Node.js](https://nodejs.org/) and npm installed:

```bash
node -v
npm -v
```

---

## Available Scripts

In the project directory, you can run:

### `npx create-react-app my-app`

Creates a new React project called `my-app` with all the necessary configuration.
This sets up a development environment with React, JSX, and build tools.

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes, and you will see lint errors in the console if any.

### `npm test`

Launches the test runner in interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Warning: this is a one-way operation. Once you `eject`, you can’t go back!**

If you want full control over the build configuration (webpack, Babel, ESLint, etc.), you can eject.
All commands except `eject` will still work, but now you can tweak the configuration directly.

---

## Project Structure

After creating a React app, you will see this structure:

```
my-app/
 ├─ node_modules/       # installed dependencies
 ├─ public/             # static files like index.html
 ├─ src/                # main code
 │   ├─ App.js          # main component
 │   ├─ index.js        # entry point
 └─ package.json        # project info & dependencies
```

---


### Quick Start Example

```jsx
// src/App.js
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first React app.</p>
    </div>
  );
}

export default App;
```

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

Run `npm start` and see your app live at [http://localhost:3000](http://localhost:3000).





