// import Nav Component
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
   { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// Configure Testing Environment
// cleanup statement
afterEach(cleanup);

// describe function to declare what this test suite will be testing
describe("Nav component", () => {
   // baseline test
   it("renders", () => {
      render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
         />
      );
   });

   // snapshot test
   it("matches snapshot DOM node structure", () => {
      const { asFragment } = render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
         />
      );

      //    assert value comparison - snapshot assertion
      expect(asFragment()).toMatchSnapshot();
   });
});

// test the camera emoji visibility
describe("emoji is visible", () => {
   it("insert emoji into the h2", () => {
      // Arrange
      const { getByLabelText } = render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
         />
      );
      // Assert
      expect(getByLabelText("camera")).toHaveTextContent("📸");
   });
});

// test if links are visible
describe("links are visible", () => {
   it("inserts text into the home link", () => {
      const { getByTestId } = render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            // contactSelected={mockContactSelected}
            // setContactSelected={mockSetContactSelected}
         />
      );

      expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
      expect(getByTestId("about")).toHaveTextContent("About me");
   });
});
