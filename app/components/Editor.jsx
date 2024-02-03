import React, { useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';
import { Adjust } from './Adjust';


function getName(inputString) {
    const indexOfUnderscore = inputString?.indexOf('_');
    if (indexOfUnderscore !== -1) {
        return inputString?.substring(0, indexOfUnderscore);
    }
    return inputString;
}




export const Editor = ({ editIcon }) => {

    const [size, setSize] = useState(100);                                 // width and height of canvas
    const [xaxis, setxaxis] = useState(3);                                 // tranform translate
    const [yaxis, setyaxis] = useState(3);                               // tranform translate
    const [iconbg, setIconBg] = useState(false);                      // if true, add icon bg  
    const [background, setBackground] = useState('#ffffff');
    const [preview, setPreview] = useState(null);                          //preview icon's data fetching state 
    const [color, setColor] = useState('#475569');                         // stroke color
    const [transform, setTransform] = useState("");                        // flip
    const [linecap, setLinecap] = useState("round");
    const [iconRadius, setIconRadius] = useState(10);                      // borderradius of icon
    const [linejoin, setLinejoin] = useState('round');
    const [lineOpacity, setLineOpacity] = useState(1);
    const [strokeWidth, setStrokeWidth] = useState(1.3);
    const [iconColor, setIconColor] = useState('#efefef');                  // bg color of entire icon
    const [fill, setFill] = useState('none');                              // color inside svg
    const [jsxprompt, setJsxPrompt] = useState("COPY JSX");                 // copy jsx btn text 
    const [svgprompt, setSvgPrompt] = useState("COPY SVG");                 // copy svg btn text


    const iconBgCode = {
        backgroundColor: iconColor,
        borderRadius: `${iconRadius}px`,
        width: "fit-content",
    }

    // console.log(iconColor)

    useEffect(() => {                                           // this useffect send svg code to preview
        const svgPreview =
            <div style={iconbg ? iconBgCode : {}}>
                <svg className=''
                    width={size < 40 ? size : 40}
                    height={size < 40 ? size : 40}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap={linecap}
                    strokeLinejoin={linejoin}
                    transform={transform}                   //flip
                    strokeOpacity={lineOpacity}
                    viewBox={`0 0 24 24`}
                    xmlns="http://www.w3.org/2000/svg">

                    <g fill={fill}
                        fillRule="evenodd"
                        transform={`translate(${xaxis} ${yaxis})`}
                    >
                        {editIcon?.icon?.code}
                    </g>
                </svg>
            </div>

        setPreview(svgPreview);
    }, [
        color,
        fill,
        background,
        size,
        strokeWidth,
        transform,
        lineOpacity,
        linecap,
        linejoin,
        xaxis,
        yaxis,
        iconbg,
        iconColor,
        iconRadius,
    ])






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


    const copyJsx = (e) => {
        const jsxCode = `
        <div style={{ "backgroundColor": '${iconColor}', "borderRadius": '${iconRadius}px', "width" : "fit-content"}}>
            <svg style={{ "color": '${color}' }} width='${size}' height='${size}' stroke='${color}' strokeWidth='${strokeWidth}' strokeLinecap='${linecap}' strokeLinejoin='${linejoin}' transform='${transform}' strokeOpacity='${lineOpacity}' viewBox='0 0 24 24'  xmlns="http://www.w3.org/2000/svg"><g fill='${fill}' fillRule="evenodd" transform='translate(${xaxis} ${yaxis})'>${ReactDOMServer.renderToStaticMarkup(editIcon?.icon?.code)}</g></svg>
        </div>`

        setTimeout(() => setJsxPrompt("COPY JSX"), 2000);
        navigator.clipboard.writeText(jsxCode);
        setJsxPrompt("COPIED");
    }


    const copySvg = (e) => {
        const svgCode = `
        <div style="background-color: ${iconColor}; border-radius: ${iconRadius}px; width:fit-content; height:fit-content;">
            <svg style={"color:${color};"}  width='${size}' height='${size}' stroke='${color}' stroke-width='${strokeWidth}' stroke-linecap='${linecap}' stroke-linejoin='${linejoin}' transform='${transform}' stroke-opacity='${lineOpacity}' viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg"><g fill='${fill}' fillRule="evenodd" transform='translate(${xaxis} ${yaxis})'>${ReactDOMServer.renderToStaticMarkup(editIcon?.icon?.code)}</g></svg>
        </div>`

        setTimeout(() => setSvgPrompt("COPY SVG"), 2000);
        navigator.clipboard.writeText(svgCode);
        setSvgPrompt("COPIED");
    }






    return (
        <>
            <div onClick={(e) => e.stopPropagation()}
                className='relative border p-5 gap-5 w-full md:w-[600px]  flex mx-auto bg-white rounded-xl md:border border-gray-300 '>



                {/* viewer */}
                <div className='w-1/2 relative'>

                    {/* canvas */}
                    <div className={`p-5 relative  w-full h-1/2 grid place-items-center grid-cols-1 rounded-lg`}
                        style={{ backgroundColor: background }}>

                        {/* convert to css icon */}
                        <div style={iconbg ? iconBgCode : {}}>

                            <svg className=''
                                style={{ color: color }}
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
                                    transform={`translate(${xaxis} ${yaxis})`}
                                >
                                    {editIcon?.icon?.code}
                                </g>
                            </svg>
                        </div>

                    </div>


                    {/* preview -> adjust not working -> start from here*/}
                    <div className='absolute bottom-0  w-full select-none'>
                        <Adjust iconname={getName(editIcon?.icon?.names[0])}
                            svgPreview={preview}
                            xaxis={xaxis}
                            yaxis={yaxis}
                            setxaxis={setxaxis}
                            setyaxis={setyaxis}
                            icon={iconbg}
                            setIconBg={setIconBg}
                            iconColor={iconColor}
                            setIconColor={setIconColor}
                            iconRadius={iconRadius}
                            setIconRadius={setIconRadius}
                        />
                    </div>
                </div>





                {/* editor---------------------------------------------------------- */}

                <div className='text-gray-800 w-1/2 h-1/2 rounded-xl select-none border p-1'>


                    <div className='w-full mb-1 flex justify-between relative p-2 rounded-lg items-center hover:bg-slate-200'>
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
                        <div className='select-none'>Size</div>
                        <div className='flex justify-center gap-1'>
                            <p className='text-violet-900'>{size}px</p>
                            <svg onClick={() => size > 20 && setSize(size - 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                            <svg onClick={() => size < 200 && setSize(size + 5)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6 p-1 bg-gray-100 rounded">
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


                </div>
            </div>
        </>
    )
}
