import React from 'react';
import { Roboto } from 'next/font/google';
import { IoIosCloseCircleOutline, IoMdCheckmarkCircleOutline } from 'react-icons/io'
import './TypeTwo.scss';
const roboto = Roboto({
    weight: '300',
    subsets: ['latin'],
})

const TypeTwo = () => {
    
    return (
        <div className='type-main-two pt-2'>
            <div className='plans pb-5'>
                <h1 className='text-left plans-price'>Plans & Prices 2</h1>
            </div>

            <div className={`type-layout ${roboto.className}`}>

                <div className='planTwo'>
                    <div className='header'>
                        <h3 className='text-center m-0 text-white'>Basic</h3>
                    </div>
                    <div className='separator-bottom pt-3'></div>
                    <div className='plans-text-two'>

                        <div className='plans-text-container pb-4'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>Sample Text Here</p>
                        </div>

                        <div className='plans-text-container pb-4'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>Even More Text</p>
                        </div>

                        <div className='plans-text-container pb-4'>
                            <IoIosCloseCircleOutline className='plans-text-icon red'></IoIosCloseCircleOutline>
                            <p className='m-0 plans-text-p'>More Text Please</p>

                        </div>

                        <div className='plans-text-container pb-4'>
                            <IoIosCloseCircleOutline className='plans-text-icon red'></IoIosCloseCircleOutline>
                            <p className='m-0 plans-text-p'>Some Other Text</p>
                        </div>

                        <div className='plans-text-container'>
                            <IoIosCloseCircleOutline className='plans-text-icon red'></IoIosCloseCircleOutline>
                            <p className='m-0 plans-text-p'>Yes More Text</p>
                        </div>

                    </div>
                    <div className='separator-bottom'></div>
                    <div className='price'>
                        <h1 className='p-3 m-0 green'>$5.99</h1>
                    </div>
                </div>

                <div className='planTwo'>
                    <div className='header-starter'>
                        <h3 className='text-center m-0 text-white'>Starter</h3>
                    </div>
                    <div className='separator-bottom pt-3'></div>
                    <div className='plans-text-two'>

                        <div className='plans-text-container pb-4'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>Sample Text Here</p>
                        </div>

                        <div className='plans-text-container pb-4'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>Even More Text</p>
                        </div>

                        <div className='plans-text-container pb-4'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>More Text Please</p>
                        </div>

                        <div className='plans-text-container pb-4'>
                            <IoIosCloseCircleOutline className='plans-text-icon red'></IoIosCloseCircleOutline>
                            <p className='m-0 plans-text-p'>Some Other Text</p>
                        </div>

                        <div className='plans-text-container'>
                            <IoIosCloseCircleOutline className='plans-text-icon red'></IoIosCloseCircleOutline>
                            <p className='m-0 plans-text-p'>Yes More Text</p>
                        </div>

                    </div>
                    <div className='separator-bottom'></div>
                    <div className='price'>
                        <h1 className='p-3 m-0 blue'>$10.99</h1>
                    </div>
                </div>

                <div className='planTwo'>
                    <div className='header-pro'>
                        <h3 className='text-center m-0 text-white'>Pro</h3>
                    </div>
                    <div className='separator-bottom pt-3'></div>
                    <div className='plans-text-two'>

                        <div className='plans-text-container pb-4'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>Sample Text Here</p>
                        </div>

                        <div className='plans-text-container pb-4'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>Even More Text</p>
                        </div>

                        <div className='plans-text-container pb-4'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>More Text Please</p>
                        </div>

                        <div className='plans-text-container pb-4'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>Some Other Text</p>
                        </div>

                        <div className='plans-text-container'>
                            <IoMdCheckmarkCircleOutline className='plans-text-icon green'></IoMdCheckmarkCircleOutline>
                            <p className='m-0 plans-text-p'>Yes More Text</p>
                        </div>

                    </div>
                    <div className='separator-bottom'></div>
                    <div className='price'>
                        <h1 className='p-3 m-0 purple'>$15.99</h1>
                    </div>
                </div>
                


            </div>
        </div>
    )
}

export default TypeTwo