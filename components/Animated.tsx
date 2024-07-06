"use client"

import React from 'react'
import CountUp from 'react-countup';

const Animated = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'><CountUp end={amount} 
    decimal=','
    duration={2}
    decimals={2}
    prefix='$'
    /></div>
  )
}

export default Animated