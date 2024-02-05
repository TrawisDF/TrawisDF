import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contents from "./components/Contents.jsx";
import About from "./components/About.jsx"
import Contacts from "./components/Contacts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Contents />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
