import React from 'react';
import boatsData from './Yachts.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Helmet } from 'react-helmet';
import { Divider } from '@mui/material';
import YachtCarousel from './YachtCarousel';
import AfterGlow1 from '../Images/Afterglow/Afterglow-Deck.jpg';
import AfterGlow2 from '../Images/Afterglow/Afterglow-Aft-Deck.jpg';
import AfterGlow3 from '../Images/Afterglow/Afterglow-Aft-Deck-2.jpg';
import AfterGlow4 from '../Images/Afterglow/Afterglow-Aft-Deck-Entry-Salon.jpg';
import AfterGlow5 from '../Images/Afterglow/Afterglow-Salon-Looking-Forward.jpg';
import AfterGlow6 from '../Images/Afterglow/Afterglow-Formal-Dinning.jpg';
import AfterGlow7 from '../Images/Afterglow/Afterglow-Stairs-and-Passageway.jpg';
import AfterGlow8 from '../Images/Afterglow/Afterglow-Galley.jpg';
import AfterGlow9 from '../Images/Afterglow/Afterglow-Galley-2.jpg';
import AfterGlow10 from '../Images/Afterglow/Afterglow-Galley-3.jpg';
import AfterGlow11 from '../Images/Afterglow/Afterglow-Pilothouse.jpg';
import AfterGlow12 from '../Images/Afterglow/Afterglow-Pilothouse-Dinette.jpg';
import AfterGlow13 from '../Images/Afterglow/Afterglow-Skylounge.jpg';
import AfterGlow14 from '../Images/Afterglow/Afterglow-On-Deck-Master.jpg';
import AfterGlow15 from '../Images/Afterglow/Afterglow-On-Deck-Master-2.jpg';
import AfterGlow16 from '../Images/Afterglow/Afterglow-Master-Head.jpg';
import AfterGlow17 from '../Images/Afterglow/Afterglow-Master-Head.jpg';
import AfterGlow18 from '../Images/Afterglow/Afterglow-Guest-Stateroom.jpg';
import AfterGlow19 from '../Images/Afterglow/Afterglow-Guest-Stateroom-2.jpg';
import AfterGlow20 from '../Images/Afterglow/Afterglow-Sundeck.jpg';
import AfterGlow21 from '../Images/Afterglow/Afterglow-Sundeck-2.jpg';
import AfterGlow22 from '../Images/Afterglow/Afterglow-Sun-Deck-and-Tender.jpg';
import AfterGlow23 from '../Images/Afterglow/Afterglow-Overhead-Tender.jpg';
import AfterGlow24 from '../Images/Afterglow/Afterglow-Aft-Deck-3.jpg';
import AfterGlow25 from '../Images/Afterglow/Afterglow-Engine-Room.jpg';
import AfterGlow26 from '../Images/Afterglow/Afterglow-Engine-Room-2.jpg';
import AfterGlow27 from '../Images/Afterglow/Afterglow-Engine-Room-3.jpg';
import AfterGlow28 from '../Images/Afterglow/Afterglow-Engine-Room-4.jpg';
import AfterGlow29 from '../Images/Afterglow/Afterglow-Engine-Room-5.jpg';
import AfterGlow30 from '../Images/Afterglow/Afterglow-Engine-Room-5.jpg';
import AfterGlow31 from '../Images/Afterglow/Afterglow-Bow-Overhead.jpg';
import AfterGlow32 from '../Images/Afterglow/Afterglow-Bow-Deck.jpg';
import AfterGlow33 from '../Images/Afterglow/Afterglow-Bow-Deck-Anchors.jpg';
import AfterGlow34 from '../Images/Afterglow/Afterglow-Bow-Thruster.jpg';
import AfterGlow35 from '../Images/Afterglow/Afterglow-Starboard-Side-Deck.jpg';
import AfterGlow36 from '../Images/Afterglow/Afterglow-New-Stern.jpg';


//https://www.yachtcharterfleet.com/luxury-charter-yacht-46667/just-enough.htm
//https://www.hmy.com/yachts-for-sale/broward-sportfish-1996-lady-jane/



