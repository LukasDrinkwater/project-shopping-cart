import { Outlet, NavLink } from "react-router-dom";
// Header is at the top of every page. Then the other components are rendered
// in <main>

// need to add a variable that also shows the amount of items in the cart

const RootLayout = ({ carData }) => {
  const filtered = carData.filter((car) => car.count > 0);

  const totalInCart = filtered.reduce((acc, car) => {
    return acc + car.count;
  }, 0);
  console.log(totalInCart);

  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Car and Bike Models</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="cars">Cars</NavLink>
          <NavLink to="bikes">Bikes</NavLink>
          <NavLink to="cart">
            Cart: {totalInCart !== 0 ? totalInCart : 0}
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export { RootLayout };
