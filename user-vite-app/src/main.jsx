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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
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
    <RouterProvider router={router} />
  </StrictMode>,
)
