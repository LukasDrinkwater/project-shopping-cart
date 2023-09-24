import { VehicleCard } from "../../components/VehicleCard";

// import styles
import "../../styles/carAndBikePage.css";

const CarsContainerSetup = ({ carData, handleCountChange }) => {
  // id, make, model, year, price, disc, img
  return (
    <>
      <h1>Here are the cars for sale </h1>
      <div className="gridContainer">
        {/* something to make each car card */}
        {carData.map((car) => (
          <VehicleCard
            car={car}
            key={car.id}
            handleCountChange={handleCountChange}
          />
        ))}
      </div>
    </>
  );
};

export { CarsContainerSetup };
