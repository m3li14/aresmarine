import React from 'react';
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { Button } from '@mui/material';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const Call = () => {

    const handleButtonClick = (iconType) => {
        // Handle the click event based on the icon type
        console.log(`Clicked ${iconType} button`);

        // Placeholder phone number for testing purposes
        const phoneNumber = '1234567890';

        switch (iconType) {
            case 'PhoneIcon':
                // Call phone number
                window.location.href = `tel:${phoneNumber}`;
                break;
            case 'TextsmsIcon':
                // Text phone number
                window.location.href = `sms:${phoneNumber}`;
                break;
            case 'WhatsAppIcon':
                // Open WhatsApp with the phone number
                window.location.href = `https://wa.me/${phoneNumber}`;
                break;
            case 'ShareIcon':
                // Share the page (use navigator.share if available)
                if (navigator.share) {
                    navigator.share({
                        title: 'Your page title',
                        text: 'Check out this page!',
                        url: window.location.href,
                    });
                } else {
                    // Fallback for browsers that do not support navigator.share
                    console.log('Sharing not supported in this browser');
                }
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className="flex  text-center">

                <div>
                    <Button
                        onClick={() => handleButtonClick('PhoneIcon')}
                        className=""
                    >
                        <MdOutlinePhonelinkRing size={42} className='text-[#DB5726] hover:text-[#DB5726]' />
                    </Button>
                </div>


                <div>
                    <Button
                        onClick={() => handleButtonClick('PhoneIcon')}
                        className=""
                    >
                        <FaWhatsapp size={42} className='text-[#DB5726] hover:text-[#DB5726]' />
                    </Button>
                </div>

                <div>
                    <Button
                        onClick={() => handleButtonClick('PhoneIcon')}
                        className=""
                    >
                        <MdOutlineEmail size={42} className='text-[#DB5726] hover:text-[#DB5726]' />
                    </Button>
                </div>


                <div>
                    <Button
                        onClick={() => handleButtonClick('ShareIcon')}
                        className=""
                    >
                        <IoMdShare size={42} className='text-[#DB5726] hover:text-[#DB5726]' />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Call