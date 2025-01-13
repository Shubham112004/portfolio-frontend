import React from 'react'
import { Plus } from 'react-feather'
import './style.css'

const ContactButton = () => {
    return (
        <button className='contact-button'>
            <span>Contact Me</span>
            <Plus />
        </button>
    )
}

export default ContactButton