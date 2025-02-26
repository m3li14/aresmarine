import React from 'react';
import PageHeader from '../Component/PageHeader';
import RestorationData from '../Restoration/Restoration.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Helmet } from 'react-helmet';

const ReelMoney = () => {
    const RestorationReelMoney = RestorationData.find(boat => boat.ID === "4");
    return (
        <div className='text-[#104895]'>
            <PageHeader pageTitle="S/F 1989 90' Reel Money" />

            <Helmet>
                <title data-react-helmet="true">1989 90' Reel Money Burger Sport Fisherman | Complete Refit, Hull Modifications & Custom Paint</title>
                <meta data-react-helmet="true" name="description" content="Discover the extensive refit and Hull Modifications completed on the 1989 90' Reel Money Burger Sport Fisherman. Experience the renewed elegance and state-of-the-art amenities of this exquisite yacht restoration project today!" />
                <meta data-react-helmet="true" property="og:title" content="1989 90' Reel Money Burger Sport Fisherman | Complete Refit, Hull Modifications & Custom Paint" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/ReelMoney/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGReelMoney.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Discover the extensive refit and Hull Modifications completed on the 1989 90' Reel Money Burger Sport Fisherman. Experience the renewed elegance and state-of-the-art amenities of this exquisite yacht restoration project today!" />
            </Helmet>





            {RestorationReelMoney && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationReelMoney.Image} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' alt={`${RestorationReelMoney.Type} ${RestorationReelMoney.Year} ${RestorationReelMoney.BoatName} ${RestorationReelMoney.Length} ${RestorationReelMoney.Make} `} title={`${RestorationReelMoney.Type} ${RestorationReelMoney.Year} ${RestorationReelMoney.BoatName} ${RestorationReelMoney.Length} ${RestorationReelMoney.Make} `} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>
                                        {/* Add TableRow with a line after each row */}
                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationReelMoney.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationReelMoney.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Yeare:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationReelMoney.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationReelMoney.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}
            <div className='text-xl pb-5 px-10'><h2><b>Complete Refit and Hull Modifications of 1989 90' Reel Money Burger Sport Fisherman</b></h2></div>
            <div className='pb-5 px-10'>Discover the extensive refit and Hull Modifications completed on the 1989 90' Reel Money Sport Fisherman. The refit in 2004 included custom hull modifications to increase speed and reduce draft, leading to significant fuel consumption reduction.</div>
            <div className='pb-5 px-10'>The yacht features custom paint and exquisite interior joinery. The main deck pilothouse and crow's nest steering station were added to modernize the original profile, creating three new observation decks. A crow's nest guest seating area was added to the helm station. This modification allowed for space to be provided for a retractable sunshade over the new flybridge settee. Two of these decks have hard overheads to enhance the look.</div>
            <div className='pb-5 px-10'>Complete fairings, a new paint job, and a completely refurbished interior were also part of the extensive refit and modification process. Experience the renewed elegance and state-of-the-art amenities of this exquisite yacht restoration project today!</div>





            <div className='mt-10'>

                <iframe
                    className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle print:hidden"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/rf-ZyJ5csVE?si=ITFPuBB6P2NQSXHL"
                    title="S/F 1989 90' Reel Money Burger Sport Fisherman restoration"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>

            </div>

        </div>
    )
}

export default ReelMoney