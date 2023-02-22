import React from "react";
import { render, screen } from "@testing-library/react";
import BasicInfo from "./BasicInfo.js";
import { profileDetails } from "../App/utilities.js";

describe("BasicInfo", () => {
  it("should be rendered without errors", () => {
    render(
      <BasicInfo
        contactBasic={profileDetails.contactBasic}
        contactLinks={profileDetails.contactLinks}
        email={profileDetails.email}
        hireMeLink={profileDetails.hireMeLink}
      />
    );
    const basicInfoComponent = screen.getByTestId("BasicInfo");
    expect(basicInfoComponent).toBeInTheDocument();
  });
});
