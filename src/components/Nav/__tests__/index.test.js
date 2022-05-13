// import Nav Component
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

// Configure Testing Environment
// cleanup statement
afterEach(cleanup);

// describe function to declare what this test suite will be testing
describe("Nav component", () => {
   // baseline test
   it("renders", () => {
      render(<Nav />);
   });

   // snapshot test
   it("matches snapshot", () => {
      const { asFragment } = render(<Nav />);

      //    assert value comparison - snapshot assertion
      expect(asFragment()).toMatchSnapshot();
   });
});

// test the camera emoji visibility
describe("emoji is visible", () => {
   it("insert emoji into the h2", () => {
      // Arrange
      const { getByLabelText } = render(<Nav />);
      // Assert
      expect(getByLabelText("camera")).toHaveTextContent("📸");
   });
});

// test if links are visible
describe("links are visible", () => {
   it("inserts text into the links", () => {
      // Arrange
      const { getByTestId } = render(<Nav />);
      // Assert
      expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
      expect(getByTestId("about")).toHaveTextContent("About me");
   });
});
