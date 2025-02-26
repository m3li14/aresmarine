import React, { useState } from 'react';
import PageHeader from '../Component/PageHeader';
import RestorationData from '../Restoration/Restoration.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GoinFission1 from '../Images/GoinFission/GoinFission-1.jpg';
import GoinFission2 from '../Images/GoinFission/GoinFission-2.jpg';
import GoinFission3 from '../Images/GoinFission/GoinFission-3.jpg';
import GoinFission4 from '../Images/GoinFission/GoinFission-4.jpg';
import GoinFission5 from '../Images/GoinFission/GoinFission-5.jpg';
import GoinFission6 from '../Images/GoinFission/GoinFission-6.jpg';
import GoinFission7 from '../Images/GoinFission/GoinFission-7.jpg';
import GoinFission8 from '../Images/GoinFission/GoinFission-8.jpg';
import GoinFission9 from '../Images/GoinFission/GoinFission-9.jpg';
import GoinFission10 from '../Images/GoinFission/GoinFission-10.jpg';
import GoinFission11 from '../Images/GoinFission/GoinFission-41.jpg';
import GoinFission12 from '../Images/GoinFission/GoinFission-42.jpg';
import GoinFission13 from '../Images/GoinFission/GoinFission-43.jpg';
import GoinFission14 from '../Images/GoinFission/GoinFission-44.jpg';
import GoinFission15 from '../Images/GoinFission/GoinFission-45.jpg';
import GoinFission16 from '../Images/GoinFission/GoinFission-46.jpg';
import GoinFission17 from '../Images/GoinFission/GoinFission-47.jpg';
import GoinFission18 from '../Images/GoinFission/GoinFission-48.jpg';
import GoinFission19 from '../Images/GoinFission/GoinFission-49.jpg';
import GoinFission20 from '../Images/GoinFission/GoinFission-50.jpg';

const GoingFission = () => {

    const RestorationGoingFission = RestorationData.find(boat => boat.ID === "9");

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };


    return (
        <div>
            <PageHeader pageTitle="S/F 2001 70' Going Fission" />



            {RestorationGoingFission && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationGoingFission.Image} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' alt={`${RestorationGoingFission.Type} ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} `} title={`${RestorationGoingFission.Type} ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} `} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationGoingFission.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationGoingFission.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationGoingFission.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationGoingFission.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}


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

                        <div><img src={GoinFission1} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission2} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission3} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission4} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission5} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission6} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission7} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission8} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission9} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission10} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>



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
                        <div><img src={GoinFission11} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission12} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission13} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission14} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission15} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission16} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission17} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission18} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission19} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>

                        <div><img src={GoinFission20} className='drop-shadow-md border-b-2 mb-5 border-[#f0f0f0] mx-auto' alt={`${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} title={` ${RestorationGoingFission.Year} ${RestorationGoingFission.BoatName} ${RestorationGoingFission.Length} ${RestorationGoingFission.Make} ${RestorationGoingFission.Type}`} /></div>


                    </AccordionDetails>
                </Accordion>
            </div>


        </div>
    )
}

export default GoingFission