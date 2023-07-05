import React from 'react';
import { useState, useEffect } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Toggle from './Toggle';

describe('Toggle Component', () => {
    // Below is the simple demo of a truthy test case:

    it("Should be true" , () => {
        const test = true;
        expect(test).toBe(true);
    })

    // Below is the simple demo of a falsy test case:

    // it("Should be false", () => {
    //     const testName = "Waqas Ausaf";
    //     expect(testName).toBe("Asad Ullah");
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
  expect(element.length).toBe(undefined);
});

  
});


// Another example taken  from codecademy:

const GreetingForm = () => {
  return (
    <form>
      <label role="textbox" htmlFor="greeting">
        Greeting:
      </label>
      <input type="text" id="greeting" />
      <button type="submit">Submit</button>
    </form>
  );
};

test('should show text content as Hello!', () => {
  render(<GreetingForm />);
  
  const textbox = screen.getByRole('textbox', { name: 'Greeting:' });
  const button = screen.getByRole('button', { name: 'Submit' });
  
  // Simulate typing 'Hello!'
  fireEvent.change(textbox, { target: { value: 'Hello!' } });
  // Simulate clicking the button
  fireEvent.click(button);
  
  // Assert textbox has text content 'Hello!'
  expect(textbox).toHaveValue('Hello!');
});

const Header1 = () => {
  return <h1 className='title'>I am a header</h1>
};

test('should show the button as disabled', () => {
  // render Button component
  render(<Header1 />);
  // Extract header
  const header = screen.getByRole('heading');
  // Use jest-dom assertions
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent('I am a header');
  expect(header).toHaveClass('title');
});



const Header2 = () => {
  const [text, setText] = useState('Hello World!');
  
  // Changes header text after interval of 500ms
  useEffect(() => {
    setTimeout(() => {
      setText('Goodbye!');
    }, 500);
  });
  
  return <h1>{text}</h1>;
};

test('should show text content as Goodbye', async () => {
  // Render App
  render(<Header2 />);
  // Asynchronously extract header with new text
  const header = await screen.findByText('Goodbye!');
  // Assert header to have text 'Goodbye!'
  expect(header).toBeInTheDocument();
});

const GreetingForm1 = () => {
  return(
    <form>
      <label role="box" htmlFor="greeting">
        Greeting:
      </label>
      <input type="text" id="greeting" />
      <button type="submit">Submit</button>
    </form>
  );
};

test('should show text content as Hello!', () => {
  render(<GreetingForm1 />);
  // const textbox = screen.getByRole('box');
  // const button = screen.getByRole('button');

  const textbox = screen.getByRole('textbox', { name: 'Greeting:' });
  const button = screen.getByRole('button', { name: 'Submit' });
  
  // Simulate typing 'Hello!'
  userEvent.type(textbox, 'Hello!');
  fireEvent.change(textbox, { target: { value: 'Hello!' } }); // Trigger the change event
  
  // Simulate clicking button
  userEvent.click(button);
  
  // Assert textbox has text content 'Hello!'
  expect(textbox).toHaveValue('Hello!');
});