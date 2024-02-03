import React from 'react'

export const Preview = ({ iconname, svgPreview }) => {
    return (
        <div className=" gap-1 w-full text-white mt-1 p-1 flex justify-between items-center rounded-lg duration-500 capitalize">
            <div className='p-1 flex justify-around items-center w-full text-center bg-black rounded-lg'>
                {svgPreview}&nbsp;
                Preview
            </div>

            <div className='text-indigo-800 p-1 flex justify-around items-center font-semibold w-full text-center  bg-indigo-100 rounded-lg'>
                {svgPreview}&nbsp;
                {iconname && iconname}
            </div>
        </div>
    )
}
