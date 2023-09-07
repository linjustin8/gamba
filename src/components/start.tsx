//Start.tsx

import React from 'react';
import {Button} from './StartButtons';


function Start() {
    const clickPlay = () => {
        console.log("balls");
    }

    return (
        <div className="btn_container">
            <Button text="PLAY" onClickHandler={clickPlay} />
            <Button text ="HOW TO PLAY" onClickHandler={clickPlay} />
            <Button text ="LEADERBOARD" onClickHandler={clickPlay} />
            <Button text ="SETTINGS" onClickHandler={clickPlay} />
            <Button text ="ABOUT" onClickHandler={clickPlay} />
        </div>
    );
}


export default Start;