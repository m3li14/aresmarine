import React, { useState } from 'react';
import PageHeader from '../Component/PageHeader';
import RestorationData from '../Restoration/Restoration.json';
import { Helmet } from 'react-helmet';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VirginiaSea1 from '../Images/VirginiaSea/VirginiaSea1.jpg';
import VirginiaSea2 from '../Images/VirginiaSea/VirginiaSea2.jpg';
import VirginiaSea3 from '../Images/VirginiaSea/VirginiaSea3.jpg';
import VirginiaSea4 from '../Images/VirginiaSea/VirginiaSea4.jpg';
import VirginiaSea5 from '../Images/VirginiaSea/VirginiaSea5.jpg';
import VirginiaSea6 from '../Images/VirginiaSea/VirginiaSea6.jpg';
import VirginiaSea7 from '../Images/VirginiaSea/VirginiaSea7.jpg';
import VirginiaSea8 from '../Images/VirginiaSea/VirginiaSea8.jpg';
import VirginiaSea9 from '../Images/VirginiaSea/VirginiaSea9.jpg';
import VirginiaSea10 from '../Images/VirginiaSea/VirginiaSea10.jpg';
import VirginiaSea11 from '../Images/VirginiaSea/VirginiaSea11.jpg';
import VirginiaSea12 from '../Images/VirginiaSea/VirginiaSea12.jpg';
import VirginiaSea13 from '../Images/VirginiaSea/VirginiaSea13.jpg';
import VirginiaSea14 from '../Images/VirginiaSea/VirginiaSea14.jpg';
import VirginiaSea15 from '../Images/VirginiaSea/VirginiaSea15.jpg';
import VirginiaSea16 from '../Images/VirginiaSea/VirginiaSea16.jpg';
import VirginiaSea17 from '../Images/VirginiaSea/VirginiaSea17.jpg';
import VirginiaSea18 from '../Images/VirginiaSea/VirginiaSea18.jpg';
import VirginiaSea19 from '../Images/VirginiaSea/VirginiaSea19.jpg';
import VirginiaSea20 from '../Images/VirginiaSea/VirginiaSea20.jpg';
import VirginiaSea21 from '../Images/VirginiaSea/VirginiaSea21.jpg';
import VirginiaSea22 from '../Images/VirginiaSea/VirginiaSea22.jpg';
import VirginiaSea23 from '../Images/VirginiaSea/VirginiaSea23.jpg';
import VirginiaSea24 from '../Images/VirginiaSea/VirginiaSea24.jpg';
import VirginiaSea25 from '../Images/VirginiaSea/VirginiaSea25.jpg';
import VirginiaSea26 from '../Images/VirginiaSea/VirginiaSea26.jpg';
import VirginiaSea27 from '../Images/VirginiaSea/VirginiaSea27.jpg';
import VirginiaSea28 from '../Images/VirginiaSea/VirginiaSea28.jpg';
import VirginiaSea29 from '../Images/VirginiaSea/VirginiaSea29.jpg';
import VirginiaSea30 from '../Images/VirginiaSea/VirginiaSea30.jpg';


