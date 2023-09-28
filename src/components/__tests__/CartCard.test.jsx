import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { CartCard } from "../CartCard";

describe("CartCard component test", () => {
  const car = {
    id: 1,
    make: "make",
    model: "model",
    year: 1998,
    price: 25,
    disc: "discription",
    img: "img",
    count: 2,
    type: "car",
  };

  const mockHandleCountChange = vi.fn();

  it("test that it renders the CartCard component and correct info", async () => {
    render(<CartCard car={car} handleCountChange={mockHandleCountChange} />);

    const makeAndModel = screen.getByRole("heading", { level: 2 });
    const quantity = screen.getByText(/Quantity:/i);
    const price = screen.getByText(/£/);

    expect(makeAndModel.textContent).toBe("make model");
    expect(quantity.textContent).toBe("Quantity: 2");
    expect(price.textContent).toBe("£50");
  });
});
