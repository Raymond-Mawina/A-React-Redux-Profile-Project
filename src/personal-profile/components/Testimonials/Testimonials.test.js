import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials from "./Testimonials";
import { profileDetails } from "../App/utilities.js";

describe("Testimonials", () => {
  it("should be rendered without errors", () => {
    render(<Testimonials testimonials={profileDetails.testimonials} />);
    const testimonialsComponent = screen.getByTestId("Testimonials");
    expect(testimonialsComponent).toBeInTheDocument();
  });
});
