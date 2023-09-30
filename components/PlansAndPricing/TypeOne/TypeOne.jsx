import React from 'react'
import './TypeOne.scss';
import { Roboto } from 'next/font/google';
import { BsCheck2All } from 'react-icons/bs';
import { GoShieldCheck } from 'react-icons/go'

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
})

const TypeOne = () => {
    return (
        <div className='type-main pt-2'>

            <div className='plans'>
                <h1 className='text-left plans-price'>Plans & Prices 1</h1>
            </div>

            <div className={`type-layout ${roboto.className}`}>
                <div className='offer-one m-4'>

                    <div className='text-container'>
                        <h2 className='text-center p-1 pt-3 roboto'>Starter</h2>
                        <h1 className='text-center'>$5 <span className='price-month'>month.</span></h1>
                        <div className='separator pt-3'></div>
                    </div>

                    <div className='offers-container p-5 pt-1 pb-1'>
                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> 5 Websites</p>
                        </div>
                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> 10GB Space</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> 10,000 Visits Monthly</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> Unlimited Traffic</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'>  5 Databases</p>
                        </div>

                        <div className='quiet-text mt-3'>
                            <p>Free SSL</p>
                            <p>Free CDN</p>
                            <p>Free Migration</p>
                        </div>


                    </div>

                    <div className='button-container m-3'>
                        <button type='button' className='button-subt'>Select</button>
                    </div>

                </div>

                <div className='offer-two m-4'>

                    <div className='text-container'>
                        <h2 className='text-center p-1 pt-3 roboto'>Pro.</h2>
                        <h1 className='text-center'>$25 <span className='price-month'>month.</span></h1>
                        <div className='separator pt-3'></div>
                    </div>

                    <div className='offers-container p-5 pt-1 pb-1'>
                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> Unlimited Websites</p>
                        </div>
                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> 50GB Space</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> 100,000 Visits Monthly</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> Unlimited Traffic</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'>  Unlimited Databases</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> Ecommerce Enabled</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> Daily Backup</p>
                        </div>

                        <div className='quiet-text mt-3'>
                            <p>Free SSL</p>
                            <p>Free CDN</p>
                            <p>Free Email</p>
                            <p>Enhanced Security</p>
                        </div>


                    </div>

                    <div className='button-container m-3'>
                        <button type='button' className='button-subt'>Select</button>
                    </div>

                </div>
                <div className='offer-three m-4'>
                    <div className='text-container'>
                        <h2 className='text-center p-1 pt-3 roboto'>Basic.</h2>
                        <h1 className='text-center'>$15 <span className='price-month'>month.</span></h1>
                        <div className='separator pt-3'></div>
                    </div>

                    <div className='offers-container p-5 pt-1 pb-1'>
                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> 15 Websites</p>
                        </div>
                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> 25GB Space</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> 50,000 Visits Monthly</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'> Unlimited Traffic</p>
                        </div>

                        <div className='offers-p'>
                            <p className='m-0'>
                                <GoShieldCheck className='offers-icon'></GoShieldCheck>
                            </p>
                            <p className='ps-2 offers-text m-0'>  15 Databases</p>
                        </div>

                        <div className='quiet-text mt-3'>
                            <p>Free SSL</p>
                            <p>Free CDN</p>
                            <p>Free Migration</p>
                            <p>Daily Backup</p>
                        </div>


                    </div>

                    <div className='button-container m-3'>
                        <button type='button' className='button-subt'>Select</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeOne