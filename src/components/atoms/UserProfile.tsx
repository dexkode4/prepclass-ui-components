import React,{useState} from "react";
import {AiFillCaretDown} from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface IUserProfile {
    username?: string;
}

function UserProfile({username}: IUserProfile) {
    const [isOpen, setIsOpen] = useState(false);
	return (
		
		<div className="relative">
			<button onClick={() => setIsOpen((open) => !open)} className="flex items-center justify-between px-2 py-1 overflow-hidden bg-white border-2 border-gray-600 focus:outline-none focus:border-white rounded-xl">
				<img
					className="w-8 h-8 mr-2 border-2 border-gray-400 rounded-full"
					src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
					alt="Your avatar"
				/>

                <span className="mr-1 font-semibold">{ username }</span> <AiFillCaretDown/>
			</button>
            {
                isOpen  &&
                
			<div className="absolute w-48 py-2 mt-2 bg-white rounded-lg shadow-xl top-4">
				<Link
					to="/settings"
					className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
				>
					Account settings
				</Link>
				<Link
					to="/support"
					className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
				>
					Support
				</Link>
				<Link
					to="/signout"
					className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
				>
					Sign out
				</Link>
			</div>}
		</div>
	);
}

export default UserProfile;
