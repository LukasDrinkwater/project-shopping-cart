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
    const countFieldPlaceholder = screen.getByPlaceholderText("0");
    const countField = screen.getByRole("textbox");
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
});
