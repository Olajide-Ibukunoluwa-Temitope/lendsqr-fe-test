import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ButtonAlt from "./ButtonAlt";

describe("Button", () => {
  test("renders button with passed btntext prop", () => {
    const handleClick = jest.fn();
    render(<ButtonAlt btnText="test" color="green" onClick={handleClick} />);
    const element = screen.getByText("test");
    expect(element).toBeInTheDocument();
  });

  test("clicks as expected", async () => {
    const handleClick = jest.fn();
    render(<ButtonAlt btnText="test" color="green" onClick={handleClick} />);
    const element = screen.getByText(/test/i);
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
