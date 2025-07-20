// src/__tests__/components/SkeletonCardArticle.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SkeletonCardArticle from "../../../components/card/SkeletonCardArticle";
import "@testing-library/jest-dom";

describe("SkeletonCardArticle Component", () => {
  it("should render without crashing", () => {
    render(<SkeletonCardArticle />);
    const card = screen.getByTestId("skeleton-card");
    expect(card).toBeInTheDocument();
  });

  it("should have animate-pulse class", () => {
    render(<SkeletonCardArticle />);
    const wrapper = screen.getByTestId("skeleton-card");
    expect(wrapper.className).toContain("animate-pulse");
  });
});
