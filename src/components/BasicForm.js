import React, { useState } from 'react'

const BasicForm = ({setContact,contact}) => {
    
  return (
    <div>
              <div className=' grid grid-cols-2 gap-6 w-full  items-center my-4 px-4'>
            <div className=' w-full flex flex-col items-center  '>
                <div className=' w-full text-center'>Basic</div>
                <div className={` h-1 rounded-full w-full ${contact? "bg-gray-400":"bg-blue-500"} `}></div>
            </div>
            <div className=' w-full flex flex-col items-center '>
                <div className=' w-full text-center'>Contact</div>
                <div className={` h-1 rounded-full w-full ${!contact? "bg-gray-400":"bg-blue-500"} `}></div>
            </div>
        </div>
        <div className=' flex flex-col px-4'>
            <label className=' mt-3'>Enter Name*</label>
            <div className=' my-2 px-3 py-2 w-full border rounded-lg'><input className=' focus:outline-none w-full' type='text' /></div>
            <label className=' mt-3'>Enter Email*</label>
            <div className='my-2 px-3 py-2 w-full border rounded-lg'><input className=' focus:outline-none w-full' type='email'/></div>
            <label className=' mt-3'>Enter Phone*</label>
            <div className=' my-2 px-3 py-2 w-full border rounded-lg'><input className=' focus:outline-none w-full' type=''/></div>
        </div>
        <div className=' flex justify-end items-end mt-4 p-4 '>
        <button onClick={()=>setContact(true)}  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Next
        </button>
        </div>
    </div>
  )
}

export default BasicForm
