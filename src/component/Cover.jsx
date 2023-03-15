import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { images } from './data.js';
import { UilArrowCircleLeft,UilArrowCircleRight } from '@iconscout/react-unicons'

function Cover(){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        infinite: true,
        //nextArrow: true,  <UilArrowCircleRight/>,
        //prevArrow: true, <UilArrowCircleLeft/>,
        
        responsive: [
          {
            breakpoint: 1360,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
              
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
        
      <div className="flex flex-col items-start md:py-20 py-10">
        <h1 className="md:ml-10 lg:ml-48 ml-10 text-3xl text-darkFontGray mb-10 font-bold w-15">Popular professional services</h1>
        <div className="App mx-auto flex ">
          
            <Slider {...settings}>
            {images.map( (image) => (

              /*<div>
                 <img src={image.image} alt="Image" className="w-full mx-auto h-80" />
              </div>*/

                <div className="relative justify-center mx-auto ">
                <div href="#" className="bg-white rounded-md overflow-hidden shadow-md hover:opacity-90 duration-300">
                  <img src={image.image} alt="Image" className="w-max h-max" />
                  <div className="absolute bottom-0 left-5 -top-60 text-white flex flex-col items-start justify-center">
                    <a href="#" className="text-sm font-semibold">{image.text}</a>
                    <a href="#" className="text-2xl font-bold">{image.text2}</a>
                  </div>
                </div>
              </div>


            ))}
            </Slider>
            

        </div>
        </div>
    )
}

export default Cover;