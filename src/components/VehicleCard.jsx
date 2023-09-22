const VehicleCard = ({ id, make, model, year, price, disc, img }) => {
  // bring in the relavant info

  return (
    <div className="card" data-id={id}>
      <img src={img} alt={`Picture of a ${year} ${make} ${model}`} />
      <div className="cardInfo">
        <h2>{`${year} ${make} ${model}`}</h2>
        <p>£{price}</p>
        <p>{disc}</p>
      </div>
      <div className="cardButtonContainer">
        <button className="cardButton">-</button>
        <input placeholder="0">
          {
            // length of the card array
          }
        </input>
        <button className="cardButton">+</button>
      </div>
    </div>
  );
};

export { VehicleCard };
