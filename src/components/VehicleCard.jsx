const VehicleCard = ({
  id,
  make,
  model,
  year,
  price,
  disc,
  img,
  count,
  handleCountAddOrSub,
}) => {
  // bring in the relavant info

  const handleInputChange = () => (id) => {
    const updatedCars = [...carData];
    const index = updatedCars.findIndex((vehicle) => vehicle.id === id);
  };

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
            handleCountAddOrSub(id, event.target.dataset.addorsub)
          }
        >
          -
        </button>
        <input
          placeholder="0"
          // value={count}
          onChange={() => handleInputChange(id)}
        >
          {
            // length of the card array
          }
        </input>
        <button
          className="cardButton"
          data-addorsub="add"
          onClick={(event) =>
            handleCountAddOrSub(id, event.target.dataset.addorsub)
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export { VehicleCard };
