import React from "react";
import { Button } from "./components/atoms/Button";
import Coin from "./components/atoms/Coin";
import CardLiveClass from "./components/molecules/CardLiveClass";
import UserProfile from "./components/atoms/UserProfile";
import CardTopic from "./components/molecules/CardTopic";
import CardClassGroup from "./components/molecules/CardClassgroup";
import CardQuiz from './components/molecules/CardQuiz';
import NotificationBell from './components/atoms/NotificationBell';

// import {Button} from './components/atoms/Button';
// import Search from './components/atoms/Search';
// import ClassSideBar from './components/molecules/ClassSideBar';
// import CardWithText from './components/atoms/CardWithText';
// import ClassPage from './components/organisms/ClassPage';
import "./App.css";

let profileImages = [
	"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
	"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
	"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
	"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
	"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
	"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
	"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
	"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
	"https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
];

function App() {
	return (
		<div className="app">
			<Button text="Join Live" type="isQuiz" />
			<Coin count={12} />
			<CardLiveClass
				url={"/images/Rectangle.png"}
				caption={"Socrate group"}
				description={"Reproduction : The Placemodium of Amoeba"}
				profileImages={profileImages}
				progress={70}
			/>
			<UserProfile username={"Akinloye Seun"} />
			{/* <Button text="Join Live" type="isQuiz" /> */}
			{/* <Search placeholder="Search Menu...." width="quaterSize"/> */}
			{/* <ClassSideBar /> */}
			{/* <CardWithText url="/assets/img/Chemistry.svg" text="Chemistry"/> */}
			{/* <ClassPage /> */}

			<CardTopic
				url={"/images/Rectangle.png"}
				topic={"Introduction to Trigonometry"}
				duration={"2hr 30mins"}
			/>
			<CardClassGroup
				url={"/images/Rectangle.png"}
				classGroupName={"Sally Group"}
				date={"(Oct 10th - Jan 2021)"}
        progress={70}
        noClasses={10}
        topic={"Path to Understanding Maths for JSS 1"}
        profileImages={profileImages}
        noStudents={5}
			/>

      <CardQuiz imageUrl={"/images/Group4.png"} subject={"Trigonometry"} topic={"Chapter 1: Algebra Numbers"}/>
      <NotificationBell count={2}/>
		</div>
	);
}

export default App;
