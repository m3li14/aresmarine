import React, { useState } from 'react';
import PageHeader from './Component/PageHeader';
import Accordion from '@mui/material/Accordion';
import { Helmet } from 'react-helmet';
import Keywords from './Component/Keywords'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ListItemText from '@mui/material/ListItemText';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CompanyName from './Component/CompanyName';
import Restoration from './Images/Yacht-Restoration.png';
import List from '@mui/material/List';
import MiniskirtExteriorRefinishing from './Images/Miniskirt/MiniskirtExteriorRefinishing.jpg';
import YachtShaftCoupling from './Images/Yacht-Shaft-Coupling.jpg';
import YachtInteriors from './Images/Yacht-Interiors.jpg';
import MarineEngines1 from './Images/Marine-Engines.png';
import MarineEngines2 from './Images/Marine-Engines-2.png';
import MarineEngines3 from './Images/Marine-Engines-3.png';
import MarineEngines4 from './Images/Marine-Engines-4.png';
import Arnesson1 from './Images/Arnesson-Surface-Drive-01.jpg';
import Arnesson2 from './Images/Arnesson-Surface-Drive-02.jpg';
import Arnesson3 from './Images/Arnesson-Surface-Drive-03.jpg';
import Arnesson4 from './Images/Arnesson-Surface-Drive-04.jpg';
import Arnesson5 from './Images/Arnesson-Surface-Drive-05.jpg';
import Arnesson6 from './Images/Arnesson-Surface-Drive-06.jpg';
import Arnesson7 from './Images/Arnesson-Surface-Drive-07.jpg';
import Arnesson8 from './Images/Arnesson-Surface-Drive-08.jpg';
import Arnesson9 from './Images/Arnesson-Surface-Drive-09.jpg';


