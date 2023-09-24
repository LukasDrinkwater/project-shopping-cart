import { CartContainerSetup } from "../pages/cart/CartContainerSetup";

// need to display the number of items in the cart.

const CartLayout = ({ carData }) => {
  return (
    <div>
      <p>This is the cart layout</p>

      <CartContainerSetup carData={carData} />
    </div>
  );
};

export { CartLayout };
