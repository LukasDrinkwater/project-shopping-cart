import { VehicleCard } from "../../components/VehicleCard";

// import styles
import "../../styles/carAndBikePage.css";

const CarsContainerSetup = ({ carData }) => {
  // id, make, model, year, price, disc, img
  return (
    <>
      <h1>Here are the cars for sale </h1>
      <div className="gridContainer">
        {/* something to make each car card */}
        {carData.map((car) => (
          <VehicleCard
            key={car.id}
            id={car.id}
            make={car.make}
            model={car.model}
            year={car.year}
            price={car.price}
            disc={car.disc}
            img={car.img}
          />
        ))}
      </div>
    </>
  );
};

export { CarsContainerSetup };
