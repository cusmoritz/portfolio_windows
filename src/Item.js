import React from "react";
import { useState } from "react";

export const Item = ({title}) => {

    const [hover, setHover] = useState(false);
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);


    const handleMouseOver = (clientX, clientY) => {
        setHover(true);
        setClientY(clientY);
        setClientX(clientX);
    }

    const handleMouseOut = () => {
        setHover(false);
        setClientX(0);
        setClientY(0);
    }

    const HoverText = ({clientX, clientY}) => {
        console.log(clientX, clientY)
        const clientXString = clientX.toString();
        const clientYString = clientY.toString();
        return (

                <span className="hover" style={{top: `${clientXString}px`, left: `${clientYString}px`}}>Hovering!</span>

        )
    }
 
    return (
        <>
        <li onMouseOver={(event) => handleMouseOver(event.pageX, event.pageY)} onMouseOut={handleMouseOut}>{title}</li>

        {hover && (clientX !== 0) && (clientY !== 0) 
        ? 
        <HoverText clientY={clientY} clientX={clientX}/> 
        : 
        null}

        </>

    )
}