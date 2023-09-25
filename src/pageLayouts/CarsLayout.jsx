import { CarsContainerSetup } from "../pages/cars/CarsContainerSetup";
import "../styles/carAndBikePage.css";

// styles
import "../styles/cardLayout.css";

const CarsLayout = ({ carData, handleCountChange }) => {
  return (
    <div className="CarsLayoutContainer">
      <h1>This is the page layout for Cars</h1>
      <CarsContainerSetup
        carData={carData}
        handleCountChange={handleCountChange}
      />
    </div>
  );
};

export { CarsLayout };
