import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VehicleCard } from "./VehicleCard";
import { App } from "../App";

describe("Vehicle card tests", () => {
  it("adds 1 to the count of the vehicle", () => {
    const car = {
      id: 1,
      make: "BMW",
      model: "528i Touring",
      year: 1998,
      price: 25,
      disc: "A lovely BMW 528i Touring which makes would make a great cruiser for travelling",
      img: "src/assets/images/cars/bmw528i.jpg",
      count: null,
      type: "car",
    };
    render(<VehicleCard car={car} />);
    const addButton = screen.getByText();
  });
});

// describe("App component", () => {
//   it("renders magnificent monkeys", () => {
//     // since screen does not have the container property, we'll destructure render to obtain a container for this test
//     const { container } = render(<App />);
//     expect(container).toMatchSnapshot();
//   });

//   it("renders radical rhinos after button click", async () => {
//     const user = userEvent.setup();

//     render(<App />);
//     const button = screen.getByRole("button", { name: "Click Me" });

//     await user.click(button);

//     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
//   });
// });
