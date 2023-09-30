import React, { useState } from 'react'
import Image from 'next/image';

const TypesItem = (props) => {

 

  return (
    <div className='d-flex flex-column m-3 '>
        <div>
            <Image src={props.image} width={300} height={180} alt='img'></Image>
        </div>
        <div>
            <p className='text-center p-2 text-white'>{props.title}</p>
        </div>
    </div>
  )
}

export default TypesItem