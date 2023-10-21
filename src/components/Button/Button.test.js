import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from ".";

it("call the onClick callback", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick} label='Click me' />
  );
  fireEvent.click(getByText("Click me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
