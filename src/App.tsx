import React from 'react';
import {Button} from './components/atoms/Button';
import Coin from './components/atoms/Coin';
import CardLiveClass from './components/atoms/Card-LiveClass';
import UserProfile from './components/atoms/UserProfile';
import './App.css';

let profileImages = ["https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg"]


function App() {
  return (
    <>
      <Button text="Join Live" type="isQuiz"/>
      <Coin count={12}/>
      <CardLiveClass url={'/images/Rectangle.png'}
                     caption={"Socrate group"}
                     description={"Reproduction : The Placemodium of Amoeba"}
                     profileImages={profileImages}
                     progress={70}/>
      <UserProfile/>
            
   </>
  );
}

export default App;
