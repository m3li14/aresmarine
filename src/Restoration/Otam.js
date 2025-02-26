import React, { useState } from 'react';
import PageHeader from '../Component/PageHeader';
import RestorationData from '../Restoration/Restoration.json';
import CompanyName from '../Component/CompanyName';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Helmet } from 'react-helmet';
import Otam1 from '../Images/Otam/198945Otam1.jpg';
import Otam2 from '../Images/Otam/198945Otam2.jpg';
import Otam3 from '../Images/Otam/198945Otam3.jpg';
import Otam4 from '../Images/Otam/198945Otam4.jpg';
import Otam5 from '../Images/Otam/198945Otam5.jpg';
import Otam6 from '../Images/Otam/198945Otam6.jpg';
import Otam7 from '../Images/Otam/198945Otam7.jpg';
import Otam8 from '../Images/Otam/198945Otam8.jpg';
import Otam9 from '../Images/Otam/198945Otam9.jpg';
import Otam10 from '../Images/Otam/198945Otam10.jpg';
import Otam11 from '../Images/Otam/198945Otam11.jpg';
import Otam12 from '../Images/Otam/198945Otam12.jpg';
import Otam13 from '../Images/Otam/198945Otam13.jpg';
import Otam14 from '../Images/Otam/198945Otam14.jpg';
import Otam15 from '../Images/Otam/198945Otam15.jpg';
import Otam17 from '../Images/Otam/198945Otam17.jpg';
import Otam18 from '../Images/Otam/198945Otam18.jpg';
import Otam19 from '../Images/Otam/198945Otam19.jpg';
import Otam20 from '../Images/Otam/198945Otam20.jpg';
import Otam21 from '../Images/Otam/198945Otam21.jpg';
import Otam22 from '../Images/Otam/198945Otam22.jpg';
import Otam23 from '../Images/Otam/198945Otam23.jpg';
import Otam24 from '../Images/Otam/198945Otam24.jpg';
import Otam25 from '../Images/Otam/198945Otam25.jpg';
import Otam26 from '../Images/Otam/198945Otam26.jpg';
import Otam27 from '../Images/Otam/198945Otam27.jpg';
import Otam28 from '../Images/Otam/198945Otam28.jpg';
import Otam29 from '../Images/Otam/198945Otam29.jpg';
import Otam30 from '../Images/Otam/198945Otam30.jpg';

