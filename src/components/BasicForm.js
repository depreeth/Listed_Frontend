import React, { useState } from 'react'

const BasicForm = ({setContact,contact,setProfileInfo}) => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")

    // console.log(setProfileInfo)
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
  
    const handleNextClick = () => {
      // Validation logic
      let isValid = true;
  
      if (!name.trim()) {
        setNameError('Name is required');
        isValid = false;
        alert(nameError)
      } else {
        setNameError('');
      }
  
      if (!email.trim()) {
        setEmailError('Email is required');
        isValid = false;
        alert(emailError)
      } else {
        setEmailError('');
      }
  
      if (!phone.trim()) {
        setPhoneError('Phone is required');
        isValid = false;
        alert(phoneError)
      } else {
        setPhoneError('');
      }
  
      if (isValid) {
        // Proceed to the next step
        setContact(true);
        setProfileInfo({ name, email, phone });
      }
    };
    
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
            <div className=' my-2 px-3 py-2 w-full border rounded-lg'><input value={name} onChange={(e)=>setName(e.target.value)} className=' focus:outline-none w-full placeholder:text-gray-500' type='text' placeholder='Eg. John Doe' /></div>
            <label className=' mt-3'>Enter Email*</label>
            <div className='my-2 px-3 py-2 w-full border rounded-lg'><input value={email} onChange={(e)=>setEmail(e.target.value)} className=' focus:outline-none w-full placeholder:text-gray-500' type='email' placeholder='Eg. John@xyz.com'/></div>
            <label className=' mt-3'>Enter Phone*</label>
            <div className=' my-2 px-3 py-2 w-full border rounded-lg'><input value={phone} onChange={(e)=>{const value = e.target.value.replace(/[^\d\s-]/g, '');setPhone(value)}} className=' focus:outline-none w-full placeholder:text-gray-500' type='tel' placeholder='Eg. 9123456789'/></div>
        </div>
        <div className=' flex justify-end items-end mt-4 p-4 '>
        <button onClick={handleNextClick}  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Next
        </button>
        </div>
    </div>
  )
}

export default BasicForm
