import React from "react";
import createEmptyArray from "create-empty-array";

const LongList = ({ length }) => (
    <ul>
    {createEmptyArray(length).map((_, index) => (
        <li key={index}>Another one</li>
    ))}
    </ul>  
);

export default LongList;