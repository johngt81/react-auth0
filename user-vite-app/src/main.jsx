import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import './index.css'
import Root from "./routes/root"
import ErrorPage from './error-page.jsx'
import Contact from './routes/contact.jsx'
import Home from './routes/home.jsx'
import LoginPage from './routes/login.jsx'
import ProtectedPage from './routes/protectedPage.jsx'
import Layout from './layout.jsx'
import { AuthProvider } from './components/authContext.jsx'
import RequireAuth from './components/requireAuth.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/protected"
        element={
          <RequireAuth>
            <ProtectedPage />
          </RequireAuth>
        } />
      <Route path="contacts/:contactId" element={<Contact />} />
    </Route>
  )
);

//This is another way to do routing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [{
//       path: "contacts/:contactId",
//       element: <Contact />
//     }]
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
