import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "./TextField";
import userEvent from "@testing-library/user-event";

describe("Textfield", () => {
  test("should render input field", async () => {
    const handleChange = jest.fn();
    render(
      <TextField
        type="text"
        placeholder="testing"
        name="test"
        value=""
        handleChange={handleChange}
      />
    );
    const element = screen.getByPlaceholderText("testing");
    expect(element).toBeInTheDocument();
  });

  test("should contain correct value", async () => {
    const handleChange = jest.fn();
    render(
      <TextField
        type="text"
        placeholder="testing"
        name="test"
        value="initial"
        handleChange={handleChange}
      />
    );
    const element = screen.getByPlaceholderText("testing");
    expect(element).toHaveValue("initial");
  });

  test("should not contain wrong value", async () => {
    const handleChange = jest.fn();
    render(
      <TextField
        type="text"
        placeholder="testing"
        name="test"
        value="initial"
        handleChange={handleChange}
      />
    );
    const element = screen.getByPlaceholderText("testing");
    expect(element).not.toHaveValue("random");
  });

  test("onchange works", async () => {
    const handleChange = jest.fn();
    render(
      <TextField
        type="text"
        placeholder="testing"
        name="test"
        value="initial"
        handleChange={handleChange}
      />
    );
    const element = screen.getByPlaceholderText("testing");
    userEvent.type(element, "new value");
    expect(handleChange).toHaveBeenCalledTimes(9);
  });
});
