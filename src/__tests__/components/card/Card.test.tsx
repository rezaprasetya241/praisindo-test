// src/__tests__/components/Card.test.tsx

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../../../components/card/Card";
import "@testing-library/jest-dom";

describe("Card Component", () => {
  it("should render children", () => {
    render(
      <Card handleClick={() => {}}>
        <p>Hello World</p>
      </Card>
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("should call handleClick when clicked", () => {
    const mockClick = vi.fn();

    render(<Card handleClick={mockClick}>Click Me</Card>);

    const cardElement = screen.getByText("Click Me");

    fireEvent.click(cardElement);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
