import { CarsContainerSetup } from "../pages/cars/CarsContainerSetup";

// styles
import "../styles/cardLayout.css";

const CarsLayout = ({ carData, handleCountAddOrSub }) => {
  return (
    <div className="CarsLayoutContainer">
      <h1>This is the page layout for Cars</h1>
      <CarsContainerSetup
        carData={carData}
        handleCountAddOrSub={handleCountAddOrSub}
      />
    </div>
  );
};

export { CarsLayout };
