import React from 'react'
import PrepLogo from '../atoms/PrepLogo'
import SideBarItem from '../atoms/SideBarItem'

const ClassSideBar = () => {
    return (
        <div className="w-1/5 px-4 mt-12">
            <PrepLogo />
            <SideBarItem text="Dashboard" url="/assets/img/Dashboard.svg" state="false" />
            <SideBarItem text="My Classes" url="/assets/img/Classes.svg" state="true" />
            <SideBarItem text="My Library" url="/assets/img/Library.svg" state="false" />
            <SideBarItem text="Payments" url="/assets/img/Payment.svg" state="false" />
            <SideBarItem text="Refer" url="/assets/img/Refer.svg" state="false" />
            <SideBarItem text="Settings" url="/assets/img/Settings.svg" state="false" />
        </div>
    )
}

export default ClassSideBar
