import React, { useState } from 'react';
import PageHeader from '../Component/PageHeader';
import { Helmet } from 'react-helmet';
import RestorationData from '../Restoration/Restoration.json';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Octopussy1 from '../Images/Octopussy/Octopussy1.jpg';
import Octopussy2 from '../Images/Octopussy/Octopussy2.jpg';
import Octopussy3 from '../Images/Octopussy/Octopussy3.jpg';
import Octopussy4 from '../Images/Octopussy/Octopussy4.jpg';
import Octopussy5 from '../Images/Octopussy/Octopussy5.jpg';
import Octopussy6 from '../Images/Octopussy/Octopussy6.jpg';
import Octopussy7 from '../Images/Octopussy/Octopussy7.jpg';
import Octopussy8 from '../Images/Octopussy/Octopussy8.jpg';
import Octopussy9 from '../Images/Octopussy/Octopussy9.jpg';
import Octopussy10 from '../Images/Octopussy/Octopussy10.jpg';
import Octopussy11 from '../Images/Octopussy/Octopussy11.jpg';
import Octopussy12 from '../Images/Octopussy/Octopussy12.jpg';
import Octopussy13 from '../Images/Octopussy/Octopussy13.jpg';
import Octopussy14 from '../Images/Octopussy/Octopussy14.jpg';
import Octopussy15 from '../Images/Octopussy/Octopussy15.jpg';
import Octopussy16 from '../Images/Octopussy/Octopussy16.jpg';
import Octopussy17 from '../Images/Octopussy/Octopussy17.jpg';
import Octopussy18 from '../Images/Octopussy/Octopussy18.jpg';
import Octopussy19 from '../Images/Octopussy/Octopussy19.jpg';
import Octopussy20 from '../Images/Octopussy/Octopussy20.jpg';
import Octopussy21 from '../Images/Octopussy/Octopussy21.jpg';
import Octopussy22 from '../Images/Octopussy/Octopussy22.jpg';
import Octopussy23 from '../Images/Octopussy/Octopussy23.jpg';
import Octopussy24 from '../Images/Octopussy/Octopussy24.jpg';

const Octopussy = () => {

    const RestorationOctopussy = RestorationData.find(boat => boat.ID === "8");

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <div>
            <PageHeader pageTitle="M/Y 1988 143' Octopussy" />

            <Helmet>
                <title data-react-helmet="true">1988 143' Octopussy Motor Yacht | Restoration, Yacht Repairs, Custom Paint</title>
                <meta data-react-helmet="true" name="description" content="Experience unparalleled restoration, repairs, and custom paint services for the 1988 143' Octopussy Motor Yacht. Trust Ares Marine for expert craftsmanship and attention to detail." />
                <meta data-react-helmet="true" property="og:title" content="1988 143' Octopussy Motor Yacht | Restoration, Yacht Repairs, Custom Paint" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/Octopussy/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGOctopussy.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Experience unparalleled restoration, repairs, and custom paint services for the 1988 143' Octopussy Motor Yacht. Trust Ares Marine for expert craftsmanship and attention to detail." />
            </Helmet>

            {RestorationOctopussy && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationOctopussy.Image} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Type} ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} `} title={`${RestorationOctopussy.Type} ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} `} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationOctopussy.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationOctopussy.Length}</b></div></TableCell>
                                        </TableRow>




                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>


                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationOctopussy.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationOctopussy.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}

            <div className='mx-10'></div>

            {/* Exterior */}
            <div className='mx-10 mt-5'>
                <Accordion

                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}

                    style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={{ color: '#104895' }}
                    >
                        <div className='font-bold text-xl'>Exterior</div>
                    </AccordionSummary>
                    <AccordionDetails style={{ color: '#104895' }}>

                        <div><img src={Octopussy1} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | New Running`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>New Running</em></div>

                        <div><img src={Octopussy2} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | At Anchor`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>At Anchor</em></div>

                        <div><img src={Octopussy3} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | New Running`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>New Running</em></div>

                        <div><img src={Octopussy4} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | AFT Deck`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>AFT Deck</em></div>

                        <div><img src={Octopussy5} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | AFT Dining`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>AFT Dining</em></div>

                        <div><img src={Octopussy6} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | AFT Dining Detail `} /></div>
                        <div className='pt-2 pb-5 text-center'><em>AFT Dining Detail</em></div>

                        <div><img src={Octopussy7} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Sundeck Sunpad`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Sundeck Sunpad</em></div>

                        <div><img src={Octopussy8} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Sundeck Jacuzzi`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Sundeck Jacuzzi</em></div>

                        <div><img src={Octopussy9} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Sundeck Seating`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Sundeck Seating</em></div>

                        <div><img src={Octopussy10} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Bridge Deck Dining`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Bridge Deck Dining</em></div>

                        <div><img src={Octopussy11} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Bridge Deck Seating`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Bridge Deck Seating</em></div>

                        <div><img src={Octopussy12} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Bridge Deck Seating`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Bridge Deck Seating</em></div>

                        <div><img src={Octopussy23} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | `} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={Octopussy24} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Stern`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Stern</em></div>

                    </AccordionDetails>
                </Accordion>
            </div>


            {/* Interiors */}
            <div className='mx-10 mt-5'>
                <Accordion

                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}

                    style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        style={{ color: '#104895' }}
                    >
                        <div className='font-bold text-xl'>Interiors</div>
                    </AccordionSummary>
                    <AccordionDetails style={{ color: '#104895' }}>
                        <div><img src={Octopussy13} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Master Stateroom`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Master Stateroom</em></div>

                        <div><img src={Octopussy14} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | VIP Stateroom`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>VIP Stateroom</em></div>

                        <div><img src={Octopussy15} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Guest Stateroom`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Guest Stateroom</em></div>

                        <div><img src={Octopussy16} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Main Salon`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Main Salon</em></div>

                        <div><img src={Octopussy17} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Lounge`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Lounge</em></div>

                        <div><img src={Octopussy18} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Main Bar`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Main Bar</em></div>

                        <div><img src={Octopussy19} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Main Deck Dining`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Main Deck Dining</em></div>

                        <div><img src={Octopussy20} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Main Salon TV`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Main Salon TV</em></div>

                        <div><img src={Octopussy21} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Bridge Deck Salon`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Bridge Deck Salon</em></div>

                        <div><img src={Octopussy22} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type}`} title={` ${RestorationOctopussy.Year} ${RestorationOctopussy.BoatName} ${RestorationOctopussy.Length} ${RestorationOctopussy.Make} ${RestorationOctopussy.Type} | Pilothouse`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Pilothouse</em></div>


                    </AccordionDetails>
                </Accordion>
            </div>


            {/* Engine Room */}
            <div className='mx-10 mt-5'>
                <Accordion

                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}

                    style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        style={{ color: '#104895' }}
                    >
                        <div className='font-bold text-xl'>Engine Room</div>
                    </AccordionSummary>
                    <AccordionDetails style={{ color: '#104895' }}>



                        {/* <div><img src={BreadKanter25} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type} | Engine Room`} /></div>
                        <div className='pt-2 text-center'><em>Engine Room</em></div> */}


                    </AccordionDetails>
                </Accordion>
            </div>

        </div>
    )
}

export default Octopussy