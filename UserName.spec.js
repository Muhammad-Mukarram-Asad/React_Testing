import React from 'react';  
import renderer from 'react-test-renderer';  
import DisplayName from "./DisplayName";
import { validateAge, validateName } from './Validation';

describe('DisplayName', () => {  
 test('should render Mukii', () => {  
   const component = renderer.create(<DisplayName name={"Mukii"} />);  
   let tree = component.toJSON();  
   expect(tree).toMatchSnapshot();  
 });  
});  

/*
The describe function is used to group one or more related test cases together. 
In this case, it groups the test case(s) for the DisplayName component.

The test function defines an individual test case. It takes a description of the 
test case and a function that contains the actual test logic.

Inside the test case, a new instance of the DisplayName component is created 
using renderer.create(). It is passed a prop name with the value "Mukii".

The renderer.create() method creates a renderer instance that can be used to render
React components outside of a browser environment.

The component.toJSON() method is called to obtain a serialized JSON representation 
of the rendered component.

Finally, the expect function is used to assert that the obtained JSON tree matches 
a previously saved snapshot. The .toMatchSnapshot() matcher compares the JSON tree to 
the stored snapshot. If it doesn't match, a failure is reported.

Snapshots are a way to capture the expected output of a component and compare it 
with the actual output during subsequent test runs. When the test is run for the first time,
a snapshot is generated and saved. On subsequent runs, the generated snapshot is 
compared to the stored one. If they match, the test passes. If they don't match, 
it indicates a change in the component's output, and you can review and update the 
snapshot accordingly.

This code ensures that the DisplayName component renders correctly with the name
"Mukii" and maintains its expected output over time using snapshots.
 If the component's output changes unintentionally, the test will fail 
 and prompt a review of the changes.

*/




// Writing an other test for checking name validity:
describe("Name Validation", () => {
  test("Set the error if input is number", () => {
    const name = 123;
    const error = validateName(name);
    expect(error).toBeTruthy();
  })
  
  // Writing an other test for checking name validity part 2:
  test("Set the error if input is empty", () => {
    const name =null;
    const error = validateName(name);
    expect(error).toEqual(false);
  })
})

describe("Age Validation", () => {
  test("Set the error if age is less than 18", () => {
    const age = 15;
    const error = validateAge(age);
    expect(error).toBeTruthy();
  })
})



