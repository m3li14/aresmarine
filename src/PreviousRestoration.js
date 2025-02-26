import React from 'react';
import PageHeader from './Component/PageHeader';
import restorationData from './Restoration/Restoration.json';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import { Helmet } from 'react-helmet';

const iconStyle = {
    color: '#ffffff',
    borderRadius: '10%',
    backgroundColor: '#1B7C88',
    margin: '2px',
    padding: '6px',
    fontSize: '30px',
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#DB5726",
        },
        secondary: {
            main: "#1B7C88",
        },
    },
});

const PreviousRestoration = () => {
    const phoneNumber = '9546462797'; // Replace with your phone number
    const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
    const emailAddress = 'rick@aresmarine.com'; // Replace with your email address

    const handlePhoneClick = () => {
        window.location.href = 'tel:' + phoneNumber;
    };

    const handleWhatsAppClick = () => {
        window.location.href = 'https://wa.me/' + whatsappNumber;
    };

    const handleEmailClick = (boat) => {
        const subject = encodeURIComponent(`More information: ${boat.Type} ${boat.Year} ${boat.Length} ${boat.BoatName}`);
        const body = encodeURIComponent(`Hello,\n\nI am interested in learning more about the ${boat.Type} ${boat.Year} ${boat.Length} ${boat.BoatName}. Could you please provide additional information regarding its restoration, refit, repair, and custom paint services?\n\nThank you.`);
        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    };

    const handleShareClick = (boat) => {
        if (navigator.share) {
            navigator.share({
                title: `${boat.Type} ${boat.Year} ${boat.Length} ${boat.BoatName}`,
                text: `Check out this boat: ${boat.Type} ${boat.Year} ${boat.Length} ${boat.BoatName}`,
                url: window.location.href
            }).then(() => {
                console.log('Shared successfully');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            console.log('Web Share API not supported.');
            // Fallback sharing method
            // You can open a modal/dialog with share options
        }
    };

    return (
        <div>
            <PageHeader pageTitle="Previous Restoration" />
            <Helmet>
                <title data-react-helmet="true">Yacht Restoration and Refurbishment Services</title>
                <meta data-react-helmet="true" name="description" content="Specializing in yacht refits, repairs, construction, restorations, and full yacht services. Get expert yacht refurbishment, renovations, overhauls, upgrades, and maintenance services at Ares Marine." />
                <meta data-react-helmet="true" property="og:title" content="Yacht Restoration and Refurbishment Services" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/PreviousRestoration" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGPreviousRestoration.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Specializing in yacht refits, repairs, construction, restorations, and full yacht services. Get expert yacht refurbishment, renovations, overhauls, upgrades, and maintenance services at Ares Marine." />
            </Helmet>
            <div className='text-[#104895] lg:flex lg:flex-wrap'>
                {restorationData.map((boat, index) => (
                    <div key={index} className='lg:w-1/2'>
                        <div className='pb-2 px-4'><h1 className='text-xl'><b> {boat.Year} {boat.Length} {boat.BoatName} {boat.Type} </b></h1></div>

                        <div className='mx-2'>
                            <Link href={`${boat.Specification}`}>
                                <img src={boat.Image} className='drop-shadow-md border-b-2 border-[#f0f0f0]' alt={`${boat.Year} ${boat.Length} ${boat.BoatName} ${boat.Type}`} title={`${boat.Year} ${boat.Length} ${boat.BoatName} ${boat.Type}`} />
                            </Link>
                        </div>
                        <div className='lg:flex justify-between mt-3 print:invisible px-4 mb-8'>
                            <div className='pb-2'>
                                <ThemeProvider theme={theme}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="a"
                                        href={`${boat.Specification}`}
                                        title={`${boat.Year} ${boat.Length} ${boat.BoatName} ${boat.Type} Restoration`}
                                    >
                                        <ReadMoreIcon />
                                        &nbsp;&nbsp;
                                        <b>Read More</b>
                                    </Button>
                                </ThemeProvider>
                            </div>
                            <div>
                                <Button variant="contained" style={iconStyle} onClick={handlePhoneClick} title='Call Ares Custom Yachts'>
                                    <PhoneIcon />
                                </Button>
                                <Button variant="contained" style={iconStyle} onClick={handleWhatsAppClick} title='Call or Text Ares Custom Yachts on WhatsApp'>
                                    <WhatsAppIcon />
                                </Button>
                                <Button variant="contained" style={iconStyle} onClick={() => handleEmailClick(boat)} title={`More Information ${boat.Year} ${boat.Length} ${boat.BoatName} ${boat.Type} Restoration`}>
                                    <EmailIcon />
                                </Button>
                                <Button variant="contained" style={iconStyle} onClick={() => handleShareClick(boat)} title={`Share ${boat.Year} ${boat.Length} ${boat.BoatName} ${boat.Type} Restoration`}>
                                    <ShareIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreviousRestoration;