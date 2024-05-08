'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Components/style.css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import tools from '../../public/Images/Slider-Img-7.jpg'
import socket from '../../public/Images/Catalog-Img-4.jpg'
import driver from '../../public/Images/Slider-Img-3.jpg'
import wrench from '../../public/Images/wrench-series.jpg'
import pliers from '../../public/Images/Catalog-Img-5.jpg'
// import cutting from '../../public/Images/cutting.jpg'
import triming from '../../public/Images/triming.jpg'
import measuring from '../../public/Images/measuring.jpg'
import Link from 'next/link';


export default function App() {
  return (
    <>
      <Swiper

        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={-740}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide>
          <Link href={"/product"}>
            <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
              <div className='flex flex-wrap justify-around'>

                <Image
                  style={{ "height": "250px" }}
                  className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                  width={200}
                  src={tools}
                  alt="tshirts"
                />
              </div>
              <div className='mt-4'>
                <h4 className='text-lg text-center font-bold tracking-widest'>Tools Set</h4>
              </div>

            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>
            <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
              <div className='flex flex-wrap justify-around'>

                <Image
                  style={{ "height": "250px" }}
                  className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                  width={200}
                  src={socket}
                  alt="tshirts"
                />
              </div>
              <div className='mt-4'>
                <h4 className='text-lg text-center font-bold tracking-widest'>Sockets Series</h4>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>
            <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
              <div className='flex flex-wrap justify-around'>

                <Image
                  style={{ "height": "250px" }}
                  className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                  width={200}
                  src={driver}
                  alt="tshirts"
                />
              </div>
              <div className='mt-2'>
                <h4 className='text-lg text-center font-bold tracking-widest leading-6'>Screwdriver Series</h4>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>
            <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
              <div className='flex flex-wrap justify-around'>

                <Image
                  style={{ "height": "250px" }}
                  className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                  width={200}
                  src={tools}
                  alt="tshirts"
                />
              </div>
              <div className='mt-4'>
                <h4 className='text-lg text-center font-bold tracking-widest'>Tools Set</h4>
              </div>

            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>
            <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
              <div className='flex flex-wrap justify-around'>

                <Image
                  style={{ "height": "250px" }}
                  className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                  width={200}
                  src={socket}
                  alt="tshirts"
                />
              </div>
              <div className='mt-4'>
                <h4 className='text-lg text-center font-bold tracking-widest'>Sockets Series</h4>

              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>
            <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
              <div className='flex flex-wrap justify-around'>

                <Image
                  style={{ "height": "250px" }}
                  className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                  width={200}
                  src={driver}
                  alt="tshirts"
                />
              </div>
              <div className='mt-2'>
                <h4 className='text-lg text-center font-bold tracking-widest leading-6'>Screwdriver Series</h4>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>
            <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
              <div className='flex flex-wrap justify-around'>

                <Image
                  style={{ "height": "250px" }}
                  className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                  width={200}
                  src={wrench}
                  alt="tshirts"
                />
              </div>
              <div className='mt-4'>
                <h4 className='text-lg text-center font-bold tracking-widest'>Wrench Series</h4>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>
            <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
              <div className='flex flex-wrap justify-around'>

                <Image
                  style={{ "height": "250px" }}
                  className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                  width={200}
                  src={pliers}
                  alt="tshirts"
                />
              </div>
              <div className='mt-4'>
                <h4 className='text-lg text-center font-bold tracking-widest'>Pliers Series</h4>
              </div>
            </div>

          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>
          <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                width={200}
                src={driver}
                alt="tshirts"
                />
            </div>
            <div className='mt-4'>
              <h4 className='text-lg text-center font-bold tracking-widest'>Cutting Tools</h4>
            </div>
          </div>

                </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href={"/product"}>
          <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                width={200}
                src={measuring}
                alt="tshirts"
              />
            </div>
            <div className='mt-2'>
              <h4 className='text-lg text-center font-bold tracking-widest leading-6'>Measuring Tools</h4>
            </div>
          </div>

        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href={"/product"}>
          <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                width={200}
                src={triming}
                alt="tshirts"
              />
            </div>
            <div className='mt-4'>
              <h4 className='text-lg text-center font-bold tracking-widest'>Trimming Tools</h4>
            </div>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                width={200}
                src={tools}
                alt="tshirts"
              />
            </div>
            <div className='mt-4'>
              <h4 className='text-lg text-center font-bold tracking-widest'>Tools Set</h4>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                width={200}
                src={socket}
                alt="tshirts"
              />
            </div>
            <div className='mt-4'>
              <h4 className='text-lg text-center font-bold tracking-widest'>Sockets Series</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ "height": "100%", "width": 200 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover hover:opacity-70 hover:cursor-grab'
                width={200}
                src={driver}
                alt="tshirts"
              />
            </div>
            <div className='mt-2'>
              <h4 className='text-lg text-center font-bold tracking-widest leading-6'>Screwdriver Series</h4>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
