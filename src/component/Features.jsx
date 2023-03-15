import React from "react";
import { UilCheckCircle } from '@iconscout/react-unicons'
import ReactPlayer from 'react-player'

function Features(){
    return(
        <div className="bg-greenWhite">
            <div className="flex md:flex-row flex-col py-20 px-8 md:items-center justify-center lg:mx-36">
                {/* Left Section */}
                <div className="md:w-1/2 flex flex-col md:pr-52 pl-2 text-darkFontGray space-y-5 pb-10">
                        <h1 className="text-3xl font-bold">A whole world of freelance talent at your fingertips</h1>

                        {/* Service list */}
                        <div className="space-y-2 mb-10">
                            <div className="flex flex-row text-xl font-bold items-center space-x-1">
                                <UilCheckCircle/>
                                <h2>The best for every budget</h2>
                            </div>
                            <p className="text-xl text-fontLightGray font-normal">Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                        </div>

                        <div className="space-y-2 mb-10">
                            <div className="flex flex-row text-xl font-bold items-center space-x-1">
                                <UilCheckCircle/>
                                <h2>Quality work done quickly</h2>
                            </div>
                            <p className="text-xl text-fontLightGray font-normal">Find the right freelancer to begin working on your project within minutes.</p>
                        </div>

                        <div className="space-y-2 mb-10">
                            <div className="flex flex-row text-xl font-bold items-center space-x-1">
                                <UilCheckCircle/>
                                <h2>Protected payments, every time</h2>
                            </div>
                            <p className="text-xl text-fontLightGray font-normal">Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                        </div>

                        <div className="space-y-2 mb-10">
                            <div className="flex flex-row text-xl font-bold items-center space-x-1">
                                <UilCheckCircle/>
                                <h2>24/7 support</h2>
                            </div>
                            <p className="text-xl text-fontLightGray font-normal">Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                        </div>
                </div>

                {/* Right Section */}

                {/* Large screen */}
                <div className="w-1/2 hidden md:block">
                <ReactPlayer url='https://www.youtube.com/watch?v=PfYvrmGw2nI&ab_channel=Fiverr'/>
                </div>

                {/* mobile screen */}
                <div className="md:hidden mx-auto">
                    <ReactPlayer url='https://www.youtube.com/watch?v=PfYvrmGw2nI&ab_channel=Fiverr' width="100%" height="100%"/>
                </div>

            </div>
        </div>
    )
}

export default Features;