const Capabilities = () => {

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <div className='text-[#104895]'>

            <Helmet>
                <title data-react-helmet="true">Yacht Capabilities - Expert Restyling, Refit, and Restoration Services</title>
                <meta data-react-helmet="true" name="description" content="Discover our comprehensive yacht capabilities, including expert restyling, hull modifications, interior and exterior refinishing, and more. Trust us for all your yacht maintenance and enhancement needs." />
                <meta data-react-helmet="true" property="og:title" content="Yacht Capabilities - Expert Restyling, Refit, and Restoration Services" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/capabilities" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OG-Capabilities.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Discover our comprehensive yacht capabilities, including expert restyling, hull modifications, interior and exterior refinishing, and more. Trust us for all your yacht maintenance and enhancement needs." />
            </Helmet>


            <PageHeader pageTitle="Capabilities" />

            <div className='mx-10'>

                <div className='lg:flex lg:gap-5'>
                    <div className='lg:w-2/3'>
                        <div className='font-bold text-2xl'><em>EXPERT RESTYLING, REFIT and RESTORATION WORK</em></div>
                        <div className='mt-5'>
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
                                    <div className='font-bold text-xl'>Hull Modifications</div>
                                </AccordionSummary>
                                <AccordionDetails style={{ color: '#104895' }}>

                                    <div>At <CompanyName />, we specialize in transforming yachts into extraordinary vessels with cutting-edge hull modifications. Crafted to meet your unique needs, our solutions enhance performance, efficiency, and aesthetics. Our commitment to innovation ensures that every modification exceeds industry standards, utilizing advanced techniques for optimal results. With open communication and collaboration, we prioritize customer satisfaction, ensuring your vision is realized. Trusted by satisfied clients, we're leaders in the industry, ready to elevate your yachting experience. Contact us today to learn more.</div>

                                </AccordionDetails>
                            </Accordion>

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
                                    <div className='font-bold text-xl'>Extensions and Superstructure Modifications</div>
                                </AccordionSummary>
                                <AccordionDetails style={{ color: '#104895' }}>
                                    <div >In luxury yachting, details matter. We excel in restoration, refit, extensions, and superstructure modifications, redefining yacht design and functionality at <CompanyName />. With meticulous attention, we breathe new life into aging vessels while blending engineering ingenuity with aesthetic refinement. From upgrading interiors to enhancing outdoor spaces, we tailor projects to meet your preferences, integrating advanced technologies for optimal performance. Trusted by satisfied clients, we're the leader in yacht transformations. Elevate your yachting experience with us today.</div>
                                </AccordionDetails>
                            </Accordion>

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
                                    <div className='font-bold text-xl'>Flybridge Enlargements</div>
                                </AccordionSummary>
                                <AccordionDetails style={{ color: '#104895' }}>
                                    <div className='pb-5'>At <CompanyName />, we specialize in crafting bespoke flybridge enlargements that redefine luxury on the water. Our expert team combines precision engineering with innovative design to create spacious, panoramic flybridge decks that elevate the yachting experience.</div>
                                    <div className='pb-5'>Each enlargement is tailored to your unique preferences, whether you envision a serene sun deck or a sophisticated entertainment lounge. We prioritize both form and function, integrating cutting-edge amenities such as Jacuzzis, outdoor kitchens, and state-of-the-art audiovisual systems for unparalleled comfort and entertainment.</div>
                                    <div>With a focus on meticulous craftsmanship and client satisfaction, <CompanyName /> is a trusted leader in flybridge enlargements. Contact us today to discover how we can transform your yacht into a true masterpiece of maritime luxury.</div>
                                </AccordionDetails>
                            </Accordion>

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
                                    <div className='font-bold text-xl'>Davit and Foredeck Modifications</div>
                                </AccordionSummary>
                                <AccordionDetails style={{ color: '#104895' }}>
                                    <div>
                                        Enhance your yacht's functionality and versatility with Davit and Foredeck Modifications. At <CompanyName />, we specialize in customizing yachts to meet your unique needs. Whether you require additional equipment for water sports, tender storage, or outdoor lounging areas, our expert team will design and implement modifications that seamlessly integrate with your yacht's aesthetic and performance. With precision engineering and attention to detail, we ensure that Davit and Foredeck Modifications not only enhance the functionality of your yacht but also elevate its overall appeal. Experience the difference with <CompanyName /> and unlock new possibilities for your yachting adventures.
                                    </div>
                                </AccordionDetails>
                            </Accordion>

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
                                    <div className='font-bold text-xl'>Mast Repair</div>
                                </AccordionSummary>
                                <AccordionDetails style={{ color: '#104895' }}>
                                    <div>
                                        Ensure smooth sailing with expert Mast Repair services from <CompanyName />. Our skilled technicians specialize in repairing and restoring masts to their optimal condition, ensuring the safety and performance of your vessel. From minor repairs to extensive refurbishments, we employ advanced techniques and premium materials to deliver lasting results. With meticulous attention to detail and a commitment to excellence, we'll have your mast back in top shape, ready to conquer the seas. Trust <CompanyName /> for reliable and efficient Mast Repair solutions tailored to your yacht's needs.
                                    </div>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel6'}
                                onChange={handleChange('panel6')}
                                style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                                    aria-controls="panel6-content"
                                    id="panel6-header"
                                    style={{ color: '#104895' }}
                                >
                                    <div className='font-bold text-xl'>Hard Top Fabrications/Modifications</div>
                                </AccordionSummary>
                                <AccordionDetails style={{ color: '#104895' }}>
                                    <div>
                                        Elevate your yacht's comfort and style with our expert Hard Top Fabrications/Modifications. Our skilled team specializes in crafting custom hard tops to enhance your vessel's aesthetics and functionality. Whether you're looking to create a shaded lounging area, install solar panels, or incorporate lighting and audio systems, we have the expertise to bring your vision to life. From concept to completion, we prioritize precision craftsmanship and attention to detail, ensuring a seamless integration with your yacht's design. Experience the ultimate in luxury and convenience with our Hard Top Fabrications/Modifications tailored to your yachting needs.
                                    </div>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel7'}
                                onChange={handleChange('panel7')}
                                style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                                    aria-controls="panel7-content"
                                    id="panel7-header"
                                    style={{ color: '#104895' }}
                                >
                                    <div className='font-bold text-xl'>Aluminum or Fiberglass</div>
                                </AccordionSummary>
                                <AccordionDetails style={{ color: '#104895' }}>
                                    <div>When deciding between aluminum and fiberglass for Hard Top Fabrications/Modifications, consider your priorities. Aluminum offers durability and corrosion resistance, ideal for rugged use. Meanwhile, fiberglass provides versatility in design and aesthetics, with a smooth finish that seamlessly integrates with your yacht's look. Your choice depends on factors like budget and intended use. Let us help you make the best decision for your needs at <CompanyName />.</div>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>
                    <div className='lg:w-1/3'>
                        <div className='text-center pt-5 text-2xl font-bold text-[#104895] print:hidden'><Keywords /></div>
                        <div className='mt-5'><img src={Restoration} alt='' title='' className='mx-auto' /></div>
                    </div>
                </div>

                <div className='font-bold clear-both my-5 text-2xl'><em>EXPERT INTERIOR and EXTERIOR REFINISHING</em></div>


                <div className='lg:flex lg:gap-5'>

                    <div className='lg:w-2/3'>
                        <Accordion
                            expanded={expanded === 'panel8'}
                            onChange={handleChange('panel8')}
                            style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                                aria-controls="panel8-content"
                                id="panel8-header"
                                style={{ color: '#104895' }}
                            >
                                <div className='font-bold text-xl'>JOINER WORK</div>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: '#104895' }}>
                                <div className='lg:float-left mb-10 mr-10'><img src={MiniskirtExteriorRefinishing} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white]' /></div>

                                <div>
                                    <List>
                                        <ListItemText primary="Complete or Partial Yacht Interiors" />
                                    </List>

                                    <List>
                                        <ListItemText primary="Carpentry - Repairs" />
                                    </List>

                                    <List>
                                        <ListItemText primary="Space Planning" />
                                    </List>

                                    <List>
                                        <ListItemText primary="Teak Decking and Moldings" />
                                    </List>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div className='lg:w-1/3'>

                        <Accordion
                            expanded={expanded === 'panel9'}
                            onChange={handleChange('panel9')}
                            style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                                aria-controls="panel9-content"
                                id="panel9-header"
                                style={{ color: '#104895' }}
                            >
                                <div className='font-bold text-xl'>AVAILABLE AT OUR FACILITY</div>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: '#104895' }}>
                                <div>
                                    <List>
                                        <ListItemText primary="Covered Storage" />
                                    </List>

                                    <List>
                                        <ListItemText primary="Dry Storage" />
                                    </List>

                                    <List>
                                        <ListItemText primary="In-Water Storage" />
                                    </List>

                                    <List>
                                        <ListItemText primary="Tank and Bilge Cleaning" />
                                    </List>

                                    <List>
                                        <ListItemText primary="Sand Blasting / Painting" />
                                    </List>

                                    <List>
                                        <ListItemText primary="330 Ton Haul-Out Capacity" />
                                    </List>

                                    <List>
                                        <ListItemText primary="Dockage for Yachts Up to 170 Feet" />
                                    </List>

                                    <List>
                                        <ListItemText primary="Travel Lift 75, 100 and 330" />
                                    </List>

                                    <List>
                                        <ListItemText primary="24 Hour Manned Security" />
                                    </List>


                                </div>
                            </AccordionDetails>
                        </Accordion>


                    </div>

                </div>


                <div className='mt-5'>
                    <Accordion
                        expanded={expanded === 'panel10'}
                        onChange={handleChange('panel10')}
                        style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                            aria-controls="panel10-content"
                            id="panel10-header"
                            style={{ color: '#104895' }}
                        >
                            <div className='font-bold text-xl'><em>SYSTEM UPGRADES to INCLUDE</em></div>
                        </AccordionSummary>
                        <AccordionDetails style={{ color: '#104895' }}>

                            <div className='lg:flex gap-5'>
                                <div className='lg:w-1/2'>
                                    <div>
                                        <List>
                                            <ListItemText primary="Hydraulic - Zero Speed Systems/Stern and Bow Thrusters" />
                                        </List>

                                        <List>
                                            <ListItemText primary="Electrical Systems - Complete Design and Installation" />
                                        </List>

                                        <List>
                                            <ListItemText primary="Navigational Equipment and Controls Including New Helm Designs" />
                                        </List>

                                        <List>
                                            <ListItemText primary="State of the Art Automation and Entertainment Solutions" />
                                        </List>

                                        <List>
                                            <ListItemText primary="Plumbing - Sanitation, Ventilation, Circulating and Transfer Systems" />
                                        </List>

                                        <List>
                                            <ListItemText primary="HVAC - Repairs and Installations" />
                                        </List>




                                    </div>
                                </div>
                                <div className='lg:w-1/4'><img src={YachtShaftCoupling} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white]' /></div>
                                <div className='lg:w-1/4'><img src={YachtInteriors} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white]' /></div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>


                <div className='mt-5'>
                    <Accordion
                        expanded={expanded === 'panel11'}
                        onChange={handleChange('panel11')}
                        style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                            aria-controls="panel11-content"
                            id="panel11-header"
                            style={{ color: '#104895' }}
                        >
                            <div className='font-bold text-xl'><em>Complete Engine Overhauls</em></div>
                        </AccordionSummary>
                        <AccordionDetails style={{ color: '#104895' }}>

                            <div className='my-5 lg:flex lg:gap-5'>
                                <div className='lg:w-1/2'><img src={MarineEngines1} alt='' title='' className='mx-auto' /></div>

                                <div className='lg:w-1/2'><img src={MarineEngines4} alt='' title='' className='mx-auto' /></div>


                            </div>

                            <div className='my-5 lg:flex lg:gap-5'>


                                <div className='lg:w-1/2'><img src={MarineEngines2} alt='' title='' className='mx-auto' /></div>
                                <div className='lg:w-1/2'><img src={MarineEngines3} alt='' title='' className='mx-auto' /></div>

                            </div>




                        </AccordionDetails>
                    </Accordion>
                </div>


                <div className='mt-5'>
                    <Accordion
                        expanded={expanded === 'panel12'}
                        onChange={handleChange('panel12')}
                        style={{ backgroundColor: 'rgba(240, 240, 240, 0.5)' }}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon style={{ color: '#DB5726' }} />}
                            aria-controls="panel12-content"
                            id="panel12-header"
                            style={{ color: '#104895' }}
                        >
                            <div className='font-bold text-xl'><em>Arnesson Surface Drive Maintance and Overhauls</em></div>
                        </AccordionSummary>
                        <AccordionDetails style={{ color: '#104895' }}>

                            <div>



                                <div className='lg:flex lg:gap-5'>
                                    <div className='lg:w-1/3 my-3'><img src={Arnesson1} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white] mx-auto' /></div>
                                    <div className='lg:w-1/3 my-3'><img src={Arnesson2} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white] mx-auto' /></div>
                                    <div className='lg:w-1/3 my-3'><img src={Arnesson3} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white] mx-auto' /></div>
                                </div>


                                <div className='lg:flex lg:gap-5'>
                                    <div className='lg:w-1/3 my-3'><img src={Arnesson4} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white] mx-auto' /></div>
                                    <div className='lg:w-1/3 my-3'><img src={Arnesson5} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white] mx-auto' /></div>
                                    <div className='lg:w-1/3 my-3'><img src={Arnesson6} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white] mx-auto' /></div>
                                </div>


                                <div className='lg:flex lg:gap-5'>
                                    <div className='lg:w-1/3 my-3'><img src={Arnesson8} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white] mx-auto' /></div>
                                    <div className='lg:w-1/3 my-3'><img src={Arnesson7} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white] mx-auto' /></div>
                                    <div className='lg:w-1/3 my-3'><img src={Arnesson9} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[white] mx-auto' /></div>
                                </div>
                            </div>



                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>





        </div>
    )
}

export default Capabilities