const Otam = () => {

    const RestorationOtam = RestorationData.find(boat => boat.ID === "5");

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };


    return (
        <div className='text-[#104895]'>

            <Helmet>
                <title data-react-helmet="true">M/Y 1989 45' Otam Restoration</title>
                <meta data-react-helmet="true" name="description" content="Explore the stunning restoration and refit of the 1989 45' Otam. Discover the meticulous restyling, interior and exterior enhancements, and engine overhauls that transformed this classic yacht." />
                <meta data-react-helmet="true" property="og:title" content="M/Y 1989 45' Otam Restoration" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/Otam/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGOtam.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Experience the transformative restyling, interior and exterior upgrades, and engine overhauls on the 1989 45' Otam. Witness the craftsmanship and attention to detail that revitalized this classic yacht." />
            </Helmet>

            <PageHeader pageTitle="M/Y 1989 45' Otam" />



            {RestorationOtam && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationOtam.Image} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' alt={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} `} title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} `} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>
                                        {/* Add TableRow with a line after each row */}
                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationOtam.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationOtam.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationOtam.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationOtam.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}
            <div className='container mx-auto'>
                <div className='pb-5'>Discover the transformative work carried out by <CompanyName /> on this 1989 Otam, a 45' yacht that underwent a significant restoration and refit in 2013.</div>
                <div className='pb-5'><b>RESTYLING and REFIT:</b> <CompanyName /> breathed new life into this classic yacht with a comprehensive restyling and refit. They meticulously addressed the imperfections in the hullside, identifying and repairing distortions highlighted by orange spots above the stripes. The result is a sleeker, more refined exterior that retains its original charm.</div>
                <div className='pb-5'><b>INTERIOR and EXTERIOR:</b> The interior and exterior of the yacht have been rejuvenated to meet modern standards of luxury and comfort. <CompanyName /> undertook extensive joiner work, enhancing the yacht interiors with exquisite craftsmanship and attention to detail. Simultaneously, the exterior received a fresh look, with sandblasting revealing the pristine gelcoat underneath.</div>
                <div className='pb-5'><b>Yacht Interiors:</b> The cockpit and interior underwent a thorough dismantling, allowing for a complete overhaul. <CompanyName /> transformed the spaces, optimizing the layout and integrating contemporary design elements while preserving the yacht's classic character.</div>
                <div className='pb-5'><b>Yacht Engine Overhauls:</b> The yacht's performance was significantly improved through engine overhauls. <CompanyName /> dismantled the starboard engine, removing the transmission and initiating a comprehensive breakdown of the hydraulic system. All hardware was removed, and fiberglass repairs were completed to ensure optimal functioning.</div>
                <div className='pb-5'>In addition to these key enhancements, <CompanyName /> addressed previous repair issues that had trapped water, ensuring the yacht's longevity and reliability. They also prepared the engine room for painting, creating a clean and organized space that reflects the yacht's renewed vitality.</div>
                <div className='pb-5'>Experience the seamless blend of tradition and innovation with this meticulously restored and refitted 1989 Otam by <CompanyName />.</div>

                <div className='mb-5'>
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
                            <div className='font-bold text-xl'>Custom Paint</div>
                        </AccordionSummary>
                        <AccordionDetails style={{ color: '#104895' }}>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam8} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} An old repair trapped water behind it and needs to be fixed`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>An old repair trapped water behind it and needs to be fixed</em></div>

                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam9} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Blueprinting hullside, to identify imperfections, orange spots above stripes are the hull distortions to be repaired`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>Blueprinting hullside, to identify imperfections, orange spots above stripes are the hull distortions to be repaired</em></div>

                                </div>
                            </div>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam10} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Sandblasting complete, exposing gelcoat`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>Sandblasting complete, exposing gelcoat</em></div>

                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam11} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Blueprinting process being performed`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>Blueprinting process being performed</em></div>

                                </div>
                            </div>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam12} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} All hardware being removed, all fiberglass repairs completed`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>All hardware being removed, all fiberglass repairs completed</em></div>

                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam13} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Dismantling steering, trim and drive systems to initiate overhaul of systems`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>Dismantling steering, trim and drive systems to initiate overhaul of systems</em></div>

                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='mb-5'>
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
                            <div className='font-bold text-xl'>Mechanical capabilities</div>
                        </AccordionSummary>
                        <AccordionDetails style={{ color: '#104895' }}>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam14} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Cockpit and interior dismantling in progress (SP)`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>Cockpit and interior dismantling in progress (SP)</em></div>

                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam15} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Breakdown of starboard engine completed`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>Breakdown of starboard engine completed</em></div>

                                </div>
                            </div>


                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam21} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Dismanteling starboard engine and removing transmission`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>Dismanteling starboard engine and removing transmission</em></div>


                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam22} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>


                                </div>
                            </div>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam23} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>


                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam24} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>


                                </div>
                            </div>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam25} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>


                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam26} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Prepare engine room for painting (SP)`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>Prepare engine room for painting (SP)</em></div>


                                </div>
                            </div>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam27} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>


                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam28} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Prepare engine room for painting (SP)`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>



                                </div>
                            </div>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam29} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>


                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam30} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} Prepare engine room for painting (SP)`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>



                                </div>
                            </div>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam19} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>


                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam20} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                    <div className='pt-2 text-center'><em>Hydraulic system breakdown</em></div>


                                </div>
                            </div>

                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='mb-5'>
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
                            <div className='font-bold text-xl'>Electrical services</div>
                        </AccordionSummary>
                        <AccordionDetails style={{ color: '#104895' }}>
                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam17} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>


                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam18} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make}`} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>


                                </div>
                            </div>



                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='mb-5'>
                    <Accordion
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}

                        style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                            style={{ color: '#104895' }}
                        >
                            <div className='font-bold text-xl'>Interiors</div>
                        </AccordionSummary>
                        <AccordionDetails style={{ color: '#104895' }}>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam6} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} `} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>

                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam7} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} `} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                </div>
                            </div>

                        </AccordionDetails>
                    </Accordion>
                </div>


                <div className='mb-5'>
                    <Accordion

                        expanded={expanded === 'panel5'}
                        onChange={handleChange('panel5')}
                        style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                            aria-controls="panel5-content"
                            id="panel5-header"
                            style={{ color: '#104895' }}
                        >
                            <div className='font-bold text-xl'>Exterior</div>
                        </AccordionSummary>
                        <AccordionDetails style={{ color: '#104895' }}>
                            <div className='mb-5'>
                                <img src={Otam1} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} `} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' />
                            </div>

                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam4} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} `} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>

                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam5} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} `} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                </div>
                            </div>



                            <div className='lg:flex lg:gap-5 mx-auto'>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam2} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} `} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>

                                </div>
                                <div className='lg:w-1/2 mb-5'>
                                    <div><img src={Otam3} alt='' title={`${RestorationOtam.Type} ${RestorationOtam.Year} ${RestorationOtam.BoatName} ${RestorationOtam.Length} ${RestorationOtam.Make} `} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                </div>
                            </div>

                        </AccordionDetails>
                    </Accordion>
                </div>

            </div>
        </div>
    )
}

export default Otam