import React from 'react'
import '../App.css';
import { iconlist } from './iconData.js';


function Explore () {
  return (
    <div className='flex flex-col lg:mx-36 my-10 md:my-20 md:px-10 space-y-10'>
      
    <div className='text-darkFontGray font-bold md:text-3xl text-2xl flex justify-center md:justify-start'>
        <h1>Explore the marketplace</h1> 
    </div>
    <div className='flex flex-col font-semibold text-blackGray '>
  
        <div className='flex flex-row  justify-around md:px-10 flex-wrap sm:max-w-md md:max-w-full'>

                {/* Icon block start*/}
                {iconlist.map(item => (
                    <div className='flex flex-col items-center md:w-52 lg:w-60 w-40'>
                        <div  div className="icon-class my-5 flex justify-center w-24 flex-col items-center mx-auto">
                            <img src={item.image} className="w-12 h-12 "/>
                        </div>
                         <h2> {item.text}</h2>                 
                    </div>
                ))}                    
        </div>
    </div>
</div>        
)    
  
}

export default Explore;
