import React from 'react'
import Button  from '../atoms/Button'

interface IClassFirstPage {
    left_side: string;
    header: string;
    desc: string;
    text: string;
    type: string
}
function ClassFirstPage({left_side, header, desc, text, type}: IClassFirstPage) {
    return (
        <div className="flex items-center w-3/5 h-40 bg-gray-200">
            <div><img className="h-auto" src={left_side} alt="art on class" /></div>
            <div className="flex items-center bg-white prepclass-xflow">
                <div className="w-4/5 py-2 ml-4">
                    <p className="mb-2 mr-4 text-lg font-bold prepclass-color">{header}</p>
                    <p className="text-base text-gray-500">{desc}</p>
                </div>
                <Button text={text} type={type} />
            </div>
        </div>
    )
}

export default ClassFirstPage
