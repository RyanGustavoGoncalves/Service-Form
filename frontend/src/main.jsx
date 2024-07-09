import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.jsx'
import NotFoundPageError from './pages/components/Exceptions/NotFoundPageError.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPageError />,
    children: [
      {
        path: "Home",
        element: <HomePage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
