import { CardButtons } from "./CardButtons";

const CartCard = ({ car, handleCountChange }) => {
  const price = car.price;
  const count = car.count;
  const make = car.make;
  const model = car.model;

  return (
    <div className="cartCard">
      <h2>{`${make} ${model}`}</h2>
      <p>Quantity: {count}</p>
      <CardButtons car={car} handleCountChange={handleCountChange} />
      <p>£{count * price}</p>
    </div>
  );
};

export { CartCard };
