import React from 'react';
import {Button} from './components/atoms/Button';
// import Search from './components/atoms/Search';
// import ClassSideBar from './components/molecules/ClassSideBar';
// import CardWithText from './components/atoms/CardWithText';
import ClassPage from './components/organisms/ClassPage';
import DropdownButton from './components/atoms/DropdownButton';
import FilterButton from './components/atoms/FilterButton';
import './App.css';

const levels = ['Nur', 'Pry 1', 'Pry 2', 'Pry 3', 'SSS 1', 'JSS 2'];
const name = "Class:";
function App() {
  return (
    <>
      {/* <Search placeholder="Search Menu...." width="quaterSize"/> */}
      {/* <ClassSideBar /> */}
      {/* <CardWithText url="/assets/img/Chemistry.svg" text="Chemistry"/> */}
      <ClassPage />
      <DropdownButton levels={levels} name={name}/>
      <Button text="Join Live" type="isQuiz" />
      <FilterButton />
   </>
  );
}

export default App;
