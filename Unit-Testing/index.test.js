import Home from "../src/pages/Home";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Calculator", () => {
  it("Should Render all things:", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });

  it("Should return 15 as an answer", async () => {
    render(<Home />);
    const number1 = screen.getByTestId("num1");
    const number2 = screen.getByTestId("num2");
    const resultBox = screen.getByTestId("result");
    const addBtn = screen.getByTestId("add");

    fireEvent.change(number1, { target: { value: 5 } });
    fireEvent.change(number2, { target: { value: 10 } });
    addBtn.click();

    /*
        The below statement couldn't work b/c the expect statement is executed before
         the result is updated.
        ********** expect(resultBox).toHaveTextContent(15); ************
         */

    /*
        Synchronous vs. Asynchronous Behavior: 
            If the operation triggered by the addBtn.click() is asynchronous 
            (e.g., an API call or a state update), the expect statement might be executed
            before the result is updated. To handle this, you can use await to wait for the
            result to update before asserting the expectation.

            Below the waitFor() method is of react-testing library method:
        */
    await waitFor(() => {
      expect(resultBox).toHaveTextContent("15");
    });
  });

  it("Should give the difference of the number:", async () => {
    render(<Home />);

    const number1 = screen.getByTestId("num1");
    const number2 = screen.getByTestId("num2");
    const subtractBtn = screen.getByTestId("subtract");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(number1, { target: { value: 1 } });
    fireEvent.change(number2, { target: { value: 2 } });

    subtractBtn.click();
    await waitFor(() => {
      expect(resultArea).toHaveTextContent("3");
    });
  });
});
