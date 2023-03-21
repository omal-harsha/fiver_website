import React from "react";
import { UilCheckCircle } from '@iconscout/react-unicons'
import fiverBusiness from '../img/fiverBusiness.png'

function Business() {
    return(
        <div className="bg-darkBlue my-20 py-20 text-white ">
            <div className="flex md:flex-row flex-col  lg:ml-36 px-8 ">
                <div className=" flex flex-col md:w-max">
                <div className=" flex flex-col  pl-2  space-y-5 pb-10">
                        <div className="flex items-center">
                        <img src={fiverBusiness} className="w-52"/>
                        <h3 className="text-xs font-semibold bg-purpleBg px-1.5 py-0.4 rounded-full ml-2">NEW</h3>
                        </div>
                        <h1 className="text-3xl font-bold w-72">A business solution designed for teams</h1>
                        <p className="text-xl font-normal">Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                        {/* Service list */}
                        <div className="space-y-5 mb-10 md:text-xl text-lg ">

                            <div className="flex flex-row space-x-2 items-center ">
                                <UilCheckCircle className="text-darkFontGray"/>
                                <h2>Connect to freelancers with proven business experience</h2>
                            </div>
                            <div className="flex flex-row space-x-2 ">
                                <UilCheckCircle className="text-darkFontGray"/>
                                <h2>Get matched with the perfect talent by a customer success manager</h2>
                            </div>
                            <div className="flex flex-row space-x-2 mb-10">
                                <UilCheckCircle className="text-darkFontGray"/>
                                <h2>Manage teamwork and boost productivity with one powerful workspace</h2>
                            </div>
                            <button className="mt-40 py-2 px-6 bg-lightGreen text-white text-lg rounded-md h-12 font-bold hover:bg-superLightGreen" > Explore Fiverr Business
                    </button>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="max-w-3xl"> 
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"/>

                </div>

            </div>
        </div>
    )
}

export default Business;