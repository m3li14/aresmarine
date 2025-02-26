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
import MustangSallyMainSalon1 from '../Images/MustangSally/201692MustangSally-MainSalon1.jpg';
import MustangSallyMainSalon2 from '../Images/MustangSally/201692MustangSally-MainSalon2.jpg';
import MustangSallyDinette from '../Images/MustangSally/201692MustangSally-Dinette.jpg';
import MustangSallyMasterStateroom1 from '../Images/MustangSally/201692MustangSally-MasterStateroom-1.jpg';
import MustangSallyMasterStateroom2 from '../Images/MustangSally/201692MustangSally-MasterStateroom-2.jpg';
import MustangSallyMasterStateroom3 from '../Images/MustangSally/201692MustangSally-MasterStateroom-3.jpg';
import MustangSallyForwardGuestCabin from '../Images/MustangSally/201692MustangSally-ForwardGuestCabin.jpg';
import MustangSallyTwinGuestCabin1 from '../Images/MustangSally/201692MustangSally-TwinGuestCabin-1.jpg';
import MustangSallyTwinGuestCabin2 from '../Images/MustangSally/201692MustangSally-TwinGuestCabin-2.jpg';
import MustangSallyFlybridge1 from '../Images/MustangSally/201692MustangSally-Flybridge-1.jpg';
import MustangSallyFlybridge2 from '../Images/MustangSally/201692MustangSally-Flybridge-2.jpg';
import MustangSallyLayout from '../Images/MustangSally/201692MustangSally-Layout.png';
import CompanyName from '../Component/CompanyName';

