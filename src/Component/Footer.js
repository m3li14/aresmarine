import React from 'react'
import CompanyName from './CompanyName'
import Developed from './Developed'
import { Divider } from '@mui/material';
import Social from './Social';
import PhoneIcon from '@mui/icons-material/Phone';



const today = new Date();

const Footer = () => {
    return (
        <>

            <div className='text-center text-[#104895]'>
                <div className='clear-both mb-5'><Divider /></div>
                <div className='clear-both'><Social /></div>
                {/* <div className='font-bold pt-5'><CompanyName /></div> */}
                <div className='invisible print:visible'><PhoneIcon />(954) 646 2797</div>
                <div>&copy; {today.getFullYear()} - <CompanyName /></div>
                <div className='print:invisible'><Developed /></div>
            </div>
        </>
    )
}

export default Footer