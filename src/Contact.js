import React from 'react';
import CompanyName from './Component/CompanyName'
import PageHeader from './Component/PageHeader';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Open from './Component/Open';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import FaxIcon from '@mui/icons-material/Fax';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';

const Contact = () => {

    const phoneNumber = '9546462797'; // Replace with your phone number
    const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
    const emailAddress = 'rick@aresmarine.com'; // Replace with your email address
    const faxnumber = '9545240994';

    const handlePhoneClick = () => {
        window.location.href = 'tel:' + phoneNumber;
    };

    const handleFaxClick = () => {
        window.location.href = 'fax:' + faxnumber;
    };

    const handleWhatsAppClick = () => {
        window.location.href = 'https://wa.me/' + whatsappNumber;
    };

    const handleEmailClick = (boat) => {
        const subject = encodeURIComponent(`Ares Custom Yachts Contact`);
        window.location.href = `mailto:${emailAddress}?subject=${subject}`;
    };



    return (
        <div>
            <PageHeader pageTitle="Contact Ares Custom Yachts for Yacht Restoration, Sales, and Expert Consultation" />

            <Helmet>
                <title data-react-helmet="true">Contact Ares Custom Yachts for Yacht Restoration, Sales, and Expert Consultation in Florida, USA</title>
                <meta data-react-helmet="true" name="description" content="Contact Ares Custom Yachts in Florida, USA, for expert yacht restoration, sales, and consultation services. Whether you're looking for yacht maintenance, sales, or professional advice, our team is here to assist you. Reach out to us today to discuss your yacht needs!" />
                <meta data-react-helmet="true" property="og:title" content="Contact Ares Custom Yachts for Yacht Restoration, Sales, and Expert Consultation in Florida, USA" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Contact/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGContact.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Contact Ares Custom Yachts in Florida, USA, for expert yacht restoration, sales, and consultation services. Whether you're looking for yacht maintenance, sales, or professional advice, our team is here to assist you. Reach out to us today to discuss your yacht needs!" />
            </Helmet>

            <div className='lg:flex lg:gap-5'>
                <div className='lg:w-1/3'>
                    <div className='text-center pb-5 text-[#DB5726] hover:text-[#1B7C88] py-5 text-2xl' ><Open /></div>
                    <TableContainer component={Paper} style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><div className='text-right font-bold'><b>Phone:</b> </div></TableCell>
                                    <TableCell>
                                        <Button onClick={handlePhoneClick} title='Call Ares Custom Yachts'>
                                            <PhonelinkRingIcon fontSize='large' sx={{ color: '#DB5726' }} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell><div className='text-right font-bold'><b>Fax: </b></div></TableCell>
                                    <TableCell>
                                        <Button onClick={handleFaxClick} title='Send Ares Custom Yachts a fax'>
                                            <FaxIcon fontSize='large' sx={{ color: '#DB5726' }} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><div className='text-right font-bold'><b>WhatsApp</b></div></TableCell>
                                    <TableCell>
                                        <Button onClick={handleWhatsAppClick} title='Call or Text Ares Custom Yachts on WhatsApp'>
                                            <WhatsAppIcon fontSize='large' sx={{ color: '#DB5726' }} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><div className='text-right font-bold'><b>E-mail</b></div></TableCell>
                                    <TableCell><div className=''>
                                        <Button onClick={handleEmailClick} title='Send Ares Custom Yachts an E-mail'>
                                            <EmailIcon fontSize='large' sx={{ color: '#DB5726' }} />
                                        </Button>

                                    </div></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div className='lg:w-2/3'>
                    <div className='text-center pb-5 text-2xl text-[#104895] py-5 '><CompanyName /></div>
                    <TableContainer component={Paper} style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: '5px' }} className='text-right font-bold'>
                                        <div className=''>
                                            <Button><ArrowRightIcon fontSize='large' sx={{ color: '#1B7C88' }} /></Button>
                                        </div>
                                    </TableCell>
                                    <TableCell className='text-right font-bold'><b>Day</b></TableCell>
                                    <TableCell className='text-right font-bold'><b>Hours</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ width: '5px' }} className='text-right font-bold'><div className=''>

                                        <Button><ArrowRightIcon fontSize='large' sx={{ color: '#1B7C88' }} /></Button>
                                    </div></TableCell>

                                    <TableCell className='text-right font-bold'><b>Monday - Friday</b></TableCell>
                                    <TableCell className='text-right font-bold'><b>9:00 AM - 5:00 PM</b></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ width: '5px' }} className='text-right font-bold'><div className=''><Button><ArrowRightIcon fontSize='large' sx={{ color: '#1B7C88' }} /></Button></div></TableCell>

                                    <TableCell className='text-right font-bold'><b>Saturday</b></TableCell>
                                    <TableCell className='text-right font-bold'><b>Closed</b></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ width: '5px' }} className='text-right font-bold'><div className=''><Button><ArrowRightIcon fontSize='large' sx={{ color: '#1B7C88' }} /></Button></div></TableCell>

                                    <TableCell className='text-right font-bold'><b>Sunday</b></TableCell>
                                    <TableCell className='text-right font-bold'><b>Closed</b></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>


        </div>
    )
}

export default Contact