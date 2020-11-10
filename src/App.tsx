import React from "react";
import Button from "./components/atoms/Button";
import Coin from "./components/atoms/Coin";
import CardLiveClass from "./components/molecules/CardLiveClass";
import UserProfile from "./components/atoms/UserProfile";
import CardTopic from "./components/molecules/CardTopic";
import CardClassGroup from "./components/molecules/CardClassgroup";
import CardQuiz from "./components/molecules/CardQuiz";
import NotificationBell from "./components/atoms/NotificationBell";
import ClassPage from './components/organisms/ClassPage';
import DropdownButton from './components/atoms/DropdownButton';
import FilterButton from './components/atoms/FilterButton';
import Search from "./components/atoms/Search";
import Header from "./components/molecules/Header";
import Timer from './components/molecules/Timer';
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


const levels = ['Nur', 'Pry 1', 'Pry 2', 'Pry 3', 'SSS 1', 'JSS 2'];
const name = "Class:";
function App() {
  return (
    <>
      <ClassPage />
      <DropdownButton levels={levels} name={name}/>
      <Button text="Join Live" type="isQuiz" />
      <FilterButton />
   </>
  );

	return (
		<>
			<Header />
			<Timer day={3} hour={15} minute={50} groupName={"Socrate group"}/>
			
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
				<Search placeholder="Search Menu...." width="quaterSize" />

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

				<CardQuiz
					imageUrl={"/images/Group4.png"}
					subject={"Trigonometry"}
					topic={"Chapter 1: Algebra Numbers"}
				/>
				<NotificationBell count={2} />
			</div>
		</>
	);
}

export default App;
