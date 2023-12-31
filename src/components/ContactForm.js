import React,{ useState} from 'react'

const ContactForm = ({setContact,contact,onRequestClose,setProfileInfo}) => {
    const [insta,setInsta]=useState("")
    const [youtube,setYoutube]=useState("")
    
    

    
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
        <div  className=' flex flex-col px-4'>
            <label className=' mt-3'>Instagram Link <span className=' text-gray-400'>(Optional)</span></label>
            <div className=' my-2 px-3 py-2 w-full border rounded-lg'><input value={insta} onChange={(e)=>{setInsta(e.target.value); setProfileInfo({insta,youtube})}} className=' focus:outline-none w-full placeholder:text-gray-500' placeholder='Eg. ..instagram.com/username' type='text' /></div>
         <label className=' mt-3'>Youtube Link <span className=' text-gray-400'>(Optional)</span></label>
            <div className=' my-2 px-3 py-2 w-full border rounded-lg'><input value={youtube} onChange={(e)=>{setYoutube(e.target.value);setProfileInfo({insta,youtube})}} className=' focus:outline-none w-full placeholder:text-gray-500' placeholder='Eg. ..youtube/username' type='text'/></div>
            <div className=' flex justify-end items-end mt-4 p-4 '>
        <button onClick={()=>setContact(false)}  className=" border mx-2 text-black py-2 px-4 rounded-md">
         Back
        </button>
        <button onClick={onRequestClose}  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Done
        </button>
        </div>
        </div>
       
    </div>
  )
}

export default ContactForm
