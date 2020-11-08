import React from 'react';
import {Button} from './components/atoms/Button';
import Coin from './components/atoms/Coin';
import CardLiveClass from './components/atoms/Card-LiveClass';
import UserProfile from './components/atoms/UserProfile';
// import {Button} from './components/atoms/Button';
// import Search from './components/atoms/Search';
// import ClassSideBar from './components/molecules/ClassSideBar';
// import CardWithText from './components/atoms/CardWithText';
// import ClassPage from './components/organisms/ClassPage';
import './App.css';
import {Route} from 'react-router-dom';

let profileImages = ["https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg"]


function App() {
  return (
    <>
      <Route exact path="/">

      <Button text="Join Live" type="isQuiz"/>
      <Coin count={12}/>
      <CardLiveClass url={'/images/Rectangle.png'}
                     caption={"Socrate group"}
                     description={"Reproduction : The Placemodium of Amoeba"}
                     profileImages={profileImages}
                     progress={70}/>
      <UserProfile username={"Akinloye Seun"}/>
            
      </Route>
      {/* <Button text="Join Live" type="isQuiz" /> */}
      {/* <Search placeholder="Search Menu...." width="quaterSize"/> */}
      {/* <ClassSideBar /> */}
      {/* <CardWithText url="/assets/img/Chemistry.svg" text="Chemistry"/> */}
      {/* <ClassPage /> */}
      <Route exact path="/settings">
          <h1>Settings page</h1>
      </Route>
   </>
  );
}

export default App;
