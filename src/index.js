import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Stopwatch from './components/StopWatch';
import TodoApp from './components/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { <TodoApp />}
    {/* <App /> */}
    {/* < Stopwatch /> */}
  </React.StrictMode>
);

