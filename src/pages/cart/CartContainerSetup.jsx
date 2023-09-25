import { CartCard } from "../../components/CartCard";

const CartContainerSetup = ({ carData, handleCountChange }) => {
  const filtered = carData.filter((car) => car.count > 0);

  const totalCost = filtered.reduce((acc, car) => {
    return acc + car.price * car.count;
  }, 0);

  return (
    <div className="cartContainer">
      {filtered.map((car) => (
        <CartCard
          key={car.id}
          car={car}
          handleCountChange={handleCountChange}
        />
      ))}
      <div className="totalPrice">
        <p>Total price £{totalCost}</p>
      </div>
    </div>
  );
};

export { CartContainerSetup };
