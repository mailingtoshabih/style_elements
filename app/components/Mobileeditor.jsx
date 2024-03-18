import React, { useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';
import { Adjust } from './Adjust';



export const Mobileeditor = ({ editIcon, closeEditor }) => {
    // console.log(editIcon)

    const [close, setClose] = useState(false);
    // useEffect(() => window.scrollTo(0, 0), []);

    function getName(inputString) {
        const indexOfUnderscore = inputString?.indexOf('_');
        if (indexOfUnderscore !== -1) {
            return inputString?.substring(0, indexOfUnderscore);
        }
        // If there is no underscore, return the entire string
        return inputString;
    }


    const [jsxprompt, setJsxPrompt] = useState("COPY JSX");
    const [svgprompt, setSvgPrompt] = useState("COPY SVG");

    const [previewColor, setPreviewColor] = useState(getName());

    const [color, setColor] = useState('#475569');
    const [fill, setFill] = useState('none');
    const [background, setBackground] = useState('#FFFAFA');
    const [size, setSize] = useState(100);
    const [strokeWidth, setStrokeWidth] = useState(1.3);
    const [transform, setTransform] = useState("");
    const [linecap, setLinecap] = useState('round');
    const [linejoin, setLinejoin] = useState('round');
    const [lineOpacity, setLineOpacity] = useState(1);
    const [xaxis, setxaxis] = useState(0);
    const [yaxis, setyaxis] = useState(0);





    const handleVertically = () => {
        if (transform === "scale(1, -1)") {
            setTransform("scale(-1, 1)");
        }
        else setTransform("scale(1, -1)");
    }


    const handleHorizontal = () => {
        if (transform === "scale(-1, 1)") {
            setTransform("scale(1, 1)");
        }
        else setTransform("scale(-1, 1)");
    }

    let iconPreview;
    const copyJsx = (e) => {
        const jsxCode = `
            <svg width='${size}' height='${size}' stroke='${color}' strokeWidth='${strokeWidth}' strokeLinecap='${linecap}' strokeLinejoin='${linejoin}' transform='${transform}' strokeOpacity='${lineOpacity}' viewBox='0 0 24 24'  xmlns="http://www.w3.org/2000/svg">
                <g fill='${fill}' fillRule="evenodd" transform='translate(${xaxis} ${yaxis})'>
                    ${ReactDOMServer.renderToStaticMarkup(editIcon?.icon?.code)}
                </g>
            </svg>`

        setTimeout(() => setJsxPrompt("COPY JSX"), 2000);
        iconPreview = jsxCode;
        navigator.clipboard.writeText(jsxCode);
        setJsxPrompt("COPIED");
    }


    const copySvg = (e) => {
        const svgCode = `
            <svg  width='${size}' height='${size}' stroke='${color}' stroke-width='${strokeWidth}' stroke-linecap='${linecap}' stroke-linejoin='${linejoin}' transform='${transform}' stroke-opacity='${lineOpacity}' viewBox='0 0 24 24'}  xmlns="http://www.w3.org/2000/svg">
                <g fill='${fill}' fillRule="evenodd" transform='translate(${xaxis} ${yaxis})'>
                    ${ReactDOMServer.renderToStaticMarkup(editIcon?.icon?.code)}
                </g>
            </svg>`

        setTimeout(() => setSvgPrompt("COPY SVG"), 2000);
        navigator.clipboard.writeText(svgCode);
        setSvgPrompt("COPIED");
    }


















    return (
        <>
            <div onClick={(e) => e.stopPropagation()}
                className='sticky top-5 p-3 gap-5 w-full h-fit mx-auto bg-white rounded-xl md:border border-gray-300 '>


                {/* viewer */}
                <div className='mb-1 w-full relative'>

                    <div className={`p-2 relative  w-full grid place-items-center grid-cols-1 rounded-xl`}
                        style={{ backgroundColor: background }}>
                        <>
                            <svg className=''
                                width={size}
                                height={size}
                                stroke={color}
                                strokeWidth={strokeWidth}
                                strokeLinecap={linecap}
                                strokeLinejoin={linejoin}
                                transform={transform}
                                strokeOpacity={lineOpacity}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">

                                <g fill={fill}
                                    fillRule="evenodd"
                                    transform="translate(3 3)"
                                >
                                    {editIcon?.icon?.code}
                                </g>
                            </svg>
                        </>

                    </div>


                    {/* preview -> currently not in smaller screens */}
                    <div className='hidden w-full select-none'>
                        <button className="w-full text-white text-lg font-semibold mt-1 p-[9px] px-4  flex justify-center items-center rounded-xl bg-black  hover:opacity-80 cursor-pointer duration-500 capitalize">
                            <svg className=''
                                width={size}
                                height={size}
                                stroke={color}
                                strokeWidth={strokeWidth}
                                strokeLinecap={linecap}
                                strokeLinejoin={linejoin}
                                transform={transform}
                                strokeOpacity={lineOpacity}
                                viewBox={`${xaxis} ${yaxis} 24 24`}
                                xmlns="http://www.w3.org/2000/svg">

                                {/* <rect width="100%" height="100%" fill="white" rx="8" ry="8" /> */}

                                <g fill={fill}
                                    fillRule="evenodd"
                                    transform="translate(3 3)"
                                >
                                    {editIcon?.icon?.code}
                                </g>
                            </svg>
                            &nbsp;
                            {getName(editIcon?.icon?.names[0])} Preview
                        </button>

                        <div className='my-1 w-full flex justify-between relative p-3 rounded-lg items-center'>
                            <div className='select-none'>Adjust</div>
                            <div className='flex justify-center gap-1'>
                                <svg onClick={() => setyaxis(yaxis + 0.3)} className="w-6 h-6 p-1 bg-gray-100 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                </svg>
                                <svg onClick={() => setyaxis(yaxis - 0.3)} className="w-6 h-6 p-1 bg-gray-100 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                </svg>
                                <svg onClick={() => setxaxis(xaxis + 0.3)} className="w-6 h-6 p-1 bg-gray-100 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                                <svg onClick={() => setxaxis(xaxis - 0.3)} className="w-6 h-6 p-1 bg-gray-100 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>



                    </div>

                </div>





                {/* editor---------------------------------------------------------- */}
                <div className=' text-gray-800 w-full rounded-xl select-none border p-1 h-[450px] overflow-scroll no-scrollbar'>

                    <div className='w-full mb-1 flex justify-between relative p-1 rounded-lg items-center'>
                        <p className='select-none'>Color</p>
                        <input
                            className=' bg-gray-200 p-[2px] rounded'
                            type="color"
                            onChange={(e) => setColor(e.target.value)}
                            name="" id="" value={color} />
                    </div>




                    <div className='w-full mb-1 flex justify-between relative p-1 rounded-lg items-center'>
                        <p className='select-none'>Background</p>
                        <input
                            className='bg-gray-200 p-[2px] rounded'
                            type="color"
                            onChange={(e) => setBackground(e.target.value)}
                            name="" id="" value={background} />
                    </div>

                    <div className='w-full mb-1 flex justify-between relative p-1 rounded-lg items-center'>
                        <p className='select-none'>Fill</p>
                        <input
                            className='bg-gray-200 p-[2px] rounded'
                            type="color"
                            onChange={(e) => setFill(e.target.value)}
                        />
                    </div>

                    <div className='w-full mb-1 flex justify-between relative p-1 rounded-lg items-center'>
                        <div className='select-none'>Size</div>
                        <div className='flex justify-center gap-1'>
                            <p className='font-light'>{size}</p>
                            <svg onClick={() => size > 20 && setSize(size - 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                            <svg onClick={() => size < 140 && setSize(size + 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>

                    <div className='w-full mb-1 flex justify-between relative p-1 rounded-lg items-center'>
                        <div className='select-none'>Stroke Width</div>
                        <div className='flex justify-center gap-1'>
                            <p className='font-light'>{Math.round(strokeWidth * 10) / 10}</p>
                            <svg onClick={() => strokeWidth > 0.2 && setStrokeWidth(strokeWidth - 0.1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                            <svg onClick={() => strokeWidth < 3.3 && setStrokeWidth(strokeWidth + 0.1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>

                    <div className='w-full mb-1 flex justify-between relative p-1 rounded-lg items-center'>
                        <div className='select-none'>Flip</div>
                        <div className='flex justify-center gap-1'>
                            <svg onClick={handleHorizontal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                            <svg onClick={handleVertically} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </div>
                    </div>

                    <div className='w-full mb-1 flex justify-between relative p-1 rounded-lg items-center select-none'>
                        <div className='select-none'>Linecap</div>
                        <div className='flex gap-1 text-xs justify-center items-center text-black'>
                            <p onClick={() => setLinecap("butt")} className="p-1 bg-gray-100 rounded">Butt</p>
                            <p onClick={() => setLinecap("round")} className="p-1 bg-gray-100 rounded">Round</p>
                            <p onClick={() => setLinecap("square")} className="p-1 bg-gray-100 rounded">Square</p>
                        </div>
                    </div>

                    <div className='w-full mb-1 flex justify-between relative p-1 rounded-lg items-center select-none'>
                        <div className='select-none'>Linejoin</div>
                        <div className='flex gap-1 text-xs justify-center items-center text-black'>
                            <p onClick={() => setLinejoin("miter")} className="m-1 p-1 bg-gray-100 rounded">Miter</p>
                            <p onClick={() => setLinejoin("round")} className="p-1 bg-gray-100 rounded">Round</p>
                            <p onClick={() => setLinejoin("bevel")} className="p-1 bg-gray-100 rounded">Bevel&nbsp;</p>
                        </div>
                    </div>

                    <div className='w-full mb-1 flex justify-between relative p-1 rounded-lg items-center'>
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

                    <div className='flex gap-2 text-xs md:text-lg'>
                        <div onClick={copyJsx} className="text-purple-600  font-semibold mt-1 p-2 w-full flex justify-center items-center rounded-lg bg-purple-200 hover:bg-purple-300 cursor-pointer duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                            </svg>
                            &nbsp;
                            {jsxprompt}
                        </div>

                        <div onClick={copySvg} className="text-green-600 font-semibold mt-1 p-2 w-full flex justify-center items-center rounded-lg bg-green-200 hover:bg-green-300 cursor-pointer  duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                            </svg>
                            &nbsp;
                            {svgprompt}
                        </div>
                    </div>



                    {/* <Adjust iconname={getName(editIcon?.icon?.names[0])} */}
                        {/* // svgPreview={preview}
                        // xaxis={xaxis}
                        // yaxis={yaxis}
                        // setxaxis={setxaxis}
                        // setyaxis={setyaxis}
                    // icon={iconbg}
                    // setIconBg={setIconBg} */}
                    {/* // iconColor={iconColor} */}
                    {/* // setIconColor={setIconColor}
                    // iconRadius={iconRadius}
                    // setIconRadius={setIconRadius} */}
                    {/* /> */}

                </div>






                <div onClick={(e) => closeEditor(e)}
                    className='absolute top-1 left-1' style={{ backgroundColor: "#ff4242", borderRadius: '24%', width: "fit-content" }}>
                    <svg style={{ color: '#f7f7f7' }} width='44' height='44' stroke='#f7f7f7' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' strokeOpacity='1' viewBox={'0 0 15 15'} xmlns="http://www.w3.org/2000/svg"><g fill='none' fillRule="evenodd" transform='translate(-2.9999999999999996 -2.9999999999999996)'><path d="m7.5 7.5 6 6"></path><path d="m13.5 7.5-6 6"></path></g></svg>
                </div>

            </div>
        </>
    )
}
