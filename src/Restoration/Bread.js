import React, { useState } from 'react';
import PageHeader from '../Component/PageHeader';
import { Helmet } from 'react-helmet';
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
import BreadKanter1 from '../Images/Bread/BreadKanter1.jpg';
import BreadKanter2 from '../Images/Bread/BreadKanter2.jpg';
import BreadKanter3 from '../Images/Bread/BreadKanter3.jpg';
import BreadKanter4 from '../Images/Bread/BreadKanter4.jpg';
import BreadKanter5 from '../Images/Bread/BreadKanter5.jpg';
import BreadKanter6 from '../Images/Bread/BreadKanter6.jpg';
import BreadKanter7 from '../Images/Bread/BreadKanter7.jpg';
import BreadKanter8 from '../Images/Bread/BreadKanter8.jpg';
import BreadKanter9 from '../Images/Bread/BreadKanter9.jpg';
import BreadKanter10 from '../Images/Bread/BreadKanter10.jpg';
import BreadKanter11 from '../Images/Bread/BreadKanter11.jpg';
import BreadKanter12 from '../Images/Bread/BreadKanter12.jpg';
import BreadKanter13 from '../Images/Bread/BreadKanter13.jpg';
import BreadKanter14 from '../Images/Bread/BreadKanter14.jpg';
import BreadKanter15 from '../Images/Bread/BreadKanter15.jpg';
import BreadKanter16 from '../Images/Bread/BreadKanter16.jpg';
import BreadKanter17 from '../Images/Bread/BreadKanter17.jpg';
import BreadKanter18 from '../Images/Bread/BreadKanter18.jpg';
import BreadKanter19 from '../Images/Bread/BreadKanter19.jpg';
import BreadKanter20 from '../Images/Bread/BreadKanter20.jpg';
import BreadKanter21 from '../Images/Bread/BreadKanter21.jpg';
import BreadKanter22 from '../Images/Bread/BreadKanter22.jpg';
import BreadKanter23 from '../Images/Bread/BreadKanter23.jpg';
import BreadKanter24 from '../Images/Bread/BreadKanter24.jpg';
import BreadKanter25 from '../Images/Bread/BreadKanter25.jpg';
import BreadKanter26 from '../Images/Bread/BreadKanter26.jpg';
import BreadKanter27 from '../Images/Bread/BreadKanter27.jpg';
import BreadKanter28 from '../Images/Bread/BreadKanter28.jpg';
import BreadKanter29 from '../Images/Bread/BreadKanter29.jpg';
import BreadKanter30 from '../Images/Bread/BreadKanter30.jpg';
import BreadKanter31 from '../Images/Bread/BreadKanter31.jpg';
import BreadKanter32 from '../Images/Bread/BreadKanter32.jpg';

const Bread = () => {

    const RestorationBread = RestorationData.find(boat => boat.ID === "11");

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <div className='text-[#104895]'>
            <PageHeader pageTitle="2007 137' Bread Kanter Motor Yacht" />
            <Helmet>
                <title data-react-helmet="true">2007 137' Bread Kanter Motor Yacht Restoration</title>
                <meta data-react-helmet="true" name="description" content="Explore the restoration journey of a 2007 137' Bread Kanter Motor Yacht. Learn about its history, features, and the meticulous restoration process." />
                <meta data-react-helmet="true" property="og:title" content="2007 137' Bread Kanter Motor Yacht Restoration" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/Bread/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGBread.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Explore the restoration journey of a 2007 137' Bread Kanter Motor Yacht. Learn about its history, features, and the meticulous restoration process." />
            </Helmet>

            {RestorationBread && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationBread.Image} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationBread.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationBread.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationBread.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationBread.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}

            <div className='mx-10'>

                <div className='pb-5'>Originally launched in 2007, 'Bread' emerges as a timeless testament to classic maritime elegance. This 120' canoe stern motoryacht was meticulously restored to its former glory, with a comprehensive refurbishment completed in 2012. Spearheaded by a collaborative effort between Kanter Yachts in Ontario, Rolly Marine in Fort Lauderdale, FL, and Rybovich Shipyard in West Palm Beach, FL, every aspect of 'Bread' received meticulous attention.</div>
                <div className='pb-5'>The restoration encompassed a complete overhaul of its engines, major mechanical components, driveline, and quad fin Naiad Zero Speed Stabilizers. Both the interior and exterior woodwork were painstakingly crafted to exacting standards, ensuring a seamless fusion of modern luxury and nostalgic charm. Careful consideration was given to preserving its original naval planning and architecture, resulting in a vessel that exudes timeless sophistication.</div>
                <div className='pb-5'>Today, 'Bread' stands as a masterpiece of maritime craftsmanship, offering a richly appointed sanctuary for discerning owners and guests. With its spacious layout and impeccable attention to detail, this yacht is perfectly suited for entertaining large parties and comfortably accommodating up to 8 guests.</div>
                <div className='pb-5'>'Bread' is more than a yacht; it's a symbol of refined elegance and unwavering attention to detail. Whether gracing the waters of bustling marinas or commanding attention on open seas, 'Bread' epitomizes luxury and prestige, making it a standout presence in any nautical setting worldwide.</div>
            </div>





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

                        <div><img src={BreadKanter1} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>New Running</em></div>

                        <div><img src={BreadKanter26} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter27} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter28} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter29} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter30} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter31} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter32} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>


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
                        <div><img src={BreadKanter2} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter3} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter4} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter5} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter6} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter7} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter8} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter9} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter10} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter11} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter12} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>


                        <div><img src={BreadKanter13} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter14} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter15} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter16} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter17} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter18} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter19} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter20} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter21} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter22} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>

                        <div><img src={BreadKanter23} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} /></div>
                        <div className='pt-2 pb-5 text-center'><em></em></div>


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

                        <div><img src={BreadKanter24} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type} | Engine Room`} /></div>
                        <div className='pt-2 pb-5 text-center'><em>Engine Room</em></div>

                        <div><img src={BreadKanter25} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type}`} title={` ${RestorationBread.Year} ${RestorationBread.BoatName} ${RestorationBread.Length} ${RestorationBread.Make} ${RestorationBread.Type} | Engine Room`} /></div>
                        <div className='pt-2 text-center'><em>Engine Room</em></div>


                    </AccordionDetails>
                </Accordion>
            </div>



        </div>
    )
}

export default Bread