import React from 'react';
import CardWithText from '../atoms/CardWithText';
import ClassFirstPage from '../molecules/ClassFirstPage';
import ClassSideBar from '../molecules/ClassSideBar';

const firstContent = {
  left_side: "/assets/img/All_Classes.svg",
  header: "All Classes",
  desc: "The offline tutoring services refer to our regular physical tutoring services.",
  text: "Take the Class",
  type: "default"
}

const ClassPage = () => {
  return (
    <>
    <div className="flex w-full">
      <ClassSideBar />
      <div className="w-full px-4 mt-12 prepclass-grid">
        <CardWithText url="/assets/img/Chemistry.svg" text="Chemistry" />
        <CardWithText url="/assets/img/Physics.svg" text="Phyiscs" />
        <CardWithText url="/assets/img/PHE.svg" text="PHE" />
        <CardWithText url="/assets/img/Yoruba.svg" text="Yoruba" />
        <CardWithText url="/assets/img/Geography.svg" text="Geography" />
        <CardWithText url="/assets/img/History.svg" text="History" />
        <CardWithText url="/assets/img/English.svg" text="English" />
        <CardWithText url="/assets/img/Maths.svg" text="Maths" />
        <CardWithText url="/assets/img/Biology.svg" text="Biology" />
      </div>
      </div>
      <ClassFirstPage
        left_side={firstContent.left_side}
        header={firstContent.header}
        desc={firstContent.desc}
        text={firstContent.text}
        type={firstContent.type} />
    </>
  )
};

export default ClassPage;
