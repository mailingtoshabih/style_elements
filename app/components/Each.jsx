import React, { useState, useEffect } from 'react';
// import svg from "../assets/svgicons/airplay.svg"
import { Editor } from './Editor';


export const Each = ({ icon }) => {

    const [editIcon, setEditIcon] = useState(false);           //if true, editor appears

    const handleClick = () => {
        // console.log(icon)
        if (icon) setEditIcon({ icon });
    }


    const closeEditor = (event) => {
        event.stopPropagation();
        setEditIcon(false);
    }


    return (
        <div>
            <div className='m-4 text-center text-slate-700 hover:text-[#FF4500] place-items-center p-5 cursor-pointer hover:-rotate-12 duration-500'
                onClick={handleClick}>

                <div className='flex items-center justify-center  text-center  mx-auto'>
                    <svg stroke='currentColor' strokeWidth={1.3} width="62" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(6 3)">
                            {
                                icon?.code
                            }
                        </g>
                    </svg>
                </div>

            </div>


            {/* editor */}
            {editIcon &&
                <>
                    <div className='flex z-10 overflow-none fixed h-screen top-0 bottom-0 left-0 right-0 w-full items-center justify-center backdrop-blur-[16px] shadow-2xl'>
                        <Editor editIcon={editIcon} closeEditor={closeEditor} />
                    </div>
                </>
            }



        </div>
    )
}
