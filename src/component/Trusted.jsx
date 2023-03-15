import React from "react";
import Meta from '../img/meta-logo.png'
import Google from '../img/google-logo.png'
import Netflix from '../img/netflix-logo.png'
import PG from '../img/P&G-logo.png'
import Paypal from '../img/paypal-logo.png'


function Trusted() {
    return(

        <div className=" bg-lightGray h-16 md:h-24 justify-center items-center flex flex-row md:space-x-10 space-x-5 max-w-full">
            <h1 className="text-FontGray font-bold text-lg hidden md:block">Truested by:</h1>
            <img src={Meta} className="md:w-24 w-16"/>
            <img src={Google} className="md:w-24 w-16"/>
            <img src={Netflix} className="md:w-24 w-16"/>
            <img src={PG} className="md:w-24 w-16"/>
            <img src={Paypal} className="md:w-24 w-16 hidden md:block"/>
        </div>
    )
}

export default Trusted;