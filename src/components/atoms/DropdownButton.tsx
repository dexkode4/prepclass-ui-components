import React, {useState} from 'react';

interface IDropdownButton {
    levels: string[];
    name: string
}

const DropdownButton = ({levels, name}: IDropdownButton) => {
    const [show, setShow] = useState('hidden');
    const handleShow = () => {
        if (show === 'hidden') setShow('block');
        else setShow('hidden');
    }
    
    const [value, setValue] = useState('SSS 1');
    const handleValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const name = e.currentTarget.id;
        setValue(name);
        handleShow();
    }
    
    return (
    <div className="p-10">

        <div className="relative inline-block">
            <button onClick={handleShow} className="inline-flex items-center px-4 py-3 font-semibold text-gray-700 bg-gray-100 rounded-3xl">
                <span className="mr-3 text-sm font-light">{name}</span>
                <span className="mr-5 text-sm font-medium">{value}</span>
                <span className="w-4 h-4 mt-3 fill-current"><img src="/assets/img/Dropdown.svg" alt="down arrow" /></span>
            </button>
            <ul className={`${show} absolute pt-1 text-gray-700 text-center w-full`}>
                {levels.map((level, index) => { return (
                    <li onClick={handleValue} key={index} id={level}><p className={`block cursor-pointer py-2 bg-white rounded-t hover:bg-gray-400`}>{level}</p></li>)
                })}
            </ul>
        </div>
    </div>
    )
}

export default DropdownButton
