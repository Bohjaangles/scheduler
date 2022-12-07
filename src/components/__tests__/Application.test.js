import React from "react";

import { render, cleanup, waitForElement, fireEvent, getByText } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

describe('Application component tests', () => {
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);
  
    return waitForElement(() => getByText("Monday"));
  });



  it('should find Leopold Silvers in the document after click event fires on tuesday', () => {
    const { getByText } = render(<Application />);

    return waitForElement(() => getByText('Monday')).then(() => {
      fireEvent.click(getByText('Tuesday'));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    });

  });
});
