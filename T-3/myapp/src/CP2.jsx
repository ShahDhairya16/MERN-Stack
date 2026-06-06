import { createContext } from "react";
import CP3 from "./CP3.jsx";

export const StringContext = createContext();

function CP2() {
    return (
        <StringContext.Provider value="Students">
            <CP3 />
        </StringContext.Provider>
    );
}

export default CP2;