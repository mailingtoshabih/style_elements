import React, { useEffect, useState } from 'react'
import { Preview } from './Preview'

export const Adjust = ({ iconname, svgPreview, setxaxis, setyaxis, xaxis, yaxis, setIconBg, iconColor, setIconColor, iconRadius, setIconRadius }) => {


    // console.log(icon)
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setIconBg(!isChecked);
    };


    return (
        <div className='border rounded-xl p-1'>


            {/* adjust */}
            <div className='w-full flex justify-between relative p-1 rounded-lg items-center hover:bg-slate-200'>
                <div className='select-none'>Center</div>
                <div className='flex justify-center gap-1'>
                    <svg onClick={() => setyaxis(yaxis - 0.2)} className="w-6 h-6 p-1 bg-gray-100 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                    <svg onClick={() => setyaxis(yaxis + 0.2)} className="w-6 h-6 p-1 bg-gray-100 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                    <svg onClick={() => setxaxis(xaxis - 0.2)} className="w-6 h-6 p-1 bg-gray-100 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <svg onClick={() => setxaxis(xaxis + 0.2)} className="w-6 h-6 p-1 bg-gray-100 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>


            {
                isChecked &&
                <>
                    <div className='mt-2 w-full flex justify-between relative p-1 rounded-lg items-center hover:bg-slate-200'>
                        <div className='select-none'>Icon Color</div>
                        <input
                            type="color"
                            checked={isChecked}
                            value={iconColor}
                            onChange={(e) => setIconColor(e.target.value)} />
                    </div>

                    <div className='mt-2 w-full flex justify-between relative p-1 rounded-lg items-center hover:bg-slate-200'>
                        <div className='select-none'>Corners</div>
                        <div className='flex justify-center gap-1'>
                            <p className=' text-violet-900'>{iconRadius}px</p>
                            <svg onClick={() => iconRadius > 3 && setIconRadius(iconRadius - 2)}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                            <svg onClick={() => iconRadius < 110 && setIconRadius(iconRadius + 2)}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                </>
            }


            <div className='mt-2 w-full flex justify-between relative p-1 rounded-lg items-center'>
                <div className='select-none'>Make CSS Icon</div>
                <input
                    className='outline-none'
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange} />
            </div>







            {/* preview */}
            <Preview svgPreview={svgPreview} iconname={iconname} />
        </div>
    )
}
