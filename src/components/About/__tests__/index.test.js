// import react to enable the components to function properly to test
import React from "react";
// render the component. Jest creates a simulated DOM in a Node.js environment to approximate the DOM
// cleanup funciton is used to remove components from the DOM to prevent momory leaking/data collisions
import { render, cleanup } from "@testing-library/react";
// import the extend-expect library from the jest-dom package
import "@testing-library/jest-dom/extend-expect";

// import the component we will be testing
import About from "..";

// Configure Testing Environment

// ensure no leftover memory after each test
afterEach(cleanup);

// declare the component we are testing
describe("About component", () => {
   // render About test
   //    First Test -- baseline to verify that the component is rendering
   it("renders", () => {
      render(<About />);
   });

   // Second Test --
   it("matches snapshot DOM node structure", () => {
      //    render About
      //   asFragment function returns a snapshot of the component
      const { asFragment } = render(<About />);

      //   compare expected and actual outcomes
      expect(asFragment()).toMatchSnapshot();
   });
});
