import React from "react";
import { render, screen } from "@testing-library/react";
import TrophiesAndBadges from "./TrophiesAndBadges.js";
import { profileDetails } from "../App/utilities.js";

describe("TrophiesAndBadges", () => {
  it("should be rendered without errors", () => {
    render(
      <TrophiesAndBadges trophiesAndBadges={profileDetails.trophiesAndBadges} />
    );
    const trophiesAndBadgesComponent = screen.getByTestId("TrophiesAndBadges");
    expect(trophiesAndBadgesComponent).toBeInTheDocument();
  });
});
