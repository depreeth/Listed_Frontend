import React, { useState } from 'react'
import Modal from 'react-modal';
import "../css/ProfileForm.css"
import BasicForm from './BasicForm';
import ContactForm from './ContactForm';

const ProfileForm = ({ isOpen, onRequestClose ,setBasicInfo, setContactInfo }) => {
    const[contact,setContact]=useState(false);
    
  return (
    <div>
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal rounded-3xl"
      overlayClassName="modal-overlay"
    >
      <div className=" flex flex-col  ">
        <div className=' flex justify-between items-center border-b px-12 py-4'>
        <div className="text-xl font-semibold ">Add New Profile</div>
        <div onClick={onRequestClose}>X</div>
        </div>
        {!contact ? <BasicForm setContact={setContact} setProfileInfo={setBasicInfo} contact={contact}/>:<ContactForm contact={contact} setProfileInfo={setContactInfo} onRequestClose={onRequestClose} setContact={setContact}/>}
      </div>
    </Modal>
    </div>
  )
}

export default ProfileForm
