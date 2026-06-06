// To display student details.
// Create a parent component Prop1.jsx. Pass the following data to child component Prop2.jsx : Student name, rollno and marks. In child component, display student details and updated marks (Increased by 1).

import Prop2 from './Prop2.jsx'

function Prop1() {
    return (
        <>
            <Prop2 name = "John Doe" roll = "101" marks = {20}/>
            <Prop2 name = "Jane Smith" roll = "102" marks = {21}/>
            <Prop2 name = "Alice Johnson" roll = "103" marks = "23"/>
        </>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}

export default Prop1