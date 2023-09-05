//App.tsx

import React from 'react';
import './App.css'
import {PlayButton, HowToButton,LeaderboardButton, SettingsButton, AboutButton} from './components/StartButtons'

function App() {
    return (
    <div className="btn_container">
        <PlayButton />
        <HowToButton />
        <LeaderboardButton />
        <SettingsButton />
        <AboutButton />
    </div>
    );
}

export default App;