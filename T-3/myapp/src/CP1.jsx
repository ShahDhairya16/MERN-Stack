import { createContext } from "react";
import CP2 from "./CP2.jsx";

export const StyleContext = createContext();

function CP1() {
    return (
        <StyleContext.Provider
            value={{ color: "blue", fontSize: "20px" }}
        >
            <CP2 />
        </StyleContext.Provider>
    );
}

export default CP1;