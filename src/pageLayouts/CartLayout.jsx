import { CartContainerSetup } from "../pages/cart/CartContainerSetup";

// styles
import "../styles/cartLayout.css";

// need to display the number of items in the cart.

const CartLayout = ({ carData, handleCountChange }) => {
  return (
    <div>
      <p>This is the cart layout</p>

      <CartContainerSetup
        carData={carData}
        handleCountChange={handleCountChange}
      />
    </div>
  );
};

export { CartLayout };
