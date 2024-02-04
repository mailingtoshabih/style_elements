import React from 'react'

export const Preview = ({ iconname, svgPreview }) => {
    return (
        <div className=" w-full text-white mb-3 flex justify-between items-center rounded-lg duration-500 capitalize">
            <div className='p-1 gap-1 flex justify-center items-center w-full bg-indigo-800 rounded-lg'>
                {svgPreview}&nbsp;
                <p>
                    Preview In A Button
                </p>
            </div>

            {/* <div className='text-indigo-800 p-1 flex justify-around items-center font-semibold w-full text-center  bg-indigo-100 rounded-lg'>
                {svgPreview}&nbsp;
                <p>
                    {iconname && iconname}
                </p>
            </div> */}
        </div>
    )
}
