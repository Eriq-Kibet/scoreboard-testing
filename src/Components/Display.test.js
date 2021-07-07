import React from "react";
import { render } from "@testing-library/react";
import { Display } from "./Display";

describe("<Display/>", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("Props Work", () => {
    const display = render(<Display strikes={2} balls={3} />);
    display.getByText( /Strikes: 2/ )
    display.getByText( /Balls: 3/ )
  });
  it("Component is Dumb", () => {
    const display = render(<Display strikes={1} balls={2} />);
    display.getByText( /Strikes: 1/ )
    display.getByText( /Balls: 2/ )
  });
});
