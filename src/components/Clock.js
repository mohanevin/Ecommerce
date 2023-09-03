import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [days,setDays]=useState()
    const [hours,setHours]=useState()
    const [minutes,setMinutes]=useState()
    const [seconds,setSeconds]=useState()
    let interval
    const clock=()=>{
    
        const dest= new Date('Dec 31, 2025').getTime()
        let now=new Date().getTime()
        let difference=dest-now
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));

    
    }
    useEffect(()=>{
        const interval = setInterval(() => clock(), 1000);

        return () => clearInterval(interval);
    },[])

  return (
    <div className='clock-wrapper d-flex align-items-center m-4'>

        <div className='clock-data d-flex align-items-center gap-3 '>
            <div className='text-center '>
                <h1 className=' text-white fs-3'>{days}</h1>
                <h5 className=' text-white fs-6'>days</h5>
            </div>
            <span className=' text-white fs-3'>:</span>
        </div>
        <div className='clock-data d-flex align-items-center gap-3'>
            <div className='text-center '>
                <h1 className=' text-white fs-3'>{hours}</h1>
                <h5 className=' text-white fs-6'>hours</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className='clock-data d-flex align-items-center gap-3 '>
            <div className='text-center '>
                <h1 className=' text-white fs-3'>{minutes}</h1>
                <h5 className=' text-white fs-6'>minutes</h5>
            </div>
            <span className=' text-white fs-3'>:</span>
        </div>
        <div className='clock-data d-flex align-items-center gap-3 '>
            <div className='text-center '>
                <h1 className=' text-white fs-3'>{seconds}</h1>
                <h5 className=' text-white fs-6'>second</h5>
            </div>
            
        </div>
    </div>
  )
}

export default Clock