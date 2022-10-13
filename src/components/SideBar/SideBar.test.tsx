import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./SideBar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar", () => {
  test("should render nav", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    const element = screen.getByText(/dashboard/i);
    expect(element).toBeInTheDocument();
  });
});
