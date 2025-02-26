import React from 'react';
import PageHeader from '../Component/PageHeader';
import RestorationData from '../Restoration/Restoration.json';
import { Helmet } from 'react-helmet';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import DNatalinImage1 from '../Images/DNatalin/1979126DNatalin.jpg';
import DNatalinImage2 from '../Images/DNatalin/1979126DNatalin2.jpg';
import DNatalinImage3 from '../Images/DNatalin/1979126DNatalin3.jpg';
import DNatalinImage4 from '../Images/DNatalin/1979126DNatalin4.jpg';
import DNatalinImage5 from '../Images/DNatalin/1979126DNatalin5.jpg';
import DNatalinImage6 from '../Images/DNatalin/1979126DNatalin6.jpg';
import DNatalinImage7 from '../Images/DNatalin/1979126DNatalin7.jpg';
import DNatalinImage8 from '../Images/DNatalin/1979126DNatalin8.jpg';
import DNatalinImage9 from '../Images/DNatalin/1979126DNatalin9.jpg';
import DNatalinImage10 from '../Images/DNatalin/1979126DNatalin10.jpg';
import DNatalinImage11 from '../Images/DNatalin/1979126DNatalin11.jpg';

const DNatalin = () => {

    const RestorationDNatalin = RestorationData.find(boat => boat.ID === "3");
    return (
        <div className='text-[#104895]'>
            <PageHeader pageTitle="M/Y 1979 126' D'Natalin" />

            <Helmet>
                <title data-react-helmet="true">M/Y 1979 126' D'Natalin | Yacht Restoration and Overhaul</title>
                <meta data-react-helmet="true" name="description" content="Discover the meticulously restored 1979 126' D'Natalin, showcasing exceptional yacht repair, joinery work, recoating, and upgrades in a location steeped in luxury and history." />
                <meta data-react-helmet="true" property="og:title" content="M/Y 1979 126' D'Natalin | Yacht Restoration and Overhaul" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/DNatalin" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGDNatalin.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Discover the meticulously restored 1979 126' D'Natalin, showcasing exceptional yacht repair, joinery work, recoating, and upgrades in a location steeped in luxury and history." />
            </Helmet>


            {RestorationDNatalin && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationDNatalin.Image} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' alt={`${RestorationDNatalin.Type} ${RestorationDNatalin.Year} ${RestorationDNatalin.BoatName} ${RestorationDNatalin.Length} ${RestorationDNatalin.Make} `} title={`${RestorationDNatalin.Type} ${RestorationDNatalin.Year} ${RestorationDNatalin.BoatName} ${RestorationDNatalin.Length} ${RestorationDNatalin.Make} `} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationDNatalin.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationDNatalin.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationDNatalin.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationDNatalin.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}

            <div className='text-l clear-both pb-5 container px-10'><b>RESTORED TO HER ORIGINAL SPLENDOR</b></div>

            <div className='lg:flex lg:gap-5'>

                <div className='lg:w-1/2 mb-5'><img src={DNatalinImage1} alt='' title="1979 126' D'Natalin Motor Yacht | Formal Dinning" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>
                <div className='lg:w-1/2 mb-5'><img src={DNatalinImage9} alt='' title="1979 126' D'Natalin Motor Yacht | Master stateroom" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>

            </div>

            <div>

                <div className='pb-5 clear-both container px-10'>She was built as a gift from Adnan Kashoggi to a Saudi Prince, the last yacht delivered by the Benetti family in 1978.</div>
                <div className='pb-5 container px-10'>One unusual request from the prince was to build her with no air conditioning system, only opening windows throughout.</div>
                <div className='pb-5 container px-10'>Careful planning led the way to a complete overhaul and upgrades to her switchboard and sub-panels. Modifying a small engine room to accommodate an entire HVAC system was the subsequent step in line.</div>
                <div className='lg:flex lg:gap-5'>
                    <div className='lg:w-1/3 mb-5'><img src={DNatalinImage2} alt='' title="1979 126' D'Natalin Motor Yacht | Master stateroom" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>
                    <div className='lg:w-1/3 mb-5'><img src={DNatalinImage5} alt='' title="1979 126' D'Natalin Motor Yacht | VIP Stateroom" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>
                    <div className='lg:w-1/3 mb-5'><img src={DNatalinImage8} alt='' title="1979 126' D'Natalin Motor Yacht | Guest Stateroom" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>

                </div>
                <div className='pb-5 container px-10'>Next, was the running of pipe work for the chilled water loops without sacrificing the interior joinery work.</div>
                <div className='pb-5 container px-10'>A previous fire had left the galley area with a “quick fix” white mica galley, where once was impressive joinery work. A companion-way that led to the galley with three large freezers were completely gutted and remanufactured. Her galley was brought back to match the original joinery work found throughout the rest of the vessel.</div>
                <div className='lg:flex lg:gap-5 '>
                    <div className='lg:w-1/3 mb-5'><img src={DNatalinImage3} alt='' title="1979 126' D'Natalin Motor Yacht | Aft deck" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>
                    <div className='lg:w-1/3 mb-5'><img src={DNatalinImage6} alt='' title="1979 126' D'Natalin Motor Yacht | Aft deck" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>
                    <div className='lg:w-1/3 mb-5'><img src={DNatalinImage7} alt='' title="1979 126' D'Natalin Motor Yacht | Aft deck" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>

                </div>
                <div className='pb-5 container px-10'>The interior joinery work was repaired, and all signs of deterioration from window leaks and sun damage throughout D'Natalin were restored to her former magnificence.</div>
                <div className='pb-5 container px-10'>After all woodwork was completed, her interior was refinished, including all of the furnishings.</div>
                <div className='pb-5 container px-10'>Below decks, all tank tops were exposed for recoating. All of the struts were dropped and re-aligned to leave her vibration-free.</div>

                <div className='lg:flex lg:gap-5'>

                    <div className='lg:w-1/2 mb-5'><img src={DNatalinImage11} alt='' title="1979 126' D'Natalin Motor Yacht | En-Suite Bath" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>
                    <div className='lg:w-1/2 mb-5'><img src={DNatalinImage10} alt='' title="1979 126' D'Natalin Motor Yacht | En-Suite Bath" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>

                </div>

                <div className='pb-5 container px-10'>All of D'Natalin's exterior overheads were welded as needed. Corrosion was eliminated from all of her exterior surfaces.</div>
                <div className='pb-5 container px-10'>Her hardware was removed and all surfaces re-finished. The details involved in the restoration of D'Natalin would be an endless story, but to say the least, thirty years after her first commissioning, she is afloat and her owner is enjoying the same privileges as do the owners of much larger yachts.</div>
                <div className='pb-5 container px-10'>D'Natalin glows with rich mahogany and polished brass, vast windows that open to fresh sea air and fine Italian marble. She has 5 luxurious en-suite staterooms.</div>
                <div className='pb-5 container px-10'>D'Natalin's pictures do not truly reflect the attention to detail that the owner has bestowed upon her. All of the soft goods and wall fabrics have been replaced, not to change her look, but to restore her to her original splendor as built.</div>
                <div className='pb-3 text-xl container px-10'><em>1979 126' D'Natalin Motor Yacht | Before refit</em></div>
                <div className='mb-5'><img src={DNatalinImage4} alt='' title="1979 126' D'Natalin Motor Yacht | Before refit" className='mx-auto rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>

            </div>


        </div>
    )
}

export default DNatalin