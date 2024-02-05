'use client'

import React, { useState, useEffect } from 'react'
import { iconsdb } from "../components/Icons"
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Editor } from '../components/Editor'
import { Each } from '../components/Each'
import { Mobileditor } from '../components/Mobileeditor'





const Homepage = () => {

  const [search, setSearch] = useState('');
  const filteredIcons = iconsdb.filter(icon => {
    return icon.names.some(name =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  });


  return (
    <div className='relative'>
      <Navbar />
      <Hero />


      <div>
        <div className='p-5 sticky top-0 backdrop-blur-xl'>
          <input className='px-5 text-xl w-full h-14 md:h-20 rounded-xl outline-none text-slate-600 border-none font-semibold bg-gradient-to-r from-blue-200 via-violet-200 to-green-200'
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder='Eg: Phone' />
        </div>
        <div className='p-5 flex flex-wrap min-h-[500px]'>
          {
            filteredIcons?.map((icon, index) => (
              <Each
                key={index}
                icon={icon}
              />
            ))
          }
        </div>
      </div>





    </div>
  )
}

export default Homepage;

