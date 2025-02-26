import React, { useState } from 'react';
import PageHeader from '../Component/PageHeader';
import RestorationData from '../Restoration/Restoration.json';
import { Helmet } from 'react-helmet';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import FourAcescockpit1 from '../Images/4Aces/2012524Aces-cockpit.jpg';
import FourAcescockpit2 from '../Images/4Aces/2012524Aces-cockpit-2.jpg';
import FourAces3 from '../Images/4Aces/2012524Aces-3.jpg';
import FourAces4 from '../Images/4Aces/2012524Aces-4.jpg';
import FourAcesCustomPaint1 from '../Images/4Aces/2012524Aces-CustomPaint-1.jpg';
import FourAcesCustomPaint2 from '../Images/4Aces/2012524Aces-CustomPaint-2.jpg';
import FourAcesCustomPaint3 from '../Images/4Aces/2012524Aces-CustomPaint-3.jpg';
import FourAcesCustomPaint4 from '../Images/4Aces/2012524Aces-CustomPaint-4.jpg';
import FourAcesCustomPaint5 from '../Images/4Aces/2012524Aces-CustomPaint-5.jpg';
import FourAcesCustomPaint6 from '../Images/4Aces/2012524Aces-CustomPaint-6.jpg';
import FourAcesCustomPaint7 from '../Images/4Aces/2012524Aces-CustomPaint-7.jpg';
import FourAcesCustomPaint8 from '../Images/4Aces/2012524Aces-CustomPaint-8.jpg';
import FourAcesCustomPaint9 from '../Images/4Aces/2012524Aces-CustomPaint-9.jpg';
import FourAcesCustomPaint10 from '../Images/4Aces/2012524Aces-CustomPaint-10.jpg';
import FourAcesCustomPaint11 from '../Images/4Aces/2012524Aces-CustomPaint-11.jpg';
import FourAcesCustomPaint12 from '../Images/4Aces/2012524Aces-CustomPaint-12.jpg';
import CompanyName from '../Component/CompanyName';

const FourAces = () => {

    const RestorationFourAces = RestorationData.find(boat => boat.ID === "14");

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <div className='text-[#104895]'>
            <PageHeader pageTitle="M/Y 2012 52' 4 Aces" />
            <Helmet>
                <title data-react-helmet="true">2012 52' 4 Aces Viking Custom Yacht Painting</title>
                <meta data-react-helmet="true" name="description" content="Experience luxury with Ares Custom Yachts' custom paintwork on the 52' 4 Aces Viking. Specializing in yacht painting, marine paint, and yacht refinishing in Florida." />
                <meta data-react-helmet="true" property="og:title" content="2012 52' 4 Aces Viking Custom Yacht Painting" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/FourAces/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OG4Aces.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Discover the epitome of yacht painting with Ares Custom Yachts. Offering professional yacht painting services, high-quality marine paint products, and eco-friendly yacht paint options in Florida." />
            </Helmet>

            {RestorationFourAces && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationFourAces.Image} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationFourAces.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationFourAces.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationFourAces.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationFourAces.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}
            <div className='mx-10'>
                <div className='py-5'>Experience the epitome of luxury and elegance with the custom paintwork by <CompanyName /> on the 2012 52' 4 Aces Viking. This yacht showcases a flawless finish that mirrors the beauty of its surroundings, setting new standards in yacht painting.</div>
                <div className='pb-5 text-xl'><b>Custom Interiors Paint</b></div>
                <div className='pb-5'>The interiors of the 4 Aces Viking have been transformed with our custom interiors paint, creating a harmonious blend of style and sophistication. Our team at <CompanyName /> Yacht Painting Services has meticulously chosen marine paint that enhances the yacht's interior ambiance, ensuring a welcoming and luxurious atmosphere for all on board.</div>
                <div className='pb-5 text-xl'><b>Custom Exterior Paint</b></div>
                <div className='pb-5'>The exterior of the 4 Aces Viking is a true masterpiece, reflecting our expertise in yacht paint and marine coatings. The custom exterior paintwork is characterized by its impeccable finish, capturing attention with its mirror-like reflection. From hull painting to topside painting and superstructure painting, each detail has been executed with precision and care.</div>
                <div className='pb-5'>For those in search of the best marine paint for yachts, <CompanyName /> Marine Paint Products offer unparalleled quality and durability. Our eco-friendly yacht paint options not only provide a stunning finish but also prioritize environmental sustainability, making them an ideal choice for conscientious yacht owners.</div>
                <div className='pb-5'>In Florida, <CompanyName /> Yacht Painting Services is recognized as a leader among marine painters in the USA. Our expertise in yacht painting Florida has earned us a reputation for excellence, making us the preferred partner for yacht owners seeking professional yacht painting services and premium marine paint products.</div>
                <div className='pb-5'>Choosing the right yacht paint is essential for preserving the beauty and value of your vessel. With <CompanyName /> Marine Paint Products, you can trust in our commitment to excellence, delivering professional yacht painting services that exceed expectations.</div>
                <div className='pb-5'>Whether you're considering a DIY yacht painting project or opting for professional marine painting services, understanding the benefits of professional marine painting can help you make an informed decision. Our comprehensive services, from surface preparation to gelcoat repair and antifouling paint application, ensure a flawless and long-lasting finish.</div>
                <div className='pb-5'>In conclusion, the custom paintwork on the 2012 52' 4 Aces Viking by <CompanyName /> is a true masterpiece that combines aesthetic appeal, durability, and environmental responsibility. With our unique design, eco-friendly marine paint, and expert craftsmanship, the 4 Aces Viking stands as a symbol of luxury and sophistication on the water.</div>
            </div>

            <div className='mb-5 mx-10'>
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
                        <div className='font-bold text-xl'>Interiors Custom Paint</div>
                    </AccordionSummary>
                    <AccordionDetails style={{ color: '#104895' }}>
                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcescockpit1} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type} Cockpit`} /></div>
                                <div className='pt-2 text-center'><em>Cockpit</em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcescockpit2} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type} Cockpit`} /></div>
                                <div className='pt-2 text-center'><em>Cockpit</em></div>
                            </div>
                        </div>

                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAces3} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAces4} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='mb-5 mx-10'>
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
                        <div className='font-bold text-xl'>Exteriors Custom Paint</div>
                    </AccordionSummary>
                    <AccordionDetails style={{ color: '#104895' }}>
                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint1} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint2} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                        </div>


                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint3} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint4} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                        </div>

                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint5} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint6} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                        </div>

                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint7} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint8} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                        </div>



                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint9} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint10} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em></em></div>
                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='mb-5 mx-10'>
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
                        <div className='font-bold text-xl'>Boat Launching</div>
                    </AccordionSummary>
                    <AccordionDetails style={{ color: '#104895' }}>
                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint11} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em>A hydraulic boat lift in action</em></div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div><img src={FourAcesCustomPaint12} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' alt={`${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} title={` ${RestorationFourAces.Year} ${RestorationFourAces.BoatName} ${RestorationFourAces.Length} ${RestorationFourAces.Make} ${RestorationFourAces.Type}`} /></div>
                                <div className='pt-2 text-center'><em>The boat is positioned above the water surface</em></div>
                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>
            </div>


        </div>
    )
}

export default FourAces