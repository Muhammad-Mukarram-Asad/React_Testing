import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toggle from './Toggle';

describe('Toggle Component', () => {
    // Below is the simple demo of a truthy test case:

    it("Should be true" , () => {
        const test = true;
        expect(test).toBe(true);
    })

    // Below is the simple demo of a falsy test case:

    // it("Should be false", () => {
    //     const testName = "Mukii";
    //     expect(testName).toBe("Asad");
    // })

    // Below is the original test case of Toggle Component for checking the text
    // that is present in it or not:

  it('should show the text', () => {
    const { getByText, getByRole } = render(<Toggle />);
    const toggleButton = getByRole('button');

    fireEvent.click(toggleButton);
    const element = getByText('This Text is toggle text');
    expect(element).toBeInTheDocument();
  });

  /*
                        Explanation of the below test case:
  
  In this updated test, we use React Testing Library to render the `Toggle` component and 
  retrieve the toggle button using the `getByRole` query. We simulate a click on the button 
  using `fireEvent.click(toggleButton)` to hide the text.

  Then, we use the `queryByText` query to check if the text is present in the DOM. Since the 
  text is expected to be hidden, the query should return `null`, indicating that the element
  is not found.

  Finally, we assert that the `element` is `null` using `expect(element).toBeNull()` to 
  confirm that the text is hidden after the button is clicked.
  */

  it("should hide the text on a btn click", () => {
  const { getByRole, queryByText, debug } = render(<Toggle />);
  const toggleButton = getByRole('button');

  fireEvent.click(toggleButton);

  debug();

  const element = queryByText('This Text is toggle text');
  expect(element.length).toBeNull();
});

  
});