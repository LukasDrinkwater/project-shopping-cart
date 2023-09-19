import { useState } from "react";
import "./App.css";
import "../src/styles/reset.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Layouts
import { RootLayout } from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="help" element={<HelpLayout />}>
//         <Route path="faq" element={<Faq />} />
//         <Route path="contact" element={<Contact />} />
//       </Route>
//       {/* if the url path is wrong at all it renders the NotFound component */}
//       <Route path="*" element={<NotFound />} />
