// import { motion } from 'framer-motion'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import { fadeIn } from '../variants'
import Logo from '../assets/image.png'
function footer() {
  return (
    <div className='w-full bg-blue-900 h-[55px] backdrop-blur-2xl 
     mx-auto px-5 flex justify-between items-center text-2xl text-white/50"'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          {/*<img className='h-[100px]' src={Logo} alt='' />*/}
        </a>

      </div>

      <p className="mb-1 max-w-max mx-auto lg:mx-88">Vblaze©Copyright2023. All Rights Reserved</p>



    </div>
  )
}

export default footer