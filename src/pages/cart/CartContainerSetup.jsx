import { CartCard } from "../../components/CartCard";

const CartContainerSetup = ({ carData }) => {
  const filtered = carData.filter((car) => car.count > 0);

  return (
    <div>
      {filtered.map((car) => (
        <CartCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export { CartContainerSetup };