const VirginiaSea = () => {

    const RestorationVirginiaSea = RestorationData.find(boat => boat.ID === "7");

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <div>
            <div className="px-10">
                <PageHeader pageTitle="2005 84' Virginia Sea M/Y" />
                <Helmet>
                    <title data-react-helmet="true">2005 84' Virginia Sea Restoration</title>
                    <meta data-react-helmet="true" name="description" content="Discover our restoration services for the 2005 84' Virginia Sea. Expert renovations to bring your vessel back to life." />
                    <meta data-react-helmet="true" property="og:title" content="2005 84' Virginia Sea Restoration" />
                    <meta data-react-helmet="true" property="og:type" content="website" />
                    <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/VirginiaSea/" />
                    <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OG-VirginiaSea.jpg" />
                    <meta data-react-helmet="true" property="og:description" content="Discover our restoration services for the 2005 84' Virginia Sea. Expert renovations to bring your vessel back to life." />
                </Helmet>
            </div>
            {RestorationVirginiaSea && (
                <div className='mb-5'>
                    <div className=''><img src={RestorationVirginiaSea.Image} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationVirginiaSea.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationVirginiaSea.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationVirginiaSea.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationVirginiaSea.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}

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
                        <div><img src={VirginiaSea4} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Aft Deck`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Aft Deck</em></div>

                        <div><img src={VirginiaSea5} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Aft Deck`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Aft Deck</em></div>

                        <div><img src={VirginiaSea6} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Aft Deck`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Aft Deck</em></div>

                        <div><img src={VirginiaSea7} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Aft Deck`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Aft Deck</em></div>

                        <div><img src={VirginiaSea8} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Port Passageway`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Port Passageway</em></div>

                        <div><img src={VirginiaSea9} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Foredeck Sun Lounge`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Foredeck Sun Lounge</em></div>

                        <div><img src={VirginiaSea10} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Foredeck Sun Lounge`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Foredeck Sun Lounge</em></div>

                        <div><img src={VirginiaSea28} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Tender garage`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Tender garage</em></div>

                        <div><img src={VirginiaSea29} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>{RestorationVirginiaSea.Year} {RestorationVirginiaSea.BoatName} {RestorationVirginiaSea.Length} {RestorationVirginiaSea.Make} {RestorationVirginiaSea.Type}</em></div>

                        <div><img src={VirginiaSea30} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>{RestorationVirginiaSea.Year} {RestorationVirginiaSea.BoatName} {RestorationVirginiaSea.Length} {RestorationVirginiaSea.Make} {RestorationVirginiaSea.Type}</em></div>


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

                        <div><img src={VirginiaSea11} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Main Deck Salon`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Main Deck Salon</em></div>

                        <div><img src={VirginiaSea12} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Main Deck Salon`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Main Deck Salon</em></div>

                        <div><img src={VirginiaSea13} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Main Deck Salon/Bar`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Main Deck Salon/Bar</em></div>

                        <div><img src={VirginiaSea14} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Main Deck Salon/Sunroof Closed`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Main Deck Salon/Sunroof Closed</em></div>

                        <div><img src={VirginiaSea15} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Main Deck Salon/Sunroof Open`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Main Deck Salon/Sunroof Open</em></div>

                        <div><img src={VirginiaSea16} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Helm Station`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Helm Station</em></div>

                        <div><img src={VirginiaSea17} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Helm Station`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Helm Station</em></div>

                        <div><img src={VirginiaSea18} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Lower Salon`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Lower Salon</em></div>

                        <div><img src={VirginiaSea19} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Lower Salon`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Lower Salon</em></div>

                        <div><img src={VirginiaSea20} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Galley`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Galley</em></div>

                        <div><img src={VirginiaSea21} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Galley`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Galley</em></div>

                        <div className='lg:flex gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={VirginiaSea22} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Lower Deck Companionway`} /></div>
                                <div className='pt-2 pb-5 text-center'><em>Lower Deck Companionway</em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={VirginiaSea23} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Laundry`} /></div>
                                <div className='pt-2 pb-5 text-center'><em>Laundry</em></div>
                            </div>
                        </div>


                        <div><img src={VirginiaSea24} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Master Stateroom`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Master Stateroom</em></div>

                        <div><img src={VirginiaSea25} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Master Stateroom`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Master Stateroom</em></div>


                        <div className='lg:flex gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={VirginiaSea26} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Lower Deck Companionway`} /></div>
                                <div className='pt-2 pb-5 text-center'><em>Master Head</em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={VirginiaSea27} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Laundry`} /></div>
                                <div className='pt-2 pb-5 text-center'><em>Port Guest Head</em></div>
                            </div>
                        </div>

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


                        <div><img src={VirginiaSea1} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Engine Room`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Engine Room</em></div>

                        <div><img src={VirginiaSea2} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Engine Room`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Engine Room</em></div>

                        <div><img src={VirginiaSea3} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type}`} title={` ${RestorationVirginiaSea.Year} ${RestorationVirginiaSea.BoatName} ${RestorationVirginiaSea.Length} ${RestorationVirginiaSea.Make} ${RestorationVirginiaSea.Type} | Engine Room`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Engine Room</em></div>



                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default VirginiaSea