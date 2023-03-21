import React from "react";
import logomaker  from '../img/logo/logoMaker.png'

function LogoAd(){
    return(
        <div>
            <div className="lg:mx-48 md:mx-9 md:px-16 bg-lightBlue text-white">
                <div className="flex myComponent">
                    <div className="flex flex-col py-10 space-y-2 ">
                        <img src={logomaker} alt="logo" className="w-48 mb-2"/>
                        <h1 className="text-4xl font-bold">Make an incredible logo</h1>
                        <h2 className="italic text-3xl font-semibold">in minutes</h2>
                        <h5 className="text-lg ">Pre-designed by top talent. Just add your touch.</h5>
                        <button className="bg-white text-lightBlue w-max px-6 py-2 font-bold rounded-md hover:bg-hoverGray">Try Fiverr Logo Maker</button>
                    </div>
                    
                
                </div>
            </div>
        </div>
    )
}
export default LogoAd;