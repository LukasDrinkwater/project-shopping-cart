const CartCard = ({ car }) => {
  const img = car.img;
  const price = car.price;
  const count = car.count;
  const make = car.make;
  const model = car.model;

  return (
    <div className="cartCard">
      <img src={img} />
      <p>{`${make} ${model}`}</p>
      <p>{count}</p>
      <p>{count * price}</p>
    </div>
  );
};

export { CartCard };
