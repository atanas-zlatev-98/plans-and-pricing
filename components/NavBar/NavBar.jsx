'use client'
import React from 'react'
import './navbar.scss';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';
import Link from 'next/link';
const NavBar = () => {
    return (
        <div className='nav-bar d-flex justify-content-between align-items-center'>
            <div className='logo'>
                <Image src={logo} height={60}width={60} alt='logo'></Image>
            </div>

            {/*<div className='links'>
                <Link className='me-3' href={'#'}>Top</Link>
                <Link className='me-3'href={'#'}>Projects</Link>
                <Link className='me-3' href={'#'}>Bottom</Link>
    </div>*/}

        </div>
    )
}

export default NavBar