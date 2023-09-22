import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import "../src/styles/reset.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Layouts
import { RootLayout } from "./pageLayouts/RootLayout";
import { CarsLayout } from "./pageLayouts/CarsLayout";
import { CartLayout } from "./pageLayouts/CartLayout";

// states variable imports
import { carDataArray } from "./pages/cars/carData";

const App = () => {
  const [carData, setCarData] = useState(carDataArray);
  // const [BikeData, setBikeData] = useState(BikeDataArray);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="cars" element={<CarsLayout carData={carData} />}></Route>
        {/* <Route path="bikes" element={<BikesLayout bikeData={bikeData} />} /> */}
        <Route path="cart" element={<CartLayout />} />
      </Route>
    )
  );

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
