import React from "react";
import { useState } from "react";

export const Item = ({title, stats}) => {

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
        // console.log(clientX, clientY)
        const clientXString = clientX.toString();
        const clientYString = clientY.toString();
        return (

                <span className="hover" style={{left: `${clientXString}px`, top: `${clientYString}px`}}>{clientXString}, {clientYString}</span>

        )
    }
 
    return (
        <>
        <li onMouseOver={(event) => handleMouseOver(event.clientX, event.clientY)} onMouseOut={handleMouseOut}>{title}</li>

        {hover && (clientX !== 0) && (clientY !== 0) 
        ? 
        <HoverText clientY={clientY} clientX={clientX}/> 
        : 
        null}

        </>

    )
}