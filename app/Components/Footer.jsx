"use client"

import Image from "next/image";
import logo from '../../public/Images/footer-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";



export default function Footer() {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    return (

        <div className="container-fluid bg-slate-100 mt-5">
            <div className="container">
                <br /><br />

                <div className="row ">
                    <div className="col-lg-4 flex flex-wrap justify-center align-center mt-4">
                        <div>

                            <Image
                                style={{ "marginLeft": "55px" }}
                                width={160}
                                src={logo}
                                alt='logo'
                            />
                            <h1 className="text-2xl font-bold text-center">Get in touch with us!</h1>
                            <div className="font-normal text-[18px] mt-3">
                                <p className="icon-hover">
                                    <FaPhoneAlt className="inline mr-2" />
                                    <a href="tel:+8618553992709" className="hover:text-green-700">Tel: +92 322 8888520</a>
                                </p>
                                <p className="icon-hover">
                                    <MdAttachEmail className="inline mr-2" />
                                    <a href="mailto:info@changluuae.com" className="hover:text-green-700">Email: info@changlutools.pk</a>
                                </p>
                            </div>
                            <div className="flex justify-center mt-4">
                                <Link href={"./contact"}>
                                <button className="text-white bg-green-600 text-sm p-3 hover:bg-green-900 rounded">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 flex flex-wrap justify-center align-center">
                        <div>
                            <h3 className="text-center font-bold tracking-widest text-2xl text-green-800 mt-4">EXPLORE</h3>
                            <div className="mt-4">

                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="/">Home</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="/about">About Us</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="/product">Products</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="">News</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="">Knowledge</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="/contact">Contact Us</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 flex flex-wrap justify-center align-center">
                        <div>
                            <h3 className="text-center font-bold tracking-widest text-2xl text-green-800 mt-4">PRODUCTS</h3>
                            <div className="mt-3">

                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="">Decoration Tools</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="">Electronic Tools</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="">Scissor</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="">Cutting Tools</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="">Automotive Tools</a></p>
                                <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="">Pneumatic Tools</a></p>
                                {/* <p className="mt-2 text-lg font-bold text-center hover:text-green-800"><a href="">Clamp Pliers Tools</a></p> */}
                            </div>
                        </div>
                    </div>
                </div><br />

                <div className="flex justify-center align-center bg-green-800 py-3 justify-around">

                    <div className="mt-1">
                        <p className="text-white text-lg">Copyright ©️ 2023 <span className="text-white font-bold">CHANGLU</span> - All Rights Reserved</p>
                    </div>
       
                        <div className="flex justify-center items-center ">
                            <a href="https://www.facebook.com/Changlutools.pk" className="hover:text-blue-500" onMouseEnter={() => setHoveredIcon('facebook')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaFacebook className={hoveredIcon === 'facebook' ? 'text-[#0866FF] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.tiktok.com/@changlutoolsoffical?is_from_webapp=1&sender_device=pc" className="hover:text-blue-400" onMouseEnter={() => setHoveredIcon('tiktok')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaTiktok className={hoveredIcon === 'tiktok' ? 'text-[#E62A5D] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.instagram.com/changlutools.pk/" className="hover:text-pink-500" onMouseEnter={() => setHoveredIcon('instagram')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaInstagram className={hoveredIcon === 'instagram' ? 'text-[#B606E7] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/changlu-china/" className="hover:text-blue-700" onMouseEnter={() => setHoveredIcon('linkedin')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaLinkedin className={hoveredIcon === 'linkedin' ? 'text-[#0A66C2] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://youtube.com/@Changlutools?si=tvUfPSKbXWYIiIPq" className="hover:text-blue-700" onMouseEnter={() => setHoveredIcon('youtube')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaYoutube className={hoveredIcon === 'youtube' ? 'text-[#FF0000] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                        </div>
                 
                </div><br />



            </div>
        </div>
    )
}