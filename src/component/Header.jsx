import React from "react";
import logo from '../img/fiverLogo.png'
import logoDark from '../img/Fiverr-logo-dark.png'
import { UilGlobe, UilBars } from '@iconscout/react-unicons'

function Header(){
    return(

        //header section with logo and nav buttons        
        <div id="header" className="md:bg-darkGray bg-white  md:px-10 lg:px-40 py-5 " >
            
            <div className=" justify-between px-10 flex  items-center text-white">      
                
                <div className="text-black md:hidden">
                  <UilBars/>
                </div>
                <div className="">
                    
                    <img src={logo} alt=""  className="w-24 hidden md:block "/>
                    <img src={logoDark} alt className="w-24 md:hidden"/>
                </div>
                <div className="flex md:space-x-8 whitespace-nowrap items-center">

                    <div className="flex md:space-x-8 items-center">
                    <a href="#" className="text-white font-bold hidden md:block">
                        Fiverr Business 
                    </a>
                    
                    <a href="#" className="text-white font-bold hidden md:block"> 
                        Explore
                    </a>
                    <a href="#" className="text-white font-bold  hidden md:block">
                        <div className="flex flex-row space-x-1 items-center">
                            <UilGlobe size={20}/>  <span>English</span>
                        </div>
                    </a>
                    <a href="#" className="text-white font-bold hidden md:block">
                        US$ USD
                    </a>
                    <a href="#" className="text-white font-bold  hidden md:block">
                        Become a Seller
                    </a>
                    
                    <div className="flex md:space-x-8 items-center">
                    <a href="#" className="text-white font-bold  hidden md:block">
                        Sign in
                    </a>
                    </div>
                    <a href="#" className="text-darkGray md:text-white font-bold md:border p-1.5 px-4 rounded-md hover:bg-lightGreen hover:border-lightGreen transition duration-300 ">
                        Join
                    </a> 

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;