import React from 'react';
// import { Link } from 'react-router-dom';

interface ISideBarItem {
  text: string;
  url: string;
  state?: string;
}

const SideBarEach: Record<string, string> = {
    true: " prepclass-background"
}
function SideBarItem({ text, url, state }: ISideBarItem) {
    // const [isActive, setIsActive] = useState(false);

    return (
        <>
            <a className="" href="/">
                <button
                    // onClick = {()=> setIsActive(true)}
                    className={`flex items-center w-full py-3 pl-2 mb-4 text-gray-500 rounded-2xl ${SideBarEach[`${state}`]}`}>
                    <img className="mr-2" src={url} alt="dashboard icon" />
                    {text}
                </button>
                
                
            </a>
        </>
    )
}

export default SideBarItem
