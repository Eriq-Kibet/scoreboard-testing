import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  it("renders without Crashing", () => {
    render(<App />);
  });
  test("One big Test", () => {
    const { getByText } = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);

    //Test that strike works
    fireEvent.click(strike);
    fireEvent.click(strike);
    getByText(/Strikes: 2/);
    //Test that strike rolls over
    fireEvent.click(strike);
    getByText(/Strikes: 0/);
  });
});
