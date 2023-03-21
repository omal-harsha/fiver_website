import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import ReactPlayer from 'react-player'
import { teamData } from "./teamData";


function Team(){

    const settings = {
      arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        
        
        //nextArrow: true,  <UilArrowCircleRight/>,
        //prevArrow: true, <UilArrowCircleLeft/>,
        
        responsive: [
          {
            breakpoint: 1360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 3
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: true,
              
              
            }
          }
        ]
      };

    return(
      <div className="hidden md:block">
        <div className="md:px-10  flex justify-center mb-16" >
            <Slider id="my-slider" className="my-slick-slider" {...settings}>

            
            {teamData.map((item) =>(

                <div className="flex md:flex-row flex-col">
                    
                <div className="flex md:flex-row flex-col">

                    {/* medium and lage screen */}
                    <ReactPlayer url={item.video} className="flex-1 hidden md:block"/>

                    {/* Mobile screen */}
                        <ReactPlayer url={item.video} className="flex-1 md:hidden" width="100%" height="100%"/>                                                
                        <div className="max-w-xl ml-16 pt-10">
                          <div className="flex items-center">
                          <h1 className="text-xl text-fontLightGray font-normal mr-2">{item.name}</h1> <span className="mx-2 text-fontLightGray font-thin">|</span>
                          <img src={item.logo} className="pt-1"/>
                          </div>
                        
                            <h1 className="text-textGreen italic font-playfair text-3xl pt-10">{item.text}</h1>
                        </div>
                </div>
            
        </div>
        
        
))}

                
            </Slider>
        </div>
        </div>
    )
}

export default Team;