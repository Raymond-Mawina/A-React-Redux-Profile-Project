import React from "react";
import { render, screen } from "@testing-library/react";
import MemorableStatement from "./MemorableStatement.js";
import { profileDetails } from "../App/utilities.js";

describe("MemorableStatement", () => {
  it("should be rendered without errors", () => {
    render(
      <MemorableStatement
        memorableStatements={profileDetails.memorableStatement}
      />
    );
    const memorableStatementComponent = screen.getByTestId(
      "MemorableStatement"
    );
    expect(memorableStatementComponent).toBeInTheDocument();
  });
});