const Afterglow = () => {
    // Filter the boatsData to include only the boat named "Afterglow"
    const afterglowBoat = boatsData.filter(boat => boat.ID === "1");


    return (
        <div className='text-[#104895]'>
            <Helmet>
                <title data-react-helmet="true">1992 Afterglow 126' Christensen Motor Yacht for Sale</title>
                <meta data-react-helmet="true" name="description" content="1992 Afterglow 126' Invest in an experience beyond compare with this remarkable Christensen Tri Deck Motor Yacht." />
                <meta data-react-helmet="true" property="og:title" content="1992 Afterglow 126' Christensen Motor Yacht for Sale" />
                <meta data-react-helmet="true" property="og:type" content="product" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/YachtsForSale/Afterglow/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGAfterglow.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Explore the 1992 Afterglow 126' Christensen Motor Yacht for sale, Afterglow emerges as an enticing prospect for sale as a yacht. Ideal for an enthusiastic new owner seeking adventure, she boasts not only enhanced aesthetics but also a strong emphasis on safety and comfort during travels" />
            </Helmet>
            <div className="lg:flex lg:flex-wrap">
                {/* Map over the filtered afterglowBoat array */}
                {afterglowBoat.map((boat, index) => (
                    <div key={index} className="boat-card">
                        <div className='mx-10 pt-5'>
                            <div className='lg:flex '>
                                <div className='lg:w-3/4 text-xl'><h1><b>{boat.Year} {boat.BoatName} {boat.Length} {boat.Make} {boat.Type} for Sale</b></h1></div>
                                <div className='lg:text-right text-red-900 lg:w-1/4 text-xl pb-3'><b>${boat.Price}</b></div>

                            </div>
                            <div className='mt-3 mb-5'> <Divider style={{ borderBottom: '4px solid #104895', }} /></div>
                        </div>

                        <div className='pb-2'><img src={boat.Image} className='drop-shadow-md border-b-2 border-[#f0f0f0]' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} /></div>

                        <div className='lg:flex gap-5'>
                            <div className='lg:w-1/3'>
                                <TableContainer>
                                    <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                        <TableBody>
                                            {/* Add TableRow with a line after each row */}
                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.Make}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Draft:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.Draft}</b></div></TableCell>
                                            </TableRow>



                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Crew:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.Crew}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Engine Make:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.EngineMake}</b></div></TableCell>
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
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.Refit}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Staterooms:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.Staterooms}</b></div></TableCell>
                                            </TableRow>


                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Hull Material:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.HullMaterial}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Engine Model:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.EngineModel}</b></div></TableCell>
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
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.Beam}</b></div></TableCell>
                                            </TableRow>


                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Guests:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.Guests}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Speed:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.Speed}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" key={index}>
                                                <TableCell><div className='text-[#104895]'><b>Flag:</b></div> </TableCell>
                                                <TableCell><div className='text-[#104895] text-left'><b>{boat.Flag}</b></div></TableCell>
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

                        <div className='mt-10 hidden print:block'>
                            <img src={AfterGlow1} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow2} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow3} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow4} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow5} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow6} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow7} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow8} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow9} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow10} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow11} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow12} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow13} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow14} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow15} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow16} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow17} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow18} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow19} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow20} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow21} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow22} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow23} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow24} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow25} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow26} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow27} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow28} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow29} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow30} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow31} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow32} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow33} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />
                            <img src={AfterGlow34} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0] mx-auto mb-5' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Make} ${boat.Type} for Sale`} />

                        </div>

                        <div className='mt-10 print:hidden'>
                            <YachtCarousel boatName="1992 Afterglow 126' Christensen"
                                images={[

                                    { src: AfterGlow1, title: '| New Running' },
                                    { src: AfterGlow2, title: '| Aft Deck' },
                                    { src: AfterGlow3, title: '| Aft Deck' },
                                    { src: AfterGlow4, title: '| Aft Deck Entry Salon' },
                                    { src: AfterGlow5, title: '| Salon Looking Forward' },
                                    { src: AfterGlow6, title: '| Formal Dinning' },
                                    { src: AfterGlow7, title: '| Stairs and Passageway' },
                                    { src: AfterGlow8, title: '| Galley' },
                                    { src: AfterGlow9, title: '| Galley' },
                                    { src: AfterGlow10, title: '| Galley' },
                                    { src: AfterGlow11, title: '| Pilothouse' },
                                    { src: AfterGlow12, title: '| Pilothouse Dinette' },
                                    { src: AfterGlow13, title: '| Skylounge' },
                                    { src: AfterGlow14, title: '| On Deck Master' },
                                    { src: AfterGlow15, title: '| On Deck Master' },
                                    { src: AfterGlow16, title: '| Master Head' },
                                    { src: AfterGlow17, title: '| VIP Stateroom' },
                                    { src: AfterGlow18, title: '| Guest Stateroom' },
                                    { src: AfterGlow19, title: '| Guest Stateroom' },
                                    { src: AfterGlow20, title: '| Sun Deck' },
                                    { src: AfterGlow21, title: '| Sun Deck' },
                                    { src: AfterGlow22, title: '| Sun Deck and Tender' },
                                    { src: AfterGlow23, title: '| Overhead Tender' },
                                    { src: AfterGlow24, title: '| Aft Deck' },
                                    { src: AfterGlow25, title: '| Engine Room' },
                                    { src: AfterGlow26, title: '| Engine Room' },
                                    { src: AfterGlow27, title: '| Engine Room' },
                                    { src: AfterGlow28, title: '| Engine Room' },
                                    { src: AfterGlow29, title: '| Engine Room' },
                                    { src: AfterGlow30, title: '| Engine Room' },
                                    { src: AfterGlow31, title: '| Bow Overhead' },
                                    { src: AfterGlow32, title: '| Bow Deck' },
                                    { src: AfterGlow33, title: '| Bow Deck Anchors' },
                                    { src: AfterGlow34, title: '| Bow Thruster' },
                                    { src: AfterGlow35, title: '| Starboard Side Deck' },
                                    { src: AfterGlow36, title: '| New Stern' },
                                ]} />



                        </div>


                        <div className="lg:flex lg:gap-5">

                            <div className='mt-10 lg:w-1/2'>

                                <iframe
                                    className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle print:hidden"
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/8CcG5fV0_cA?si=lXLzF8N_iRARm2H7"
                                    title="1992 Afterglow 126' Christensen Motor Yacht for Sale"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>

                            </div>

                            <div className='mt-10 lg:w-1/2'>

                                <iframe
                                    className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle print:hidden"
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/r_ziNX5irI0?si=QxoLdyx2TYXM5410"
                                    title="1992 Afterglow 126' Christensen Motor Yacht for Sale"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>

                            </div>

                        </div>







                    </div>



                ))}
            </div>
        </div >
    )
}

export default Afterglow;