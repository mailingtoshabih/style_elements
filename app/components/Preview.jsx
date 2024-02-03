import React from 'react'

export const Preview = ({ iconname, svgPreview }) => {
    return (
        <div className="gap-2 w-full text-white text font-semibold mt-1 p-1 flex justify-between items-center rounded-lg duration-500 capitalize ">
            <div className='w-full text-center bg-blue-600 rounded-lg'>
                {svgPreview}&nbsp;
                Preview
            </div>
            
            <div className='w-full text-center bg-blue-600 rounded-lg'>
                {svgPreview}&nbsp;
                {iconname && iconname}
            </div>
        </div>
    )
}
