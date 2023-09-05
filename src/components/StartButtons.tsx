//button.tsx

import React from 'react'
import './StartButtons.css'

//"PLAY" Button
export function PlayButton() {
    const handleClick = () => {
        console.log("BALLS");
    }

    return (
        <button onClick={handleClick}>PLAY</button>
    );
}

//"HOW TO PLAY" Button
export function HowToButton() {
    const handleClick = () => {
        console.log("BALLS");
    }

    return (
        <button onClick={handleClick}>HOW TO PLAY</button>
    );
}

//"LEADERBOARD" Button
export function LeaderboardButton() {
    const handleClick = () => {
        //logic for handleClick
    }

    return (
        <button onClick={handleClick}>LEADERBOARD</button>
    );
}

//"SETTINGS" Button
export function SettingsButton() {
    const handleClick = () => {
        //logic for handleClick
    }

    return (
        <button onClick={handleClick}>SETTINGS</button>
    );
}

//"ABOUT" Button
export function AboutButton() {
    const handleClick = () => {
        //logic for handleClick
    }

    return (
        <button onClick={handleClick}>ABOUT</button>
    );

}