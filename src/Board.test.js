import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";


it("renders without crashing", function () {
    render(<Board />);
});

it("should match snapshot", function () {
    const { asFragment } = render(<Board />);
    expect(asFragment()).toMatchSnapshot();
});


it("should render the board's table ", function () {
    const { getByTestId } = render(<Board />);
    expect(getByTestId("Board")).toBeInTheDocument();
});


it("should not render the game won ", function () {
    const { getByTestId } = render(<Board />);
    expect(getByTestId("Board")).not.toContainHTML('<h1 className="GameWon">You won!</h1>');
});
