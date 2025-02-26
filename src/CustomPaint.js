import React from 'react'
import CompanyName from './Component/CompanyName'
import PageHeader from './Component/PageHeader';
import PaintData from './Restoration/Paint.json';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import AwlGrip from './Images/Awlgriplogo.png';
import { Helmet } from 'react-helmet';

// Keywords
// 1 - Primary Keywords: Yacht Painting, Marine Paint, Yacht Paint
// 2 - Secondary Keywords: Boat Painting, Yacht Refinishing, Marine Coatings, Boat Coatings, Yacht Finishing, Hull Painting, Topside Painting, Bottom Painting, Deck Painting, Superstructure Painting, Antifouling Paint, Gelcoat Repair, Surface Preparation
// 3 - Location-Based Keywords: Yacht Painting Florida, Marine Painters FL USA, Yacht Paint Suppliers
// 4 - Long-Tail Keywords: Best Marine Paint for Yachts, Eco-Friendly Yacht Paint, Professional Yacht Painting Services, High-Quality Marine Paint Products, Tips for DIY Yacht Painting, Cost of Yacht Painting, Benefits of Professional Marine Painting, How to Choose the Right Yacht Paint
// 5 - Branded Keywords: Ares Marine Yacht Painting Services, Ares Custom Yachts Marine Paint Products


const iconStyle = {
    color: '#ffffff',
    borderRadius: '100%',
    backgroundColor: '#1B7C88',
    margin: '2px',
    padding: '8px',
    fontSize: '35px',
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


const CustomPaint = () => {

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
        const subject = encodeURIComponent(`I want more information about: ${boat.Type} ${boat.Year} ${boat.Length} ${boat.BoatName}`);
        window.location.href = `mailto:${emailAddress}?subject=${subject}`;
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
        <div className='text-[#104895]'>

            <PageHeader pageTitle="Expert Yacht Painting Services in Florida, USA" />

            <Helmet>
                <title data-react-helmet="true">Expert Yacht Painting Services in Florida, USA</title>
                <meta data-react-helmet="true" name="description" content="Ares Custom Yachts offers expert yacht painting services in Florida, USA. Specializing in yacht painting, marine paint, and yacht refinishing. Get high-quality marine coatings, boat coatings, and eco-friendly yacht paint solutions." />
                <meta data-react-helmet="true" property="og:title" content="Expert Yacht Painting Services in Florida | Ares Custom Yachts" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/CustomPaint" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGCustomPaint.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Ares Custom Yachts offers expert yacht painting services in Florida, USA. Specializing in yacht painting, marine paint, and yacht refinishing. Get high-quality marine coatings, boat coatings, and eco-friendly yacht paint solutions." />
            </Helmet>
            <div className='mx-10'>
                <div className='pb-5'>Are you searching for expert yacht painting services that exceed expectations? At <CompanyName />, we specialize in yacht painting, marine paint applications, and yacht refinishing. Our team is equipped with the skills and knowledge to handle various aspects of boat painting, including hull painting, topside painting, bottom painting, and deck painting.</div>
                <div className='pb-5'>Located in Florida, USA, <CompanyName /> is your trusted partner for all your yacht painting needs. Our professional marine painters are dedicated to delivering top-quality results, whether you're looking to refresh your yacht's appearance or undertake a complete refinishing project. We offer a wide range of marine coatings and boat coatings, including eco-friendly options, ensuring that your yacht receives the best treatment possible.</div>
                <div className='pb-5'>As your premier yacht paint suppliers, we take pride in offering high-quality marine paint products that meet the highest standards of durability and performance. Whether you're in search of the best marine paint for yachts or need advice on surface preparation and application techniques, our team is here to assist you every step of the way.</div>
                <div>With <CompanyName />, you can expect professional yacht painting services tailored to your specific needs. From providing tips for DIY yacht painting to offering insights on the cost and benefits of professional marine painting, we're committed to ensuring your satisfaction. Contact us today to learn more about our Ares Marine yacht painting services and <CompanyName /> paint products.</div>

                <div className='lg:w-1/4 text-center mx-auto mt-5'><img src={AwlGrip} className='mx-auto' alt="" title="" /></div>
            </div>
            <div className='mt-5'>
                <div className='text-[#104895] lg:flex lg:flex-wrap'>
                    {PaintData.map((boat, index) => (
                        <div key={index} className='lg:w-1/2 px-4 mb-8'>
                            <div className='pb-2'><h1 className='text-xl'><b>{boat.Type} {boat.Year} {boat.Length} {boat.BoatName}</b></h1></div>

                            <Link href={`${boat.Specification}`}>
                                <img src={boat.Image} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' alt={boat.BoatName} title={`${boat.Type} ${boat.Year} ${boat.Length} ${boat.BoatName} `} />
                            </Link>
                            <div className='lg:flex justify-between mt-3 print:invisible'>
                                <div className='pb-2'>
                                    <ThemeProvider theme={theme}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="a"
                                            href={`${boat.Specification}`}
                                            title={`${boat.Type} ${boat.Year} ${boat.Length} ${boat.BoatName} `}
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
                                    <Button variant="contained" style={iconStyle} onClick={handleWhatsAppClick} title=''>
                                        <WhatsAppIcon />
                                    </Button>
                                    <Button variant="contained" style={iconStyle} onClick={() => handleEmailClick(boat)} title={`Request for More Information ${boat.Type} ${boat.Year} ${boat.Length} ${boat.BoatName}`}>
                                        <EmailIcon />
                                    </Button>
                                    <Button variant="contained" style={iconStyle} onClick={() => handleShareClick(boat)} title={`Share ${boat.Type} ${boat.Year} ${boat.Length} ${boat.BoatName}`}>
                                        <ShareIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CustomPaint;