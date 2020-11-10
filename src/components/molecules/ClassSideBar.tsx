import React, { useState } from 'react'
import PrepLogo from '../atoms/PrepLogo'
import SideBarItem from '../atoms/SideBarItem'

const ClassSideBar = () => {
    const [isActive, setIsActive] = useState(Array(6).fill("false"));
    
    const handleIsActive = (e: any) => {
        let newActive = [...isActive];
        const name = e.currentTarget.id;
        const step = isActive[name];
        newActive[step] = "true";
        setIsActive(newActive);
    }
    return (
        <div className="w-1/5 px-4 mt-12">
            <PrepLogo />
            <SideBarItem text="Dashboard" url="/assets/img/Dashboard.svg" state={isActive[0]} />
            <SideBarItem text="My Classes" url="/assets/img/Classes.svg" state={isActive[1]} />
            <SideBarItem text="My Library" url="/assets/img/Library.svg" state={isActive[2]} />
            <SideBarItem text="Payments" url="/assets/img/Payment.svg" state={isActive[3]} />
            <SideBarItem text="Refer" url="/assets/img/Refer.svg" state={isActive[4]} />
            <SideBarItem text="Settings" url="/assets/img/Settings.svg" state={isActive[5]} />
        </div>
    )
}

export default ClassSideBar
