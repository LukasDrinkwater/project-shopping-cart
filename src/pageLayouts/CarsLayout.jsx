import { CarsContainerSetup } from "../pages/cars/CarsContainerSetup";

// styles
import "../styles/cardLayout.css";

const CarsLayout = ({ carData }) => {
  return (
    <div className="CarsLayoutContainer">
      <h1>This is the page layout for Cars</h1>
      <CarsContainerSetup carData={carData} />
    </div>
  );
};

export { CarsLayout };
