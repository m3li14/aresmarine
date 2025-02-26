import React from 'react';
import PageHeader from '../Component/PageHeader';
import { Link } from '@mui/material';
import { Divider } from '@mui/material';
import CompanyName from '../Component/CompanyName';
import Miniskirt01 from '../Images/Miniskirt/Miniskirt01.jpg';
import Miniskirt02 from '../Images/Miniskirt/MiniskirtEngineRoom.jpg';
import CustomHelmStations from '../Images/Miniskirt/Miniskirt-Exterior-Modifications-custom-helm-stations.jpg';
import CustomHelmStations2 from '../Images/Miniskirt/Miniskirt-Exterior-Modifications-custom-helm-stations-2.jpg';
import OldMiniskirt from '../Images/Miniskirt/Miniskirt-before-refit-3.jpg';
import NewMiniskirt from '../Images/Miniskirt/Miniskirt-main.jpg';
import MiniskirtRefit1 from '../Images/Miniskirt/Miniskirt-refit-1.jpg';
import MiniskirtRefit2 from '../Images/Miniskirt/Miniskirt-refit-2.jpg';
import MiniskirtRefit3 from '../Images/Miniskirt/Miniskirt-refit-3.jpg';
import RestorationData from '../Restoration/Restoration.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Helmet } from 'react-helmet';

