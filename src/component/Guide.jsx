import React from "react";
import {guide} from './guideData.js';
import { UilAngleRight } from '@iconscout/react-unicons'

function Guide(){
    return(
        <div className="bg-lightGray py-5 my-10">
        <div className="lg:mx-36 px-10 mt-10 ">
            <div className="flex md:justify-between justify-start">
                <h1 className="text-4xl text-darkFontGray font-bold mb-5">Fiverr guides</h1>
                <div className="hidden md:block">
                <h1 className="flex text-blue-600 font-semibold "> <a href="#">See More Guides </a> <UilAngleRight/></h1>
                </div>
            </div>
            <div className="flex justify-center md:flex-row flex-col">

                {guide.map((item) => (
                    <div className="mx-5 ">
                    <img src={item.photo} alt="" className="mb-2"/>
                    <h1 className="font-bold text-darkGray text-lg">{item.text1}</h1>
                    <h1 className="text-lg text-fontLightGray">{item.text2}</h1>
                    </div>
                ))}

            </div>
        </div>
        </div>
    )
}
export default Guide;