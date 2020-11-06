import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

interface IButton {
	text: string;
    type: string
}
const ButtonType: Record<string, string> = {
    isQuiz : " bg-white hover:bg-blue-900 text-blue-900 hover:text-white hover:border-blue-900 rounded-full",
    isClass: " bg-green-100 hover:bg-green-100 text-green-500 hover:text-green-500 hover:border-green-500 rounded-xl",
    default: " bg-green-600 hover:bg-white text-white hover:text-green-500 hover:border-green-500 rounded-xl",
    isCoin: ""
}

export function Button({ text, type = "default"}: IButton) {
	return (
		<button

			className={`m-4 flex items-center justify-between font-semibold  py-2 px-6 border ${ButtonType[`${type}`]}`}
		>
			{text}
			{type === "isQuiz" && <HiArrowCircleRight className="ml-2 text-3xl" />}
		</button>
	);
}

