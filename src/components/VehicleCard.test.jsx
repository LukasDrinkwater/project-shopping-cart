import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VehicleCard } from "./VehicleCard";
import { App } from "../App";

describe("Vehicle card tests", () => {
  const car = {
    id: 1,
    make: "make",
    model: "model",
    year: 1998,
    price: 25,
    disc: "discription",
    img: "img",
    count: null,
    type: "car",
  };

  it("check it renders the card info", () => {
    render(<VehicleCard car={car} />);
    const make = screen.getByText(/make/);
    const model = screen.getByText(/model/);
    const year = screen.getByText(/1998/);
    const price = screen.getByText(/25/);
    const disc = screen.getByText(/discription/);
  });

  it("adds 1 to the count of the vehicle", () => {
    const car = {
      id: 1,
      make: "make",
      model: "model",
      year: 1998,
      price: 25,
      disc: "discription",
      img: "img",
      count: null,
      type: "car",
    };
    render(<VehicleCard car={car} />);
    // const addButton = screen.getByText(/-/);
    const countFieldPlaceholder = screen.getByPlaceholderText("0");
    const countField = screen.getByRole("textbox");
    // expect(countField.value).toBe("0");
  });
});

it("check if input shows current count of vehicle", () => {
  const car = {
    id: 1,
    make: "make",
    model: "model",
    year: 1998,
    price: 25,
    disc: "discription",
    img: "img",
    count: 1,
    type: "car",
  };
  render(<VehicleCard car={car} />);
  const countField = screen.getByRole("textbox");
  expect(countField.value).toBe("1");
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
