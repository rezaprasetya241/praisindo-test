import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Badge from "../../components/Badge";
import "@testing-library/jest-dom";
describe("sample", () => {
  it("should pass", () => {
    expect(1).toBe(1);
  });
});

describe("Badge Component", () => {
  it("rendering badge component", () => {
    render(<Badge label={"badge"} />);
    expect(screen.getByText("badge")).toBeInTheDocument();
  });
});
