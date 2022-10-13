import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Navbar", () => {
  test("should render nav", () => {
    const handleClick = jest.fn();
    render(<NavBar onClick={handleClick} />);
    const element = screen.getByText(/docs/i);
    expect(element).toBeInTheDocument();
  });
});
