import React from "react";
import { render, screen } from "@testing-library/react";
import EmployementHistory from "./EmploymentHistory.js";
import { profileDetails } from "../App/utilities.js";

describe("EmploymentHistory", () => {
  it("should be rendered without errors", () => {
    render(
      <EmployementHistory
        employmentHistory={profileDetails.employmentHistory}
      />
    );
    const employmentHistoryComponent = screen.getByTestId("EmploymentHistory");
    expect(employmentHistoryComponent).toBeInTheDocument();
  });
});
