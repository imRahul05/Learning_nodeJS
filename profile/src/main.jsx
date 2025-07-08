import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from './TodoContextAPI/TodoContext.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
 <TodoProvider>
    <App />
 </TodoProvider>
  </ErrorBoundary>


)
