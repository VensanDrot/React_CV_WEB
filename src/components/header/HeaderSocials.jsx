import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'


const  HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https:/instagram.com' target="_blank"><AiOutlineInstagram /></a>
        <a href='https:/github.com' target="_blank"><FaGithubSquare/></a>
        <a href='https:/upwork.com' target="_blank"><SiUpwork/></a>
    </div>
  )
}

export default HeaderSocials