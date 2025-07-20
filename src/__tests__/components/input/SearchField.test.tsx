import { describe, it, vi, beforeEach, afterEach, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchField from "../../../components/input/SearchField";
import "@testing-library/jest-dom";
describe("SearchField Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should render input with placeholder", () => {
    render(
      <SearchField value="" onChange={() => {}} placeholder="Cari data..." />
    );
    const input = screen.getByPlaceholderText("Cari data...");
    expect(input).toBeInTheDocument();
  });

  it("should debounce input", async () => {
    vi.useRealTimers();
    const onChangeMock = vi.fn();

    render(<SearchField value="" onChange={onChangeMock} />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "halo" } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it("should show and clear input when clear button is clicked", () => {
    const onChangeMock = vi.fn();
    render(<SearchField value="hello" onChange={onChangeMock} />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "abc" } });
    vi.advanceTimersByTime(400);

    const clearButton = screen.getByRole("button");
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);
    expect(input).toHaveValue("");
    expect(onChangeMock).toHaveBeenCalledWith("");
  });
});
