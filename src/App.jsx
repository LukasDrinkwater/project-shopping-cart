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

  const handleCountChange = (id, action, value) => {
    let regex = /^[A-Za-z]+$/;

    const updatedCars = [...carData];
    const index = updatedCars.findIndex((vehicle) => vehicle.id === id);

    if (value != undefined) {
      if (value.match(regex)) return;
    }

    // if (updatedCars[index].count - 1 < 0) return;

    console.log(updatedCars[index]);
    if (action === "add") {
      updatedCars[index].count++;
    } else if (action === "sub") {
      updatedCars[index].count--;
    } else if (action === "input") {
      updatedCars[index].count = value;
    }

    setCarData(updatedCars);

    // setCartCount((cartCount) => cartCount - 1);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          path="cars"
          element={
            <CarsLayout
              carData={carData}
              handleCountChange={handleCountChange}
            />
          }
        ></Route>
        {/* <Route path="bikes" element={<BikesLayout bikeData={bikeData} />} /> */}
        <Route path="cart" element={<CartLayout carData={carData} />} />
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
