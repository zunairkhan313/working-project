"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className="font-normal text-[18px] leading-8 flex gap-5">
                            <p className="icon-hover">
                                <FaPhoneAlt className="inline mr-2" />
                                <a href="tel:+8618553992709" className="hover:text-green-700 hover:underline">Tel: +92 322 8888520</a>
                            </p>
                            <p className="icon-hover">
                                <MdAttachEmail className="inline mr-2" />
                                <a href="mailto:info@changluuae.com" className="hover:text-green-700 hover:underline">Email: info@changlutools.pk</a>
                            </p>
                        </div>


                    </Nav>
                    <div className="flex justify-center items-center py-1">
                        <a href="https://www.facebook.com/Changlutools.pk" className="hover:text-blue-500" onMouseEnter={() => setHoveredIcon('facebook')} onMouseLeave={() => setHoveredIcon(null)}>
                            <FaFacebook className={hoveredIcon === 'facebook' ? 'text-[#0866FF] mx-2' : 'text-black mx-2'} size={24} />
                        </a>
                        <a href="https://www.tiktok.com/@changlutoolsoffical?is_from_webapp=1&sender_device=pc" className="hover:text-blue-400" onMouseEnter={() => setHoveredIcon('tiktok')} onMouseLeave={() => setHoveredIcon(null)}>
                            <FaTiktok className={hoveredIcon === 'tiktok' ? 'text-[#E62A5D] mx-2' : 'text-black mx-2'} size={24} />
                        </a>
                        <a href="https://www.instagram.com/changlutools.pk/" className="hover:text-pink-500" onMouseEnter={() => setHoveredIcon('instagram')} onMouseLeave={() => setHoveredIcon(null)}>
                            <FaInstagram className={hoveredIcon === 'instagram' ? 'text-[#B606E7] mx-2' : 'text-black mx-2'} size={24} />
                        </a>
                        <a href="https://www.linkedin.com/company/changlu-china/" className="hover:text-blue-700" onMouseEnter={() => setHoveredIcon('linkedin')} onMouseLeave={() => setHoveredIcon(null)}>
                            <FaLinkedin className={hoveredIcon === 'linkedin' ? 'text-[#0A66C2] mx-2' : 'text-black mx-2'} size={24} />
                        </a>
                        <a href="https://youtube.com/@Changlutools?si=tvUfPSKbXWYIiIPq" className="hover:text-blue-700" onMouseEnter={() => setHoveredIcon('youtube')} onMouseLeave={() => setHoveredIcon(null)}>
                            <FaYoutube className={hoveredIcon === 'youtube' ? 'text-[#FF0000] mx-2' : 'text-black mx-2'} size={24} />
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;