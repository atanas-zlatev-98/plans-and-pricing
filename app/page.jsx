'use client'
import TypeOne from '@/components/PlansAndPricing/TypeOne/TypeOne';
import './custom.scss';
import TypesList from '@/components/PlansAndPricing/All/TypesList';
import React, { useRef, useState } from 'react';
import TypeTwo from '@/components/PlansAndPricing/TypeTwo/TypeTwo';

const Home = (props) => {

  const [titleScroll, setTitleScroll] = useState('');

  const myRef = useRef(null)
  const executeScrollOne = () => myRef.current.scrollIntoView();

  function titleGet(title) {
    setTitleScroll(title);
    executeScrollOne();
  }

  return (
    <>
      <div className='all-types'>

        <h2 className='plans-and-pricing ps-5 text-center text-white'>Plans & Pricing</h2>
        <div className='d-flex flex-wrap justify-content-left click-plans'>
          <TypesList scroll={titleGet}></TypesList>
        </div>

      </div>
      <div className='type' ref={myRef}>
        {titleScroll === 'Plans & Prices 1' && (<TypeOne></TypeOne>)}
        {titleScroll === 'Plans & Prices 2' && (<TypeTwo></TypeTwo>)}
      </div>
    </>
  )
}

export default Home;