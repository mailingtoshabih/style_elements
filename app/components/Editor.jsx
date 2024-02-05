import React, { useState, useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';
import { Adjust } from './Adjust';
import { Panel } from './Panel';


function getName(inputString) {
    const indexOfUnderscore = inputString?.indexOf('_');
    if (indexOfUnderscore !== -1) {
        return inputString?.substring(0, indexOfUnderscore);
    }
    return inputString;
}




export const Editor = ({ editIcon, closeEditor }) => {

    const [yaxis, setyaxis] = useState(3);                                 // tranform translate
    const [xaxis, setxaxis] = useState(3);                                 // tranform translate
    const [fill, setFill] = useState('none');                              // color inside svg
    const [svgsize, setSvgsize] = useState(24);                            // width and height of canvas
    const [iconbg, setIconBg] = useState(false);                           // if true, add icon bg  
    const [preview, setPreview] = useState(null);                          // preview icon's data fetching state 
    const [color, setColor] = useState('#475569');                         // stroke color
    const [iconsize, setIconSize] = useState(100);                         // width and height of canvas
    const [linecap, setLinecap] = useState("round");
    const [iconRadius, setIconRadius] = useState(20);                      // borderradius of icon
    const [linejoin, setLinejoin] = useState('round');
    const [lineOpacity, setLineOpacity] = useState(1);
    const [strokeWidth, setStrokeWidth] = useState(1.3);
    const [iconColor, setIconColor] = useState('#efefef');                  // bg color of entire icon
    const [jsxprompt, setJsxPrompt] = useState("COPY JSX");                 // copy jsx btn text 
    const [svgprompt, setSvgPrompt] = useState("COPY SVG");                 // copy svg btn text
    const [background, setBackground] = useState('#ffffff');




    // console.log(iconColor)

    useEffect(() => {                                           // this useffect send svg code to preview
        const svgPreview =
            <div style={iconbg ? iconBgCode : {}}>
                <svg className=''
                    style={{ color: color && color }}
                    width={iconsize < 60 ? iconsize : 60}
                    height={iconsize < 60 ? iconsize : 60}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap={linecap}
                    strokeLinejoin={linejoin}
                    strokeOpacity={lineOpacity}
                    viewBox={`0 0 ${svgsize} ${svgsize}`}
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
        iconsize,
        strokeWidth,
        lineOpacity,
        linecap,
        linejoin,
        xaxis,
        yaxis,
        iconbg,
        iconColor,
        iconRadius,
        svgsize,
    ])


    const iconBgCode = {
        backgroundColor: iconColor,
        borderRadius: `${iconRadius}%`,
        width: "fit-content"
    }


    const copyJsx = (e) => {
        const jsxCodeWithIcon = `
            <div style={{backgroundColor: "${iconColor}", borderRadius: '${iconRadius}%', width: "fit-content", height: "fit-content" }}>
                <svg style={{ color: '${color}' }} width='${iconsize}' height='${iconsize}' stroke='${color}' strokeWidth='${strokeWidth}' strokeLinecap='${linecap}' strokeLinejoin='${linejoin}'  strokeOpacity='${lineOpacity}' viewBox={'0 0 ${svgsize} ${svgsize}'}  xmlns="http://www.w3.org/2000/svg"><g fill='${fill}' fillRule="evenodd" transform='translate(${xaxis} ${yaxis})'>${ReactDOMServer.renderToStaticMarkup(editIcon?.icon?.code)}</g></svg>
            </div>`

        const jsxCodeWithoutIcon = `
            <div>
                <svg style={{ color: '${color}' }} width='${iconsize}' height='${iconsize}' stroke='${color}' strokeWidth='${strokeWidth}' strokeLinecap='${linecap}' strokeLinejoin='${linejoin}'  strokeOpacity='${lineOpacity}' viewBox={'0 0 ${svgsize} ${svgsize}'}  xmlns="http://www.w3.org/2000/svg"><g fill='${fill}' fillRule="evenodd" transform='translate(${xaxis} ${yaxis})'>${ReactDOMServer.renderToStaticMarkup(editIcon?.icon?.code)}</g></svg>
            </div>`

        setTimeout(() => setJsxPrompt("COPY JSX"), 2000);
        navigator.clipboard.writeText(iconbg ? jsxCodeWithIcon : jsxCodeWithoutIcon);
        setJsxPrompt("COPIED");
    }


    const copySvg = (e) => {
        const svgCodeWithIcon = `
        <div style="background-color: ${iconColor}; border-radius: ${iconRadius}px; width:fit-content; height:fit-content;">
            <svg style="color:${color};"  width='${iconsize}' height='${iconsize}' stroke='${color}' stroke-width='${strokeWidth}' stroke-linecap='${linecap}' stroke-linejoin='${linejoin}'  stroke-opacity='${lineOpacity}' viewBox='0 0 ${svgsize} ${svgsize}'  xmlns="http://www.w3.org/2000/svg"><g fill='${fill}' fillRule="evenodd" transform='translate(${xaxis} ${yaxis})'>${ReactDOMServer.renderToStaticMarkup(editIcon?.icon?.code)}</g></svg>
        </div>`

        const svgCodeWithoutIcon = `
        <div>
            <svg style="color:${color};"  width='${iconsize}' height='${iconsize}' stroke='${color}' stroke-width='${strokeWidth}' stroke-linecap='${linecap}' stroke-linejoin='${linejoin}'  stroke-opacity='${lineOpacity}' viewBox='0 0 ${svgsize} ${svgsize}'  xmlns="http://www.w3.org/2000/svg"><g fill='${fill}' fillRule="evenodd" transform='translate(${xaxis} ${yaxis})'>${ReactDOMServer.renderToStaticMarkup(editIcon?.icon?.code)}</g></svg>
        </div>`

        setTimeout(() => setSvgPrompt("COPY SVG"), 2000);
        navigator.clipboard.writeText(iconbg ? svgCodeWithIcon : svgCodeWithoutIcon);
        setSvgPrompt("COPIED");
    }


    return (
        <div className='relative'>

            <div
                onClick={(e) => e.stopPropagation()}
                className='relative border p-5 gap-5 w-full md:w-[600px]  flex mx-auto bg-white rounded-xl md:border border-gray-300 '>



                {/* viewer */}
                <div className='w-1/2 relative'>
                    {/* canvas */}
                    <div className={`p-5 relative  w-full h-1/2 grid place-items-center grid-cols-1 rounded-lg`}
                        style={{ backgroundColor: background }}>

                        <div style={iconbg ? iconBgCode : {}}>
                            <svg
                                style={{ color: color }}
                                width={iconsize}
                                height={iconsize}
                                stroke={color}
                                strokeWidth={strokeWidth}
                                strokeLinecap={linecap}
                                strokeLinejoin={linejoin}
                                strokeOpacity={lineOpacity}
                                viewBox={`0 0 ${svgsize} ${svgsize}`}
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg">

                                <g
                                    fill={fill}
                                    fillRule="evenodd"
                                    transform={`translate(${xaxis} ${yaxis})`}>         //adjust
                                    {editIcon?.icon?.code}
                                </g>
                            </svg>
                        </div>
                    </div>



                    <div className='absolute bottom-0  w-full select-none'>
                        {/* left svg editor */}
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



                {/* right svg editor */}
                <div className='text-gray-800 w-1/2 h-1/2 rounded-xl select-none border p-1'>
                    <Panel
                        color={color}
                        setColor={setColor}
                        background={background}
                        setBackground={setBackground}
                        fill={fill}
                        setFill={setFill}
                        iconsize={iconsize}
                        setIconsize={setIconSize}
                        svgsize={svgsize}
                        setSvgsize={setSvgsize}
                        strokeWidth={strokeWidth}
                        setStrokeWidth={setStrokeWidth}
                        lineOpacity={lineOpacity}
                        setLineOpacity={setLineOpacity}
                        setLinecap={setLinecap}
                        setLinejoin={setLinejoin}
                        jsxprompt={jsxprompt}
                        svgprompt={svgprompt}
                        copyJsx={copyJsx}
                        copySvg={copySvg} />
                </div>
            </div>

            {/* close button */}

            <div onClick={(e) => closeEditor(e)}
                className='absolute top-1 left-1' style={{ backgroundColor: "#ff4242", borderRadius: '24%', width: "fit-content" }}>
                <svg style={{ color: '#f7f7f7' }} width='44' height='44' stroke='#f7f7f7' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' strokeOpacity='1' viewBox={'0 0 15 15'} xmlns="http://www.w3.org/2000/svg"><g fill='none' fillRule="evenodd" transform='translate(-2.9999999999999996 -2.9999999999999996)'><path d="m7.5 7.5 6 6"></path><path d="m13.5 7.5-6 6"></path></g></svg>
            </div>

        </div>
    )
}
