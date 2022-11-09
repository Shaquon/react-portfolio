import React from 'react'
import CV from '../../assets/cv.pdf';
import { AiOutlineLinkedin } from 'react-icons/ai'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download</a>
            <a href="#contact" className='btn btn-primary'>Contact</a>
            <a href='linkedin.com' className='btn'><AiOutlineLinkedin /></a>
        </div>
    )
}

export default CTA