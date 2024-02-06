import React from 'react'

export const Hero = () => {
    return (
        <div className='p-5 md:flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-yellow-200 via-yellow-100 to-blue-50'>
            {/* FEF08A */}
            <div className='w-full md:order-1 md:w-1/4 grid place-items-center p-9 md:mr-12 '>
                <svg className='shadow-2xl shadow-[#FF4500]  rounded-[55px]'
                    width={200} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="300" rx="80" fill="#070404" />
                    <rect x="125" y="21" width="50" height="260" rx="22" fill="#FF4500" />
                    <rect x="20.5473" y="176.843" width="50" height="260" rx="22" transform="rotate(-90.6272 20.5473 176.843)" fill="#FF4500" />
                    <rect x="262.497" y="225.522" width="50" height="266" rx="22" transform="rotate(134.223 262.497 225.522)" fill="black" />
                    <g filter="url(#filter0_d_0_1)">
                        <rect x="234.533" y="41" width="50" height="273.451" rx="22" transform="rotate(47.7871 234.533 41)" fill="#FEF08A" />
                    </g>
                    <defs>
                        <filter id="filter0_d_0_1" x="37.0757" y="50.0757" width="225.976" height="210.61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
            {/* shadow-2xl shadow-[#FF4500] */}

            <div className='w-full text-center md:text-start md:w-3/4'>
                <div className='leading-relaxed text-slate-800 text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'>
                    <p className='my-2 text-slate-900'>Style SVGs</p>
                    {/* <span className='text-gray-900'>SVG Icons</span><br /> */}
                    <p className='my-2 text-[#FF4500]'>Without Code</p>
                </div>
            </div>

        </div>
    )
}
