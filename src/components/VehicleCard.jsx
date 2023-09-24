const VehicleCard = ({ car, handleCountChange }) => {
  // bring in the relavant info

  const id = car.id;
  const make = car.make;
  const model = car.model;
  const year = car.year;
  const price = car.price;
  const disc = car.disc;
  const img = car.img;
  const count = car.count;

  return (
    <div className="card" data-id={id}>
      <img src={img} alt={`Picture of a ${year} ${make} ${model}`} />
      <div className="cardInfo">
        <h2>{`${year} ${make} ${model}`}</h2>
        <p>£{price}</p>
        <p>{disc}</p>
      </div>
      <div className="cardButtonContainer">
        <button
          className="cardButton"
          data-addorsub="sub"
          onClick={(event) =>
            handleCountChange(id, event.target.dataset.addorsub)
          }
        >
          -
        </button>
        <input
          placeholder="0"
          value={count !== null ? count : ""}
          onChange={(event) =>
            handleCountChange(id, "input", event.target.value)
          }
        >
          {
            // length of the card array
          }
        </input>
        <button
          className="cardButton"
          data-addorsub="add"
          onClick={(event) =>
            handleCountChange(id, event.target.dataset.addorsub)
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export { VehicleCard };
