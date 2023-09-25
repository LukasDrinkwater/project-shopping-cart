const CardButtons = ({ car, handleCountChange }) => {
  const id = car.id;
  const count = car.count;
  return (
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
        placeholder={0}
        value={count !== null ? count : ""}
        onChange={(event) => handleCountChange(id, "input", event.target.value)}
      ></input>
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
  );
};

export { CardButtons };
