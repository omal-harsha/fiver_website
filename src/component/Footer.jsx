import React from "react";
import logo from '../img/fiverGrayLogo.png'
import { UilGlobe, UilFacebook, UilInstagram, UilLinkedin, UilTwitter} from '@iconscout/react-unicons'

function Footer (){
    return(
        <div>
            <div className="flex md:justify-between justify-center md:flex-row flex-col lg:mx-36 px-10 mb-10">
                <div className="flex items-center md:flex-row flex-col text-FontGray">
                    <img src={logo} alt="" className="w-20"/>
                    <h1 className="ml-5 pt-1 text-FontGray"> &copy; Fiverr International Ltd. 2023</h1>
                </div>
                <div className="flex text-fontLightGray space-x-5 items-center md:flex-row flex-col">
                    <div className="flex space-x-5 items-center">
                    <UilTwitter/>
                    <UilFacebook/>
                    <UilLinkedin/>
                    <UilInstagram/>
                    </div>
                    <div className="flex space-x-5 items-center">
                    <h1 className="flex items-center space-x-1"> <UilGlobe size={20}/>  <span className="font-bold">English</span></h1>
                    <h1 className="font-bold">US$ USD</h1>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
export default Footer;