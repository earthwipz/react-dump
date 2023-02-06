import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
  test("should add two numbers", () => {
    render(<Todo />);
    const input1 = screen.getByTestId("input1");
    const input2 = screen.getByTestId("input2");
    const plusButton = screen.getByTestId("plusButton");
    const result = screen.getByTestId("result");

    fireEvent.change(input1, { target: { value: "3" } });
    fireEvent.change(input2, { target: { value: "5" } });
    fireEvent.click(plusButton);

    expect(result.textContent).toBe("8");
  });
});
