import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SelectField from "./SelectField";
import userEvent from "@testing-library/user-event";

describe("SelectField", () => {
  test("should render input field", async () => {
    const handleChange = jest.fn();
    const { container } = render(
      <SelectField
        placeholder="testing"
        name="test"
        options={[
          { label: "Male", value: "male" },
          { label: "Femail", value: "female" },
        ]}
        handleChange={handleChange}
      />
    );
    const element = container.querySelector(`select[name="test"]`);
    expect(element).toBeInTheDocument();
  });

  test("should contain correct value", async () => {
    const handleChange = jest.fn();
    const { container } = render(
      <SelectField
        placeholder="testing"
        name="test"
        options={[
          { label: "Male", value: "male" },
          { label: "Femail", value: "female" },
        ]}
        handleChange={handleChange}
      />
    );
    const element = container.querySelector(`select[name="test"]`);
    expect(element).toHaveValue("");
    expect(element).not.toHaveValue("male");
    fireEvent.change(element as Element, { target: { value: "male" } });
    expect(element).toHaveValue("male");
  });
});
