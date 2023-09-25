import { CardButtons } from "./CardButtons";

const VehicleCard = ({ car, handleCountChange }) => {
  // bring in the relavant info

  const id = car.id;
  const make = car.make;
  const model = car.model;
  const year = car.year;
  const price = car.price;
  const disc = car.disc;
  const img = car.img;

  return (
    <div className="card" data-id={id}>
      <img src={img} alt={`Picture of a ${year} ${make} ${model}`} />
      <div className="cardInfo">
        <h2>{`${year} ${make} ${model}`}</h2>
        <p>£{price}</p>
        <p>{disc}</p>
      </div>
      <CardButtons car={car} handleCountChange={handleCountChange} />
    </div>
  );
};

export { VehicleCard };