const MustangSally = () => {

    const RestorationMustangSally = RestorationData.find(boat => boat.ID === "15");

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <div className='text-[#104895]'>
            <PageHeader pageTitle="2016 92' Mustang Sally Sport Fisherman" />

            <Helmet>
                <title data-react-helmet="true">2016 92' Mustang Sally Sport Fisherman Restoration</title>
                <meta data-react-helmet="true" name="description" content="Explore the restoration of the 2016 92' Mustang Sally Sport Fisherman, showcasing meticulous craftsmanship and dedication to preserving maritime heritage." />
                <meta data-react-helmet="true" property="og:title" content="2016 92' Mustang Sally Sport Fisherman Restoration" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/MustangSally/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGDMustangSally.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Follow the journey of the 2016 92' Mustang Sally Sport Fisherman restoration project, showcasing meticulous craftsmanship and dedication to preserving maritime heritage." />
            </Helmet>

            {RestorationMustangSally && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationMustangSally.Image} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' alt={`${RestorationMustangSally.Year} ${RestorationMustangSally.BoatName} ${RestorationMustangSally.Length} ${RestorationMustangSally.Make} ${RestorationMustangSally.Type}`} title={`${RestorationMustangSally.Year} ${RestorationMustangSally.BoatName} ${RestorationMustangSally.Length} ${RestorationMustangSally.Make} ${RestorationMustangSally.Type}`} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationMustangSally.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationMustangSally.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationMustangSally.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationMustangSally.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>

                    <div className='mx-10'>
                        <div className='py-5'>The 2016 92' Mustang Sally Sport Fisherman stands out not only for its exceptional performance and luxurious amenities but also for its unique custom paint job that truly sets it apart. This masterpiece in yacht painting showcases a softer gradient, meticulously applied to enhance its sleek lines and modern design.</div>
                        <div className='pb-5'>In 2018, this stunning vessel underwent an extensive paint enhancement, further elevating its appeal. The yacht now boasts a contemporary luxury interior, reflecting sophistication and comfort at its finest. Complementing the luxurious interior is the custom exterior paintwork, which exemplifies our expertise in marine paint and yacht refinishing.</div>
                        <div className='pb-5'>The hull painting of the Mustang Sally Sport Fisherman is a testament to the high-quality marine paint products used, ensuring durability and a flawless finish. The topside painting and superstructure painting were executed with precision, highlighting the vessel's exquisite craftsmanship.</div>
                        <div className='pb-5'>For those seeking the best marine paint for yachts, the Mustang Sally Sport Fisherman sets a benchmark. The yacht paint used is not only aesthetically pleasing but also eco-friendly, aligning with the growing demand for sustainable yacht painting solutions.</div>
                        <div className='pb-5'>In Florida, this masterpiece was brought to life by <CompanyName /> Yacht Painting Services, one of the leading marine painters in the USA. Our expertise in yacht painting Florida has made us a trusted choice for yacht owners looking for professional yacht painting services.</div>
                        <div className='pb-5'>Choosing the right yacht paint is crucial for maintaining the beauty and integrity of your vessel. With <CompanyName /> Marine Paint Products, you can be assured of high-quality marine coatings that offer both protection and aesthetic appeal.</div>
                        <div className='pb-5'>Whether you're considering a DIY yacht painting project or opting for professional marine painting services, understanding the benefits of professional marine painting can guide you in making an informed decision. From surface preparation to gelcoat repair and antifouling paint application, every step is crucial in achieving a perfect finish.</div>
                        <div className='pb-5'>In conclusion, the custom paintwork on the 2016 92' Mustang Sally Sport Fisherman is a blend of artistry and functionality. With its unique design, eco-friendly marine paint, and expert craftsmanship, this yacht is a true masterpiece on the water.</div>
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
                                <div className='font-bold text-xl'>Interiors</div>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: '#104895' }}>
                                <div className='lg:flex lg:gap-5'>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyMainSalon1} alt="2016 92' Mustang Sally Sport Fisherman, Main Salon" title="2016 92' Mustang Sally Sport Fisherman | Main Salon" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Main Salon</em></div>
                                    </div>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyMainSalon2} alt="2016 92' Mustang Sally Sport Fisherman, Main Salon" title="2016 92' Mustang Sally Sport Fisherman | Main Salon" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Main Salon</em></div>
                                    </div>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyDinette} alt="2016 92' Mustang Sally Sport Fisherman, Dinette" title="2016 92' Mustang Sally Sport Fisherman | Dinette" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Dinette</em></div>
                                    </div>

                                </div>

                                <div className='lg:flex lg:gap-5'>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyMasterStateroom1} alt="2016 92' Mustang Sally Sport Fisherman, Master Stateroom" title="2016 92' Mustang Sally Sport Fisherman | Master Stateroom" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Master Stateroom</em></div>
                                    </div>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyMasterStateroom2} alt="2016 92' Mustang Sally Sport Fisherman, Master Stateroom" title="2016 92' Mustang Sally Sport Fisherman | Master Stateroom" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Master Stateroom</em></div>
                                    </div>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyMasterStateroom3} alt="2016 92' Mustang Sally Sport Fisherman, Master Stateroom" title="2016 92' Mustang Sally Sport Fisherman | Master Stateroom" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Master Stateroom</em></div>
                                    </div>
                                </div>

                                <div className='lg:flex lg:gap-5'>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyForwardGuestCabin} alt="2016 92' Mustang Sally Sport Fisherman, Forward Guest Cabin" title="2016 92' Mustang Sally Sport Fisherman | Forward Guest Cabin" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Forward Guest Cabin</em></div>
                                    </div>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyTwinGuestCabin1} alt="2016 92' Mustang Sally Sport Fisherman, Twin Guest Cabin" title="2016 92' Mustang Sally Sport Fisherman | Twin Guest Cabin" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Twin Guest Cabin</em></div>
                                    </div>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyTwinGuestCabin2} alt="2016 92' Mustang Sally Sport Fisherman, Twin Guest Cabin" title="2016 92' Mustang Sally Sport Fisherman | Twin Guest Cabin" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Twin Guest Cabin</em></div>
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
                                <div className='font-bold text-xl'>Exterior</div>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: '#104895' }}>
                                <div className='lg:flex lg:gap-5'>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyFlybridge1} alt="2016 92' Mustang Sally Sport Fisherman, Flybridge" title="2016 92' Mustang Sally Sport Fisherman | Flybridge" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Flybridge</em></div>
                                    </div>
                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyFlybridge2} alt="2016 92' Mustang Sally Sport Fisherman, Flybridge" title="2016 92' Mustang Sally Sport Fisherman | Flybridge" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Flybridge</em></div>
                                    </div>

                                    <div className='lg:w-1/3 mb-5'>
                                        <div><img src={MustangSallyLayout} alt="2016 92' Mustang Sally Sport Fisherman, Layout" title="2016 92' Mustang Sally Sport Fisherman | Layout" className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto' /></div>
                                        <div className='pt-2 text-center'><em>Layout</em></div>
                                    </div>

                                </div>

                            </AccordionDetails>
                        </Accordion>
                    </div>

                </div>



            )}

        </div>
    )
}

export default MustangSally