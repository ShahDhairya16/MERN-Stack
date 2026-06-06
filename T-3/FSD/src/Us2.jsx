// Add 3 buttons : Change text, Change color and Hide/Show. Add heading "LJ UNIVERSITY" in red color and also add react hooks text in h2 tag.While clicking on change text, text should be changed to "Welcome Students" and visa versa. While clicking on change color button, color should be changed to blue and visa versa (On double click). Initially button text should be Hide. While clicking on it, button text should change to show and "react hook" should not be shown.

import React, { useState } from "react";

function Us2() {
    const [name, setName] = useState("LJU");
    const [textColor, setColor] = useState("red");
    const [hideText, setHide] = useState("React Hooks");
    const [buttonText, setButtonText] = useState('Hide');

    function showHide() {

        if (buttonText === 'Hide') {
            setButtonText("Show")
            setHide("");
        } else {
            setButtonText("Hide")
            setHide("React Hooks");
        }
    }

    function changeName() {

        if (name === "LJU") {
            setName("Welcome Students");
        } else {
            setName("LJU");
        }
    }

    function changeColor() {

        if (textColor === "red") {
            setColor("blue");
        } else {
            setColor("red");
        }
    }

    return (
        <>
            <button onClick={changeName}>Change text</button>
            <button onDoubleClick={changeColor}>Change color</button>
            <button onClick={showHide}>{buttonText}</button>
            <h1 style={{ color: textColor }}>{name}</h1>
            <h2>{hideText}</h2>
        </>
    )

}
export default Us2