import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.js";

describe("App", () => {
  it("should be rendered without errors", () => {
    render(<App />);
    const appComponent = screen.getByTestId("App");
    expect(appComponent).toBeInTheDocument();
  });

  it("should render components BasicInfo, ProfilePicture, EmploymentHistory, Testimonials and TrophiesAndBadges components", () => {
    render(<App />);
    const BasicInfoComponent = screen.getByTestId("BasicInfo");
    const ProfilePictureComponent = screen.getByTestId("ProfilePicture");
    const EmploymentHistoryComponent = screen.getByTestId("EmploymentHistory");
    const TestimonialsComponent = screen.getByTestId("Testimonials");
    const TrophiesAndBadgesComponent = screen.getByTestId("TrophiesAndBadges");

    expect(BasicInfoComponent).toBeInTheDocument();
    expect(ProfilePictureComponent).toBeInTheDocument();
    expect(EmploymentHistoryComponent).toBeInTheDocument();
    expect(TestimonialsComponent).toBeInTheDocument();
    expect(TrophiesAndBadgesComponent).toBeInTheDocument();
  });
});
