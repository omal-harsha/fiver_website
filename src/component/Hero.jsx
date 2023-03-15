import React from "react";
import dogIMG from '../img/dogIMG.png'
import { UilSearch } from '@iconscout/react-unicons'

function Hero(){
    return(

        <div className=" md:px-10 lg:px-40 bg-darkGray flex flex-col md:flex-row mx-auto md:py-10 pb-10 md:pb-32 items-center">

            <div className="md:w-2/3 md:max-w-2xl flex flex-col mt-16 md:py-10 text-white leading-tight">
                <h1 className="md:text-5xl text-2xl font-bold px-9">Find the perfect <span className="italic font-happyMonkey">freelance</span> services for your business</h1>

                <form className="ml-10 flex-row mt-8 relative hidden md:block">
                
                
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                   <UilSearch className="h-5 w-5 text-gray-400" />
                </span>
                
                    <input className
                    ="rounded-l-md h-12 w-2/3 pl-10 text-black focus:outline-none" placeholder='Try "Building mobile App"'>      
                    </input>
                
                
                    <button className="py-2 px-6 bg-lightGreen text-white text-base rounded-r-md h-12 font-bold hover:bg-superLightGreen" > Search
                    </button>
                
                </form>

                {/* --------------Mobile screen------------- */}

                <form className=" mt-8 px-6 space-y-3 relative md:hidden">
                
                <div className="flex items-center justify-center">
                    <span className="absolute inset-y-0 -top-14 left-6 flex items-center pl-3">
                   <UilSearch className="h-5 w-5 text-gray-400" />
                </span>
                
                    <input className="rounded-md w-full h-12 pl-10 text-black focus:outline-none" placeholder='Try "Building mobile App"'>      
                    </input>
                </div>
                
                    <button className=" py-2 px-6 w-full bg-lightGreen text-white text-base rounded-md h-12 font-bold hover:bg-superLightGreen" > Search
                    </button>
                
                </form>



                <div className="ml-10 flex-row text-white font-bold mt-4 text-sm items-center hidden md:block">
                
                    <div className="flex flex-row space-x-3 items-center">
                    <h3>Popular:</h3>
                    <a href="#" className="border rounded-full px-2 py-1 hover:text-darkGray hover:bg-white duration-300"> Website Design</a>
                    <a href="#" className="border rounded-full px-2 py-1 hover:text-darkGray hover:bg-white duration-300"> WordPress</a>
                    <a href="#" className="border rounded-full px-2 py-1 hover:text-darkGray hover:bg-white duration-300"> Logo Design</a>
                    <a href="#" className="border rounded-full px-2 py-1 hover:text-darkGray hover:bg-white duration-300"> AI Services</a>
                    </div>
                </div>
            </div>
            <div className=" flex mx-auto justify-center w-1/3 items-center">
                <img src={dogIMG} className=" rounded-xl w-80 h-96 hidden md:block"></img>
            </div>

        </div>
    )
}

export default Hero;