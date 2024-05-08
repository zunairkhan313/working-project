"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/Images/White_Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import "../Components/navbar.css"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function NavScrollExample() {
  const [header, setHeader] = useState(false);
  const { data: session } = useSession();

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.addEventListener('scroll', scrollHeader);
    };
  }, []);


  var menu;
  var menu1;
  if (session?.user) {

    menu = (
      <button
        onClick={() => signOut()}
        className="ml-5 font-bold text-green-800 px-3 py-2 bg-white rounded mt-[-8px]"
      >
        Logout
      </button>

    )
  } else {
    menu1 = (
      <>
        <Link href={"/login"}>
          <button className='ml-5 font-bold text-green-800 px-3 py-2 bg-white rounded mt-[-8px]'>Login</button>
        </Link>
      </>


    )
  }
  return (


    <Navbar expand="lg" className='w-[100%] bg-green-900'>
      <Container fluid>
        <Link href={"/"}>
          <Image
            className='ml-5'
            width={100}
            src={logo}
            alt='logo'
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <div id='pagess' className='flex list-none m-5'>
            <Link href={"/"}>
              <p className='ml-5 font-bold text-white hover:underline'>Home</p>
            </Link>
            <Link href={"/about"}>
              <p className='ml-5 font-bold text-white hover:underline'>About Us</p>
            </Link>
            <Link href={"/product"}>
              <p className='ml-5 font-bold text-white hover:underline'>Products</p>
            </Link>
            <Link href={"/contact"}>
              <p className='ml-5 font-bold text-white hover:underline'>Contact Us</p>
            </Link>
            <div>
            {menu1}
            {menu}
              {/* <Link href={"/login"}>
                <button className='ml-5 font-bold text-green-800 px-3 py-2 bg-white rounded mt-[-8px]'>Login</button>
              </Link> */}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;
