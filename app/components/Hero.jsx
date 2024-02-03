import React from 'react'

export const Hero = () => {
    return (
        <div className='p-5 md:flex justify-between'>

            <div className='w-full text-center md:text-start md:w-3/4'>
                <p className=' text-pretty text-slate-800 text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'>
                    <span className='text-teal-500'>Style </span><br />
                    <span className='text-black-500'> Elements</span><br />
                    <span className='text-purple-900'>Hassle-</span>
                    <span className='text-purple-900'>Free</span>
                </p>
            </div>

            <div className='w-full md:w-1/4 grid place-items-center p-9 m-2'>
                <svg className=' shadow-2xl shadow-violet-900 rounded-[55px]' width={200} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="300" rx="80" fill="#070404" />
                    <rect x="125" y="21" width="50" height="260" rx="22" fill="#FF5252" />
                    <rect x="20.5473" y="176.843" width="50" height="260" rx="22" transform="rotate(-90.6272 20.5473 176.843)" fill="#FF5252" />
                    <rect x="262.497" y="225.522" width="50" height="266" rx="22" transform="rotate(134.223 262.497 225.522)" fill="#8E8CFE" />
                    <g filter="url(#filter0_d_0_1)">
                        <rect x="234.533" y="41" width="50" height="273.451" rx="22" transform="rotate(47.7871 234.533 41)" fill="#8CFE97" />
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

        </div>
    )
}