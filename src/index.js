import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
<React.StrictMode>
  <TodoApp />
</React.StrictMode>
);
