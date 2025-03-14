/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"
import React from "react";

test("renders button with correct label", () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Button matches snapshot", () => {
    const { asFragment } = render(<Button label="Click me" />);
    expect(asFragment()).toMatchSnapshot();
});