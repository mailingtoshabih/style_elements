// right side svg editor
import React from 'react'


export const Panel = ({
    color,
    setColor,
    background,
    setBackground,
    fill,
    setFill,
    iconsize,
    setIconsize,
    svgsize,
    setSvgsize,
    strokeWidth,
    setStrokeWidth,
    lineOpacity,
    setLineOpacity,
    setLinecap,
    setLinejoin,
    jsxprompt,
    svgprompt,
    copyJsx,
    copySvg,
}) => {
    return (
        <div>
            {/* <div className='flex justify-end p-2'>
                <div className='w-fit' style={{ backgroundColor: "#ff4242", borderRadius: '10px' }}>
                    <svg style={{ color: '#f7f7f7' }} width='44' height='44' stroke='#f7f7f7' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' strokeOpacity='1' viewBox={'0 0 15 15'} xmlns="http://www.w3.org/2000/svg"><g fill='none' fillRule="evenodd" transform='translate(-2.9999999999999996 -2.9999999999999996)'><path d="m7.5 7.5 6 6"></path><path d="m13.5 7.5-6 6"></path></g></svg>
                </div>
            </div> */}

            <div className='w-full my-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
                <p className='select-none'>Color</p>
                <input
                    className='bg-gray-200 p-[2px] rounded'
                    type="color"
                    onChange={(e) => setColor(e.target.value)}
                    name="" id="" value={color} />
            </div>

            <div className='w-full mb-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
                <p className='select-none'>Background</p>
                <input
                    className='bg-gray-200 p-[2px] rounded'
                    type="color"
                    onChange={(e) => setBackground(e.target.value)}
                    name="" id="" value={background} />
            </div>

            <div className='w-full mb-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
                <p className='select-none'>Fill</p>
                <input
                    className='bg-gray-200 p-[2px] rounded'
                    type="color"
                    value={fill}
                    onChange={(e) => setFill(e.target.value)}
                />
            </div>

            <div className='w-full mb-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
                <div className='select-none'>Icon Size</div>
                <div className='flex justify-center gap-1'>
                    <p className='text-violet-900'>{iconsize}px</p>
                    <svg onClick={() => iconsize > 4 && setIconsize(iconsize - 4)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <svg onClick={() => iconsize < 200 && setIconsize(iconsize + 4)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>

            <div className='w-full mb-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
                <div className='select-none'>Svg Size</div>
                <div className='flex justify-center gap-1'>
                    <p className='text-violet-900'>{svgsize}px</p>
                    <svg onClick={() => svgsize > 0 && setSvgsize(svgsize + 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <svg onClick={() => svgsize < 2000 && setSvgsize(svgsize - 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>

            <div className='w-full mb-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
                <div className='select-none'>Stroke Width</div>
                <div className='flex justify-center gap-1'>
                    <p className='text-violet-900'>{Math.round(strokeWidth * 10) / 10}px</p>
                    <svg onClick={() => strokeWidth > 0.2 && setStrokeWidth(strokeWidth - 0.1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <svg onClick={() => strokeWidth < 3.3 && setStrokeWidth(strokeWidth + 0.1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>

            <div className='w-full mb-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
                <div className='select-none'>Linecap</div>
                <div className='flex gap-1 text-xs justify-center items-center text-black'>
                    <p onClick={() => setLinecap("butt")} className="p-1 bg-gray-100 rounded">Butt</p>
                    <p onClick={() => setLinecap("round")} className="p-1 bg-gray-100 rounded">Round</p>
                    <p onClick={() => setLinecap("square")} className="p-1 bg-gray-100 rounded">Square</p>
                </div>
            </div>

            <div className='w-full mb-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
                <div className='select-none'>Linejoin</div>
                <div className='flex gap-1 text-xs justify-center items-center text-black'>
                    <p onClick={() => setLinejoin("miter")} className="m-1 p-1 bg-gray-100 rounded">Miter</p>
                    <p onClick={() => setLinejoin("round")} className="p-1 bg-gray-100 rounded">Round</p>
                    <p onClick={() => setLinejoin("bevel")} className="p-1 bg-gray-100 rounded">Bevel&nbsp;</p>
                </div>
            </div>

            <div className='w-full mb-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
                <div className='select-none'>Line Opacity</div>
                <div className='flex justify-center gap-1'>
                    <p className='font-light'>{Math.round(lineOpacity * 10) / 10}</p>
                    <svg onClick={() => lineOpacity > 0.2 && setLineOpacity(lineOpacity - 0.1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <svg onClick={() => lineOpacity < 1 && setLineOpacity(lineOpacity + 0.1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>

            <div onClick={copyJsx} className="text-purple-600 text-lg font-semibold mt-1 p-3 w-full flex justify-center items-center rounded-xl bg-purple-200 hover:bg-purple-300 cursor-pointer duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
                &nbsp;
                {jsxprompt}
            </div>


            <div onClick={copySvg} className="text-green-600 text-lg font-semibold mt-1 p-3 w-full flex justify-center items-center rounded-xl bg-green-200 hover:bg-green-300 cursor-pointer  duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
                &nbsp;
                {svgprompt}
            </div>


            <div onClick={copySvg} className="text-indigo-700 text-lg font-semibold mt-1 p-3 w-full flex justify-center items-center rounded-xl bg-indigo-200 hover:bg-indigo-300 cursor-pointer  duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
                &nbsp;
                {"COPY PNG"}
            </div>

        </div>
    )
}
