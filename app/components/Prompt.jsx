import React, { useEffect, useState } from 'react'

export const Prompt = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setInterval(() => setShow(false), 3000);
    },[])
    
    return (
        <>
            {
                show &&
                <p className='absolute top-5 right-5 bg-black rounded-lg text-white text-center p-2 px-4' >
                    SVG Code copied
                </p>
            }
        </>
    )
}