const Miniskirt = () => {

    const RestorationMiniskirt = RestorationData.find(boat => boat.ID === "1");

    return (
        <div className='text-[#104895]'>

            <Helmet>
                <title data-react-helmet="true">Restored 1991 105' Miniskirt | Refit, Repair & Custom Paint</title>
                <meta data-react-helmet="true" name="description" content="Experience the transformation of a 1991 Ron Holland design yacht through a complete restoration, refit, repair, and custom paint. Nominated for Refit of the Year." />
                <meta data-react-helmet="true" property="og:title" content="Restored 1991 105' Ron Holland Yacht | Refit, Repair & Custom Paint" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/Miniskirt/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGMiniskirt.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Discover the award-nominated restoration of a 1991 Ron Holland design yacht. Custom metal flake paint, enhanced seating, and a modernized look. Experience the excellence of our refit and repair services." />
            </Helmet>

            <PageHeader pageTitle="M/S 1991 105' Miniskirt" />

            {RestorationMiniskirt && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationMiniskirt.Image} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationMiniskirt.Year} ${RestorationMiniskirt.BoatName} ${RestorationMiniskirt.Length} ${RestorationMiniskirt.Make} ${RestorationMiniskirt.Type}`} title={`${RestorationMiniskirt.Year} ${RestorationMiniskirt.BoatName} ${RestorationMiniskirt.Length} ${RestorationMiniskirt.Make} ${RestorationMiniskirt.Type}`} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>
                                        {/* Add TableRow with a line after each row */}
                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationMiniskirt.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationMiniskirt.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationMiniskirt.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationMiniskirt.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}



            <div>
                <div className='lg:float-right lg:ml-5 mb-5 lg:text-right'><img src={Miniskirt01} alt='' title='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
                <div className='pb-5 px-10'>This 1991 <Link href='https://ronhollanddesign.com/' title='Ron Holland Design' target='_blank' rel='noopener noreferrer'>Ron Holland</Link> design underwent a complete refit that included replacement of the seven major systems. Further enhancements included <Link href='/Restoration/MiniskirtTestimonial' title='Miniskirt Testimonial'>custom metal flake paint</Link>, doubling the seating capacity of the existing cockpit and building a hard top to encompass it all. The new dual helm stations incorporated all of her new features. A reverse sheer transom door was added to allow easy access to her stern boarding and to personalize her several new exterior modifications which modernized her original look.</div>
                <div className='pb-5 px-10'><Link href='/Restoration/Awards' title='Miniskirt Nominated by the International Super Yacht Society "Refit of the Year” award, 2011'><em>Nominated by the International Super Yacht Society “Refit of the Year” award, 2011, Top 5 Finalist.</em></Link></div>
                <div className='pb-5 px-10'>This was an exciting complete “transformational” refit project, led by an experienced team, Persak & Wurmfeld, an engineering and naval architect company, who was intrinsically involved in the 286' Derecktor “CAKEWALK”, launched in 2010.</div>
                <div className='pb-5 px-10'><CompanyName />, project management and refit specialists recently completed the transformation of the 105' Windship Motorsailer “CHARDONNAY” into “ MINISKIRT” which has been nominated as a finalist in the 2011 International Super Yacht Society “Refit of the Year” award, and was also featured in the May 2011 issue of Showboats International.</div>
                <div className='pb-5 px-10'>With dedicated skilled craftsmen, including mechanical, plumbing, carpentry, interior refinishing, electrical, metal work and painting, <CompanyName /> has transformed dozens of yachts, including a 120' Broward Raised Pilothouse into a <Link href='/YachtsForSale/JustEnough/' title='2012 Just Enough 141 Ares Marine Motor Yacht'>140' Tri-Deck Mega Yacht</Link>.</div>
                <div className='pb-5 px-10'>Having all of the benefits of a new yacht, and not the cost associated with building one, has always been a yachtsman's dream.</div>
                <div className='pb-5 px-10'>By merging the latest in technology, styling, an owner's passion for restoration, the craftsmen and skills of a small mid cap marine company, the transformation of the 105' <Link href='https://ronhollanddesign.com/' title='Ron Holland Design' target='_blank' rel='noopener noreferrer'>Ron Holland design</Link>, fiberglass motor sailor is the culmination of the dream!</div>
                <div className='px-10'>For starters, a complete re-conditioning of the six major systems:</div>
                <div className='px-10'>Machinery, Electrical, Plumbing, HVAC, Hydraulics and Electronics, were either replaced or completely refurbished to 100% throughout the entire vessel.</div>
            </div>
            <div className='mt-10'>


                <div className='lg:float-left lg:mr-5 mb-5'><img src={Miniskirt02} alt='' title='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
                <div className='lg:pt-[70px] px-10' style={{ verticalAlign: 'center' }}>Engine room equipment was evacuated through one small opening in her upper salon (for the reconditioning and reconfiguration process to begin) and to avoid disturbing any of the structural supports or adding collateral damage to the <Link href='https://winchdesign.com/' title='Andrew Winch design' target='_blank' rel='noopener noreferrer'>Andrew Winch design</Link>. Air intakes, supplying the machinery spaces, were re-engineered to today's standards to include engine room fans and air conditioner chillers. Main engines, controls, transmissions (shafts, seals and bearings), generators, exhaust system, fuel delivery systems and all other components found in the engine room were replaced with new equipment. The Hundested system was totally remanufactured to factory specs and upgraded new components, where needed, thus completing the modernization of the propulsion.</div>
            </div>
            <div className='mt-5 container mx-auto'><Divider /></div>
            <div className='clear-both'>

                <div className='pt-5 px-10'>Modifications to her exterior include custom helm stations, transom door with steps, enlargement of the cockpit's original seating to double its capacity, and a newly constructed hardtop covering the entire cockpit. The radar arch was removed and all of the equipment from the arch relocated and reconfigured for suitability of the new electronics. The custom anchoring system, all deck lighting and new pilot house windows complete the exterior changes and complement her profile.</div>
                <div className='lg:flex lg:gap-3'>
                    <div className='my-5'><img src={CustomHelmStations} alt='' title='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto lg:float-right' /></div>
                    <div className='my-5'><img src={CustomHelmStations2} alt='' title='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto lg:float-left' /></div>
                </div>

            </div>

            <div className='clear-both mx-10'>

                <div className='py-5'>All sailing gear was re-conditioned with new parts being installed as needed. All of the rod rigging and running rigging were upgraded with new components.</div>
                <div className='pb-5'>The interior was removed leaving only bulkheads and attached joiner work, exposing all interior pipe work for replacement. Once the plumbing and electrical were replaced the entire interior was refinished.</div>
                <div>The entire teak deck was replaced and laid in a contemporary pattern which complements the beauty of the wood and adds to the exterior's new modern look.</div>
            </div>

            <div className='mt-5 clear-both lg:flex'>

                <div className='lg:w-1/3 my-5'><img src={MiniskirtRefit1} alt='' title='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
                <div className='lg:w-1/3 my-5 lg:mx-2'><img src={MiniskirtRefit2} alt='' title='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
                <div className='lg:w-1/3 my-5'><img src={MiniskirtRefit3} alt='' title='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
            </div>

            <div className='mx-10'>

                <div className='py-5'>The 105' twin screw motor sailor was the first collaboration between <Link href='https://ronhollanddesign.com/' title='Ron Holland Design' target='_blank' rel='noopener noreferrer'>Ron Holland</Link> and <Link href='https://winchdesign.com/' title='Andrew Winch design' target='_blank' rel='noopener noreferrer'>Andrew Winch design</Link>. Originally designed for worldwide cruising and the shallows of the Bahamas, she spent many years at her original owner's home in Boca Raton, Florida where she often went cruising down the inter-coastal waterway, heading to the owner's favorite restaurants.</div>
                <div className='pb-5'>Her new owner took her to the Caribbean this winter (2010) and off to the Med for the summer. His first trans-Atlantic crossing went as planned. The owner is now getting ready for his next venture..</div>
                <div><Link href='https://ronhollanddesign.com/' title='Ron Holland Design' target='_blank' rel='noopener noreferrer'>Ron Holland</Link>'s many years of racing sailboat designs were incorporated into this hull. The volume of this yacht's interior is impressive, even by today's standards, making this a timeless design.</div>
            </div>

            <div className='mt-5 clear-both lg:flex'>

                <div className='my-5 lg:text-left'><img src={OldMiniskirt} alt='' title='' className='lg:mr-10 drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
                <div className='my-5 lg:text-right'><img src={NewMiniskirt} alt='' title='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>

            </div>

        </div >
    )
}

export default Miniskirt