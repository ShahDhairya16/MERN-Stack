import { useContext } from "react";
import { StringContext } from "./CP2.jsx";
import { StyleContext } from "./CP1.jsx";

function CP3() {
    const text = useContext(StringContext);
    const style = useContext(StyleContext);

    return <h2 style={style}>Hello {text}!</h2>;
}

export default CP3;