import React from 'react';
import boatsData from './Yachts.json';
import { Helmet } from 'react-helmet';
import { Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const GoingFission = () => {

    const GoingFissionBoat = boatsData.filter(boat => boat.ID === "4");

    return (
        <div className='text-[#104895]'>
            <Helmet>
                <title>2001 70' Going Fission Hatteras Sport Fisherman for Sale</title>
                <meta name="description" content="Explore the luxurious 2001 70' Going Fission Hatteras Sport Fisherman for sale. Built by Hatteras, featuring Detroit Diesel engines, fiberglass hull, and excellent condition. Don't miss out on this exceptional yacht!" />
                <meta property="og:title" content="2001 70' Going Fission Hatteras Sport Fisherman for Sale" />
                <meta property="og:type" content="product" />
                <meta property="og:url" content="https://aresmarine.com/YachtsForSale/GoingFission" />
                <meta property="og:image" content="https://webdesignexpressions.net/assets/OGGoingFission.jpg" />
                <meta property="og:description" content="Explore the luxurious 2001 70' Going Fission Hatteras Sport Fisherman for sale. Built by Hatteras, featuring Detroit Diesel engines, fiberglass hull, and excellent condition. Don't miss out on this exceptional yacht!" />
            </Helmet>

            <div className="lg:flex lg:flex-wrap">
                {/* Map over the filtered afterglowBoat array */}
                {GoingFissionBoat.map((boat, index) => (
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

        </div>
    )
}

export default GoingFission