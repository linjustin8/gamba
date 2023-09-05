//StartButton.tsx

import React from "react";
import './StartButtons.css';

interface IButtonProps { 
    text: string;
    onClickHandler: () => void;
}

export const Button = ({ text, onClickHandler } : IButtonProps) => {
    return (
        <button className="button" onClick={onClickHandler}>{text}</button>
    );
}