import React from 'react';
import boatsData from './Yachts.json';
import { Helmet } from 'react-helmet';
import { Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import YachtCarousel from './YachtCarousel';
import JustEnough1 from '../Images/JustEnough/JustEnough.jpg';
import JustEnough2 from '../Images/JustEnough/JustEnough-1.jpg';
import JustEnough3 from '../Images/JustEnough/JustEnough-2.jpg';
import JustEnough4 from '../Images/JustEnough/JustEnough-3.jpg';
import JustEnough6 from '../Images/JustEnough/JustEnough-5.jpg';
import JustEnough7 from '../Images/JustEnough/JustEnough-6.jpg';
import JustEnough8 from '../Images/JustEnough/JustEnough-7.jpg';
import JustEnough9 from '../Images/JustEnough/JustEnough-8.jpg';

const JustEnough = () => {

    const JustEnoughBoat = boatsData.filter(boat => boat.ID === "2");

    return (
        <div className='text-[#104895]'>
            <Helmet>
                <title data-react-helmet="true">2012 Just Enough 141' Ares Marine Motor Yacht for Sale</title>
                <meta data-react-helmet="true" name="description" content="Explore the luxurious 2012 Ares Marine Motor Yacht 'Just Enough', a 141' masterpiece offering unparalleled comfort and amenities. Contact us today!" />
                <meta data-react-helmet="true" property="og:title" content="2012 Just Enough 141' Ares Marine Motor Yacht for Sale" />
                <meta data-react-helmet="true" property="og:type" content="product" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/YachtsForSale/JustEnough/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGJustEnough.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Explore the luxurious 2012 Ares Marine Motor Yacht 'Just Enough', a 141' masterpiece offering unparalleled comfort and amenities. Contact us today!" />
            </Helmet>
            <div className="lg:flex lg:flex-wrap">
                {/* Map over the filtered afterglowBoat array */}
                {JustEnoughBoat.map((boat, index) => (
                    <div key={index} className="boat-card">
                        <div className='mx-10 pt-5'>
                            <div className='lg:flex'>
                                <div className='lg:w-3/4 text-xl'><h1><b>{boat.Year} {boat.BoatName} {boat.Length} {boat.Make} {boat.Type} for Sale</b></h1></div>
                                <div className='lg:text-right text-red-900 lg:w-1/4 text-xl pb-3'><b>${boat.Price}</b></div>
                            </div>
                            <div className='mt-3 mb-5'> <Divider style={{ borderBottom: '4px solid #104895', }} /></div>
                        </div>

                        <div className='pb-2 '><img src={boat.Image} className='drop-shadow-md border-b-2 border-[#f0f0f0]' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} /></div>

                        <div className='lg:flex gap-5'>
                            <div className='lg:w-1/3'>
                                <TableContainer>
                                    <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                        <TableBody>
                                            {/* Add TableRow with a line after each row */}
                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.Make}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Draft:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.Draft}</b></div></TableCell>
                                            </TableRow>



                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Crew:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.Crew}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Engine Make:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.EngineMake}</b></div></TableCell>
                                            </TableRow>


                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>

                            <div className='lg:w-1/3'>
                                <TableContainer>
                                    <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                        <TableBody>
                                            {/* Add TableRow with a line after each row */}
                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Built / Refit:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.Refit}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Staterooms:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.Staterooms}</b></div></TableCell>
                                            </TableRow>


                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Hull Material:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.HullMaterial}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Engine Model:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.EngineModel}</b></div></TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <div className='lg:w-1/3'>
                                <TableContainer>
                                    <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                        <TableBody>
                                            {/* Add TableRow with a line after each row */}
                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Beam:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.Beam}</b></div></TableCell>
                                            </TableRow>


                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Guests:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.Guests}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Speed:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.Speed}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Flag:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895]'><b>{boat.Flag}</b></div></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>

                        <div className='mx-10'>

                            <div className='pt-5'><b>{boat.Description}</b></div>
                            <div className='pt-5'><b>{boat.Description2}</b></div>
                            <div className='pt-5'><b>{boat.Description3}</b></div>
                            <div className='pt-5'><b>{boat.Description4}</b></div>
                            <div className='pt-5'><b>{boat.Description5}</b></div>
                            <div className='pt-5'><b>{boat.Description6}</b></div>
                        </div>



                    </div>



                ))}
            </div>

            <div className='mt-10'>
                <YachtCarousel boatName="2012 Just Enough 141' Ares Marine Motor Yacht"
                    images={[

                        { src: JustEnough1, title: '| Starboard Profile' },
                        { src: JustEnough2, title: '| Hot Tub' },
                        { src: JustEnough3, title: '| Flybridge Deck' },
                        { src: JustEnough4, title: '| Aft Flybridge Deck' },

                        { src: JustEnough6, title: '| Sky Lounge' },
                        { src: JustEnough7, title: '| Aft View Sky Lounge' },
                        { src: JustEnough8, title: '| Sky Lounge Bar' },
                        { src: JustEnough9, title: '| Main Salon' },

                    ]} />



            </div>

            <div className='mt-10'>

                <iframe
                    className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/PMckCWW2TOw?si=t0qjEBsjLfFRPOST"
                    title="2012 Just Enough 141' Ares Marine Motor Yacht for Sale"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>

            </div>
        </div >
    )
}

export default JustEnough