import React from 'react';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import RssFeedIcon from '@mui/icons-material/RssFeed';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';
import ShareIcon from '@mui/icons-material/Share';


const Social = () => {

    const iconStyle = {
        color: '#1B7C88',
    };



    const phoneNumber = '9546462797'; // Replace with your phone number
    const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
    const emailAddress = 'rick@aresmarine.com'; // Replace with your email address
    const faxnumber = '9545240994';
    const Facebook = 'https://www.facebook.com/AresMarine';
    const X = 'https://twitter.com/aresmarine';
    const YouTube = 'https://www.youtube.com/user/AresMarine'

    const handlePhoneClick = () => {
        window.location.href = 'tel:' + phoneNumber;
    };

    const handleWhatsAppClick = () => {
        window.location.href = 'https://wa.me/' + whatsappNumber;
    };

    const handleEmailClick = (boat) => {
        const subject = encodeURIComponent(`Ares Custom Yachts`);
        window.location.href = `mailto:${emailAddress}?subject=${subject}`;
    };

    const handleFaxClick = () => {
        window.location.href = 'fax:' + faxnumber;
    };

    const handleFacebookClick = () => {
        window.open(Facebook, '_blank');

    };

    const handleXClick = () => {
        window.open(X, '_blank');

    };

    const handleYouTubeClick = () => {
        window.open(YouTube, '_blank');

    };

    const handleShareClick = () => {
        const pageTitle = document.title; // Capture the current page's title
        const shareData = {
            title: pageTitle,
            text: `Check out this page: ${pageTitle}`,
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => {
                    console.log('Shared successfully');
                })
                .catch((error) => {
                    console.error('Error sharing:', error);
                });
        } else {
            console.log('Web Share API not supported.');
            // Fallback sharing method
            // You can open a modal/dialog with share options
        }
    };

    return (
        <div className='print:invisible'>
            <div className='flex gap-0'>
                <div className='flex mx-auto'>
                    <div className='hidden lg:block'>

                        <Button onClick={handlePhoneClick} title='Call Ares Custom Yachts'>
                            <PhoneIcon style={iconStyle} />
                        </Button>
                    </div>
                    <div>
                        <Button onClick={handleWhatsAppClick} title='Call or Text Ares Custom Yachts on WhatsApp'>
                            <WhatsAppIcon style={iconStyle} />
                        </Button>
                    </div>
                    <div>
                        <Button onClick={handleEmailClick} title='Send Ares Custom Yachts an E-mail'>
                            <EmailIcon style={iconStyle} />
                        </Button>
                    </div>

                    <div className='hidden lg:block'>
                        <Button onClick={handleFaxClick} title='Send Ares Custom Yachts a fax'>
                            <FaxIcon style={iconStyle} />
                        </Button>
                    </div>

                    <div>
                        <Button onClick={handleFacebookClick} title='Ares Custom Yachts Facebook'>
                            <FacebookIcon style={iconStyle} />
                        </Button>
                    </div>
                    <div>
                        <Button onClick={handleXClick} title='Ares Custom Yachts X'>
                            <XIcon style={iconStyle} />
                        </Button>
                    </div>
                    <div>
                        <Button onClick={handleYouTubeClick} title='Ares Custom Yachts YouTube'>
                            <YouTubeIcon style={iconStyle} />
                        </Button>
                    </div>
                    {/* <div className='hidden lg:block'>
                        <Button variant="contained" style={iconStyle} onClick={handlePhoneClick} title='Ares Custom Yachts LinkedIn'>
                            <LinkedInIcon />
                        </Button>
                    </div> */}
                    {/* <div>
                        <Button variant="contained" style={iconStyle} onClick={handlePhoneClick} title='Ares Custom Yachts Blog'>
                            <RssFeedIcon />
                        </Button>
                    </div> */}
                    <div>
                        <Button onClick={handleShareClick} title='Share the Current page'>
                            <ShareIcon style={iconStyle} />
                        </Button></div>
                    {/* <div className='align-middle'>
                        <Button variant="contained" style={iconStyle} onClick={handlePhoneClick} title='Call or Text Ares Custom Yachts on WhatsApp'>
                            <img src={FYBA} alt='' title='' />
                        </Button>
                    </div> */}
                    {/* <div className='align-middle'>
                        <Button variant="contained" style={iconStyle} onClick={handlePhoneClick} title='Call or Text Ares Custom Yachts on WhatsApp'>
                            <img src={IIS} alt='' title='' />
                        </Button>
                    </div> */}
                </div>
                {/* <div className='lg:w-1/2'>
                    <div className='flex gap-5 float-right'>
                        <div className='align-middle'><img src={FYBA} alt='' title='' className='w-[70px]' style={iconStyle2} /></div>
                        <div className='align-middle'><img src={IIS} alt='' title='' className='w-[70px]' style={iconStyle2} /></div>

                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default Social