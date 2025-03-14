/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react";
import User from "./User";
import React from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "John Doe" }),
  })
);

test("fetches and displays user name", async () => {
  render(<User />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText(/John Doe/i)).toBeInTheDocument());
});