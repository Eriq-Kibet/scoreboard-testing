import { render, fireEvent, getByText } from "@testing-library/react";
import { getText } from "domutils";
import { Controls } from "./Controls";

describe("<Controls />", () => {
  it("renders without crashing", () => {
    render(<Controls />);
  });
  it("strikes", () => {
    let clicked = false;
    const { getByText } = render(<Controls strike={() => (clicked = true)} />);
    const strikeButton = getByText(/strike/);
    fireEvent.click(strikeButton);
    expect(clicked).toBe(true);
  });
  it("strikes with mock function", () => {
    const click = jest.fn();
    const { getByText } = render(<Controls strike={click} />);
    const strikeButton = getByText(/strike/);
    fireEvent.click(strikeButton);
    expect(click).toBeCalled();
  });
  it("ball with mock", () => {
    const click = jest.fn();
    const { getByText } = render(<Controls ball={click} />);
    const strikeButton = getByText(/ball/);
    fireEvent.click(strikeButton);
    expect(click).toBeCalled();
  });
  it("foul with mocked function", () => {
    const click = jest.fn();
    const { getByText } = render(<Controls foul={click} />);
    const strikeButton = getByText(/foul/);
    fireEvent.click(strikeButton);
    expect(click).toBeCalled();
  });
  it("hit with mocked funtion", () => {
    const hee = jest.fn();
    const { getByText } = render(<Controls hit={hee} />);
    const strikeB = getByText(/hit/i);
    fireEvent.click(strikeB);
    expect(hee).toBeCalled()
  });
});
