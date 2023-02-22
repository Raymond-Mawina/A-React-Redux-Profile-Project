import React from "react";
import { render, screen } from "@testing-library/react";
import ProfilePicture from "./ProfilePicture.js";
import { profileDetails } from "../App/utilities.js";

describe("ProfilePicture", () => {
  it("should be rendered without errors", () => {
    render(
      <ProfilePicture memorableStatement={profileDetails.memorableStatement} />
    );
    const ProfilePictureComponent = screen.getByTestId("ProfilePicture");
    expect(ProfilePictureComponent).toBeInTheDocument();
  });

  it("should render the MemorableStatement", () => {
    render(<ProfilePicture />);
    const MemorableStatementComponent = screen.getByTestId(
      "MemorableStatement"
    );

    expect(MemorableStatementComponent).toBeInTheDocument();
  });
});
