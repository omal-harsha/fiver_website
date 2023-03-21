import React from "react";
import men from '../img/men.png'

function Banner (){

    return(
        <div>
            <div  >
                <div className="men flex flex-col lg:mx-48 mx-10 my-20 py-32 pl-20">
                    <h1 className="text-5xl text-white font-bold">Suddenly it's all so <span className="italic font-normal font-playfair">doable.</span></h1>
                    <button className="mt-10 w-max py-2 px-6 bg-lightGreen text-white text-lg rounded-md h-12 font-bold hover:bg-superLightGreen" > Join Fiverr
                    </button>
                    
                </div>
                
            </div>
            <hr className="mt-20 text-black h-20"/>
        </div>
    )
}

export default Banner;