"use client"

import Image from "next/image"
import product from "../../public/Images/Product_Bg_Image.jpg"
import tools from '../../public/Images/Slider-Img-7.jpg'
import socket from '../../public/Images/Catalog-Img-4.jpg'
import driver from '../../public/Images/Slider-Img-3.jpg'
import wrench from '../../public/Images/wrench-series.jpg'
import pliers from '../../public/Images/Catalog-Img-5.jpg'
// import cutting from '../../public/Images/cutting.jpg'
import triming from '../../public/Images/triming.jpg'
import measuring from '../../public/Images/measuring.jpg'
import "../product/hr.css"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useSession } from "next-auth/react";
import { useState } from "react"


export default function Product() {
    const { data: session } = useSession();
    const [img, setImg] = useState("")
    // const [picture, setPicture] = useState(null);

    // function handleImage(e) {
    //     console.log(e.target.files);
    //     setPicture(URL.createObjectURL(e.target.files[0]));
    // }
    const imagebase64 = async(file) => {
        const reader = new FileReader()
        await reader.readAsDataURL(file)
        const data = new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result)
            reader.onerror = (err) => reject(err)
        })
        return data

    }

    const handleUploadImage = async (e) => {
        const file = e.target.files[0]
        const image = await imagebase64(file)
        setImg(image)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (img) {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ img : img }),
            });
            const data = await res.json()
            console.log(data);
            if(data.success){
                alert(data.message)
            }
        }
    }

    var addButton;

    if (session?.user) {

        addButton = (
            <>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="file-upload" className="custom-file-upload">
                        <span className="font-bold">Add Product</span> <ControlPointIcon />
                    </label>
                    <input id="file-upload" type="file" onChange={handleUploadImage} />
                    <button type="subbmit">submit</button>
                </form>


            </>
        )
    }



    return (
        <>
            <div>

                <div className="container mt-5">


                    <div className=" flex justify-between">
                        <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText ">
                            <h1 className="heading text-black font-bold">Our Products</h1>

                        </div>
                        <div>
                            {addButton}
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="flex flex-wrap justify-around">
                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={tools}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Tools Set</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>

                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={socket}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Sockets Series</h4>
                                <br />

                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={driver}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Screwdriver Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={wrench}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Wrench Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={pliers}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Pliers Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={measuring}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Cutting Tools Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={triming}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-3'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Knocking Trimming Tools</h4>
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={measuring}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Measuring Tools</h4>
                            </div>
                            <br />
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" class="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>

                        </div>
                        <div style={{ height: "100%", width: 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>
                                {/* {picture && ( */}
                                <Image
                                    style={{ height: "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    height={300}
                                    src={img}
                                    alt="tshirts"
                                />
                                {/* )} */}
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Measuring Tools</h4>
                            </div>
                            <br />
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button type="button" className="text-green-800 hover:bg-green-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

