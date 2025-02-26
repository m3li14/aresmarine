import React from 'react';
import boatsData from './Yachts.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import YachtCarousel from './YachtCarousel';
import { Helmet } from 'react-helmet';
import { Divider } from '@mui/material';
import LadyJane1 from '../Images/LadyJane/1996LadyJane87BrowardSportfish1.webp';
import LadyJane2 from '../Images/LadyJane/1996LadyJane87BrowardSportfish2.webp';
import LadyJane3 from '../Images/LadyJane/1996LadyJane87BrowardSportfish3.webp';
import LadyJane4 from '../Images/LadyJane/1996LadyJane87BrowardSportfish4.webp';
import LadyJane5 from '../Images/LadyJane/1996LadyJane87BrowardSportfish5.webp';
import LadyJane6 from '../Images/LadyJane/1996LadyJane87BrowardSportfish6.webp';
import LadyJane7 from '../Images/LadyJane/1996LadyJane87BrowardSportfish7.webp';
import LadyJane8 from '../Images/LadyJane/1996LadyJane87BrowardSportfish8.webp';
import LadyJane9 from '../Images/LadyJane/1996LadyJane87BrowardSportfish9.webp';
import LadyJane10 from '../Images/LadyJane/1996LadyJane87BrowardSportfish10.webp';
import LadyJane11 from '../Images/LadyJane/1996LadyJane87BrowardSportfish11.webp';
import LadyJane12 from '../Images/LadyJane/1996LadyJane87BrowardSportfish12.webp';
import LadyJane14 from '../Images/LadyJane/1996LadyJane87BrowardSportfish14.webp';
import LadyJane15 from '../Images/LadyJane/1996LadyJane87BrowardSportfish15.webp';
import LadyJane16 from '../Images/LadyJane/1996LadyJane87BrowardSportfish16.webp';
import LadyJane17 from '../Images/LadyJane/1996LadyJane87BrowardSportfish17.webp';
import LadyJane18 from '../Images/LadyJane/1996LadyJane87BrowardSportfish18.webp';
import LadyJane19 from '../Images/LadyJane/1996LadyJane87BrowardSportfish19.webp';
import LadyJane20 from '../Images/LadyJane/1996LadyJane87BrowardSportfish20.webp';
import LadyJane21 from '../Images/LadyJane/1996LadyJane87BrowardSportfish21.webp';
import LadyJane22 from '../Images/LadyJane/1996LadyJane87BrowardSportfish22.webp';
import LadyJane23 from '../Images/LadyJane/1996LadyJane87BrowardSportfish23.webp';
import LadyJane24 from '../Images/LadyJane/1996LadyJane87BrowardSportfish24.webp';
import LadyJane25 from '../Images/LadyJane/1996LadyJane87BrowardSportfish25.webp';
import LadyJane26 from '../Images/LadyJane/1996LadyJane87BrowardSportfish26.webp';
import LadyJane27 from '../Images/LadyJane/1996LadyJane87BrowardSportfish27.webp';
import LadyJane28 from '../Images/LadyJane/1996LadyJane87BrowardSportfish28.webp';



const LadyJane = () => {

    const LadyJaneBoat = boatsData.filter(boat => boat.ID === "3");

    return (
        <div className='text-[#104895]'>
            <Helmet>
                <title data-react-helmet="true">1996 Lady Jane 87' Broward Sportfish for Sale</title>
                <meta data-react-helmet="true" name="description" content="Discover the 1996 Lady Jane, an exceptional 87' Broward Sportfish for sale. Designed by Don Blount and offering yacht-like accommodations, this vessel blends performance, comfort, and style. Explore her unique features." />
                <meta data-react-helmet="true" property="og:title" content="1996 Lady Jane 87' Broward Sportfish for Sale" />
                <meta data-react-helmet="true" property="og:type" content="product" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/YachtsForSale/LadyJane" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGLadyJane.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Explore the 1996 Lady Jane, a custom-built 87' Broward Sportfish offering yacht-like accommodations, exceptional performance, and luxurious interiors. Offered by HMY Yacht Sales, Inc., she represents outstanding value for seasoned yachtsmen and first-time buyers alike." />
            </Helmet>
            <div className="lg:flex lg:flex-wrap">
                {/* Map over the filtered afterglowBoat array */}
                {LadyJaneBoat.map((boat, index) => (
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


                        <div className='mt-10'>
                            <YachtCarousel boatName="1996 Lady Jane 87' Broward Sportfish
"
                                images={[

                                    { src: LadyJane1, title: '| ' },
                                    { src: LadyJane2, title: '| ' },
                                    { src: LadyJane3, title: '| ' },
                                    { src: LadyJane4, title: '| ' },
                                    { src: LadyJane5, title: '| ' },
                                    { src: LadyJane6, title: '| ' },
                                    { src: LadyJane7, title: '| ' },
                                    { src: LadyJane8, title: '| ' },
                                    { src: LadyJane9, title: '| ' },
                                    { src: LadyJane10, title: '| ' },
                                    { src: LadyJane11, title: '| ' },
                                    { src: LadyJane12, title: '| ' },
                                    { src: LadyJane14, title: '| ' },
                                    { src: LadyJane15, title: '| ' },
                                    { src: LadyJane16, title: '| ' },
                                    { src: LadyJane17, title: '| ' },
                                    { src: LadyJane18, title: '| ' },
                                    { src: LadyJane19, title: '| ' },
                                    { src: LadyJane20, title: '| ' },
                                    { src: LadyJane21, title: '| ' },
                                    { src: LadyJane22, title: '| ' },
                                    { src: LadyJane23, title: '| ' },
                                    { src: LadyJane24, title: '| ' },
                                    { src: LadyJane25, title: '| ' },
                                    { src: LadyJane26, title: '| ' },
                                    { src: LadyJane27, title: '| ' },
                                    { src: LadyJane28, title: '| ' },


                                ]} />



                        </div>



                    </div>



                ))}
            </div>
        </div >
    )
}

export default LadyJane