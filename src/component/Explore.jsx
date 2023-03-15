import React from 'react'
import '../App.css';

import img1 from '../img/icon/graphics-design.svg'
import img2 from '../img/icon/online-marketing.svg'
import img3 from '../img/icon/writing-translation.svg'
import img4 from '../img/icon/video-animation.svg'
import img5 from '../img/icon/music-audio.svg'
import img6 from '../img/icon/programming.svg'
import img7 from '../img/icon/business.svg'
import img8 from '../img/icon/lifestyle.svg'
import img9 from '../img/icon/data.svg'
import img10 from '../img/icon/photography.svg'


function Explore () {
  return (
    <div className='flex flex-col lg:mx-36 my-10 md:my-20 md:px-10 space-y-10'>
      
        <div className='text-darkFontGray font-bold md:text-3xl text-2xl flex justify-center md:justify-start'>
               <h1>Explore the marketplace</h1> 
        </div>
        <div className='flex flex-col font-semibold text-blackGray '>
          
            <div className='flex flex-row  justify-around md:px-10 flex-wrap sm:max-w-md md:max-w-full'>

              {/* Icon block start*/}
                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img1} className="w-12 h-12 "/>
                   </div>
                      <h2>Graphics & Design </h2>
                 
                </div>

                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img2} className="w-12 h-12 "/>
                   </div>
                      <h2>Digital Marketing </h2>
                 
                </div>

                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img3} className="w-12 h-12 "/>
                   </div>
                      <h2>Writing & Translation </h2>
                 
                </div>

                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img4} className="w-12 h-12 "/>
                   </div>
                      <h2>Video & Animation </h2>
                 
                </div>

                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img5} className="w-12 h-12 "/>
                   </div>
                      <h2>Music & Audio </h2>
                 
                </div>

            

                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img6} className="w-12 h-12 "/>
                    </div>
                      <h2>Programming & Tech </h2>
                </div>

                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img7} className="w-12 h-12 "/>
                    </div>
                      <h2>Business </h2>
                </div>

                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img8} className="w-12 h-12 "/>
                    </div>
                      <h2>Lifestyle </h2>
                </div>

                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img9} className="w-12 h-12 "/>
                    </div>
                      <h2>Data </h2>
                </div>

                <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                    <div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                      <img src={img10} className="w-12 h-12 "/>
                    </div>
                      <h2>Photography </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore;
