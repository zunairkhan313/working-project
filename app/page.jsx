"use client"
import 'swiper/css';
import Image from "next/image";
import CarouselPage from "./Components/Silder";
import image1 from '../public/Images/About_Chunglu_Img.jpg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./globals.css";
import video from '../public/Images/AboutUsVideo1.gif'
import AboutCountUp from "./Components/Counter";
import map from "../public/Images/Chunglu-Map.png";
import CardSliderCarousel from "./Components/CardSlider";
import "./Components/navbar.css";
import React,{ useState } from 'react';
import Top from './Components/TopButton';



export default function Home() {
  
  return (
    <div className="bg-white">
      <div>
        <CarouselPage />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <Image
              style={{ "height": "570px" }}
              className="img-fluid"
              src={image1}
              alt='logo'
            />
          </div>
          <div className="col-lg-6">
            <h1 className="text-lg font-bold text-green-800 tracking-wider">COMPANY PROFILE</h1><br />
            <h3 className="text-2xl font-bold text-green-800"><span className="text-black">ABOUT</span> CHANGLU</h3><br />
            <p className="text-lg">Explore Excellence with Changlu Tools a distinguished industrial enterprise specializing in developing, producing, and selling top-quality tools. With extensive facilities covering 30,000 square meters and a range of 16 categories and over 5,000 specifications, our versatile tools are trusted across machinery, petroleum, chemical, electric power, and automobile manufacturing industries. Recognized for quality and innovation, Changlu</p><br />
            <h3 className="text-2xl font-bold text-green-800">CHANGLU <span className="text-black">Offers:</span></h3> <br />
            <div className="flex">
              <CheckCircleIcon className="text-green-800" />
              <p className="text-lg font-bold ml-4">Affordable Price</p>
            </div>
            <div className="flex">
              <CheckCircleIcon className="text-green-800" />
              <p className="text-lg font-bold ml-4">Promotion Support</p>
            </div>
            <div className="flex">
              <CheckCircleIcon className="text-green-800" />
              <p className="text-lg font-bold ml-4">Ready stock</p>
            </div>
            <div className="flex">
              <CheckCircleIcon className="text-green-800" />
              <p className="text-lg font-bold ml-4">Long-Testing Quality</p>
            </div>
            <br />
            <button className="text-white bg-green-600 text-sm p-3 rounded-[10px] hover:bg-green-900">More Details</button>
            <br /><br /><br />
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-12 relative lg:h-2/3 md:h-2/3">
            <Image
              style={{ "height": "100%", "width": "100%" }}
              className="img-fluid"
              src={video}
              alt='drill'
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <div className="lg:text-6xl font-extrabold tracking-wider bgVideoText absolute left-[3rem]">
                <h1 className="heading text-[#006600]">21V PRODUCTS</h1>
                <h1 className="title text-[#181818]">BETTER CHOICE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container flex m-auto">
        <div className="counter mt-2">
          <AboutCountUp />
        </div>
      </div> */}
      <div className="container col-lg-12 relative lg:h-2/3 md:h-2/3 mt-5">
      <div className="counter absolute left-[24%]"> 
          <AboutCountUp />
        </div>
        <div className="row">
          <div className="mt-[100px] col-lg-12">
            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/efOxbYgN0U0?si=AgnGcV2q_nHKlnMX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            <div className=" mt-5 flex  align-center  gap-4">
              <h1 className="text-2xl font-bold mt-2 italic">Videos will Let You Know More About Us!</h1>
              <a href="https://www.youtube.com/@Changlutools" className="text-white bg-green-600 text-sm p-3 hover:bg-green-900 rounded">More Videos</a>
            </div>
          </div>
          <div id='sideb0x' className=" top-[30%] left-[70%] inset-7 absolute text-center bg-white w-[375px] rounded-s-md">
            <br /><br />
            <div className=" justify-center align-center ">
              <h1 className="text-center text-2xl font-bold">&quot;<span className="text-green-800">Changlu</span> Tools Pakistan is committed to scientific management, high-quality standards, honesty, and ongoing innovation.&quot;</h1>
            </div>
            <div className=" justify-center align-center">
              <p className="text-center font-bold italic ">Our focus is on efficient operations, delivering superior tools, maintaining integrity, and advancing industry standards. We are dedicated to excellence, ensuring our customers receive top-tier tools and building lasting partnerships.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container mt-5">
        <h1 className="font-bold text-3xl text-center italic">OUR <span className="text-green-800">GLOBAL</span> NETWORK</h1>
        <div className="mt-5">
          <Image
            width={"100%"}
            src={map}
            alt="map"
          />
        </div>
      </div>
      <div className="container justify-center align-center m-auto w-[100%] text-center mt-5">
        <h1 className="font-bold text-4xl text-center italic"><span className="text-green-800">CHANGLU</span> HAS QUALITY PRODUCTS</h1>
      </div>
      <div className="container justify-center align-center m-auto w-[100%] text-center mt-3">
        <p className="text-black text-lg text-center ">We&apos;re mainly deals in 16 categories and more than 5,000 specifications such as changlu brand sets of tools, socket, socket accessories, wrenches, screwdrivers, fastening, shearing, clamps, knocking, renovation, welding, electronics, measurement, automobile repair tools, etc.</p><br />
        <a href="./product" className="text-white bg-green-600 text-sm p-3 hover:bg-green-900 rounded">More products</a>
      </div>
      <div className="container mt-5">
        <h1 className="font-bold text-3xl text-center italic">OUR <span className="text-green-800">PRODUCTS</span> CATEGORY</h1>
        <div className="flex flex-wrap justify-around m-auto">
          <div className="mt-5 w-[80%] h-[100%]">
            <CardSliderCarousel />
          </div>
        </div>
      </div>
    
    </div>
  );
}
