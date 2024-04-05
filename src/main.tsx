import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import {
  ThemeProvider,
  QueryProvider,
  RouteProvider,
  ModalProvider,
  NotificationProvider,
  ToastProvider
} from './contexts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <ModalProvider>
        <ToastProvider>
          <NotificationProvider>
            <ThemeProvider>
              <RouteProvider />
              <App />
            </ThemeProvider>
          </NotificationProvider>
        </ToastProvider>
      </ModalProvider>
    </QueryProvider>
  </React.StrictMode>
)
