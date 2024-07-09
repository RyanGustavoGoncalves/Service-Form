import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-provider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/home/Home.jsx'
import NotFoundPageError from './pages/components/Exceptions/NotFoundPageError.jsx'
import { FormPage } from './pages/formPage/FormPage.jsx'
import App from './App'

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
  {
    path: "/form",
    element: <FormPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
