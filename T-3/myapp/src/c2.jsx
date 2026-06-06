import {useContext} from "react";
import {fname,lname} from "./PC.jsx";

function c2(){
    const f = useContext(fname);
    const l = useContext(lname);
    return (
        <>
        <h1>First Name: {f}</h1>
        <h1>Last Name: {l}</h1>
        </>
    )
}