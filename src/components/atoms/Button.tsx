import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

interface IButton {
	text: string;
    type: string
}
const ButtonType: Record<string, string> = {
    isQuiz : " bg-white hover:bg-blue-900 text-blue-900 hover:text-white hover:border-blue-900 rounded-full text-sm px-3 py-1",
    isClass: " m-4 btn-class-bgcolor hover:bg-green-100 prepclass-primary-textcolor hover:text-green-500 hover:border-green-500 rounded-xl py-2 px-4",
    default: " bg-green-600 hover:bg-white text-white hover:text-green-500 hover:border-green-500 rounded-xl py-2 px-4",
    isCoin: ""
}

function Button({ text, type = "default"}: IButton) {
	return (
		<button

			className={`flex items-center justify-between font-semibold focus:outline-none ${ButtonType[`${type}`]}`}
		>
			{text}
			{type === "isQuiz" && <HiArrowCircleRight className="ml-2 text-3xl" />}
		</button>
	);
}

export default Button;
