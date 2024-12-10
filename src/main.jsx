import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello from routing</div>,
//   },
//   {
//     path: "/about",
//     element: <div>Hello from about component</div>,
//   },
//   {
//     path: "/contact",
//     element: <div>Hello from contact component</div>,
//   }
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
