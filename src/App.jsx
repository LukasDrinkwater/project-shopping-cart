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
import { RootLayout } from "./pageLayouts/RootLayout";
import { CarsLayout } from "./pageLayouts/CarsLayout";
import { CartLayout } from "./pageLayouts/CartLayout";

// Pages
import NotFound from "./pages/NotFound";

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

    console.log(updatedCars[index]);
    if (action === "add") {
      updatedCars[index].count++;
    } else if (action === "sub") {
      updatedCars[index].count--;
    } else if (action === "input") {
      updatedCars[index].count = parseInt(value);
    }
    console.log(value);
    setCarData(updatedCars);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout carData={carData} />}>
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
        <Route
          path="cart"
          element={
            <CartLayout
              carData={carData}
              handleCountChange={handleCountChange}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
