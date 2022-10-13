import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders button with passed btntext prop", () => {
    const handleClick = jest.fn();
    render(<Button btnText="test" onClick={handleClick} />);
    const element = screen.getByText("test");
    expect(element).toBeInTheDocument();
  });

  test("clicks as expected", async () => {
    const handleClick = jest.fn();
    render(<Button btnText="test" onClick={handleClick} />);
    const element = screen.getByText(/test/i);
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
