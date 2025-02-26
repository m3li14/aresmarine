import React from 'react';
import PageHeader from '../Component/PageHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import AwardsData from './Awards.json';
import BestRefitIIS from '../Images/2011InternationalAwards/Best-Refi.png';
import { Divider } from '@mui/material';
import { Helmet } from 'react-helmet';
import IIS from '../Images/2011InternationalAwards/IIS.png';
import Cover from '../Images/2011InternationalAwards/ISS-Cover.jpg';

const Awards = () => {

    const boatID1 = AwardsData.find(boat => boat.ID === "1");
    const boatID2 = AwardsData.find(boat => boat.ID === "2");
    const boatID3 = AwardsData.find(boat => boat.ID === "3");
    const boatID4 = AwardsData.find(boat => boat.ID === "4");
    const boatID5 = AwardsData.find(boat => boat.ID === "5");

    return (
        <div>
            <PageHeader pageTitle="2011 International Awards for Design & Leadership" />
            <Helmet>
                <title data-react-helmet="true">2011 International Awards for Design & Leadership - FINALISTS: BEST REFIT</title>
                <meta data-react-helmet="true" name="description" content="Explore the finalists for the 2011 International Awards for Design & Leadership in the 'BEST REFIT' category, including the nomination of Miniskirt restored by Ares Custom Yachts." />
                <meta data-react-helmet="true" property="og:title" content="2011 International Awards for Design & Leadership - FINALISTS: BEST REFIT" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Restoration/Awards/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGAwards.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Explore the finalists for the 2011 International Awards for Design & Leadership in the 'BEST REFIT' category, including the nomination of Miniskirt restored by Ares Custom Yachts." />
            </Helmet>

            <div className='mb-10'>
                <img src={Cover} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt="" title="" />
            </div>


            {boatID1 && (
                <div className='lg:flex gap-5'>
                    <div className='lg:w-1/2'>
                        <img src={BestRefitIIS} alt='' title='' />


                    </div>
                    <div className='lg:w-1/2'>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow className="table-row-dark" key={boatID1}>
                                        <TableCell colSpan={2}>
                                            <div className='text-center font-bold text-2xl text-[#f0f0f0]'>{boatID1.BoatName}</div>
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <div className=''><img src={boatID1.Image} className='' alt={`${boatID1.BoatName}`} title={`2011 International Awards for Design & Leadership ${boatID1.BoatName}`} /></div>


                        <TableContainer>
                            <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                <TableBody>



                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>LENGTH:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID1.Length}"</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>BUILDER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID1.Builder}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID1.Designer}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>INTERIOR DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID1.InteriorDesigner}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>NAVAL ARCHITECT:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID1.NavalArchitect}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>STYLIST:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID1.Stylist}</b></div></TableCell>
                                    </TableRow>










                                </TableBody>
                            </Table>
                        </TableContainer>


                    </div>


                </div>
            )}


            <div className='lg:flex gap-5 mt-10'>
                {boatID2 && (
                    <div className='lg:w-1/2'>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow className="table-row-dark" key={boatID2}>
                                        <TableCell colSpan={2}>
                                            <div className='text-center font-bold text-2xl text-[#f0f0f0]'>{boatID2.BoatName}</div>
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className=''><img src={boatID2.Image} className='' alt={`${boatID2.BoatName}`} title={`2011 International Awards for Design & Leadership ${boatID2.BoatName}`} /></div>


                        <TableContainer>
                            <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                <TableBody>
                                    {/* Add TableRow with a line after each row */}
                                    <TableRow className="table-row" key={boatID2}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>LENGTH:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID2.Length}"</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>BUILDER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID2.Builder}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID2.Designer}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>INTERIOR DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID2.InteriorDesigner}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>NAVAL ARCHITECT:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID2.NavalArchitect}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>STYLIST:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID2.Stylist}</b></div></TableCell>
                                    </TableRow>










                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
                {boatID3 && (
                    <div className='lg:w-1/2'>

                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow className="table-row-dark" key={boatID3}>
                                        <TableCell colSpan={2}>
                                            <div className='text-center font-bold text-2xl text-[#f0f0f0]'>{boatID3.BoatName}</div>
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className=''><img src={boatID3.Image} className='' alt={`${boatID3.BoatName}`} title={`2011 International Awards for Design & Leadership ${boatID3.BoatName}`} /></div>


                        <TableContainer>
                            <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                <TableBody>
                                    {/* Add TableRow with a line after each row */}
                                    <TableRow className="table-row" key={boatID2}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>LENGTH:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID3.Length}"</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>BUILDER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID3.Builder}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID3.Designer}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>INTERIOR DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID3.InteriorDesigner}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>NAVAL ARCHITECT:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID3.NavalArchitect}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>STYLIST:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID3.Stylist}</b></div></TableCell>
                                    </TableRow>










                                </TableBody>
                            </Table>
                        </TableContainer>


                    </div>
                )}

            </div>


            <div className='lg:flex gap-5 mt-10'>
                {boatID4 && (
                    <div className='lg:w-1/2'>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow className="table-row-dark" key={boatID4}>
                                        <TableCell colSpan={2}>
                                            <div className='text-center font-bold text-2xl text-[#f0f0f0]'>{boatID4.BoatName}</div>
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className=''><img src={boatID4.Image} className='' alt={`${boatID4.BoatName}`} title={`2011 International Awards for Design & Leadership ${boatID4.BoatName}`} /></div>


                        <TableContainer>
                            <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                <TableBody>
                                    {/* Add TableRow with a line after each row */}
                                    <TableRow className="table-row" key={boatID2}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>LENGTH:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID4.Length}"</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>BUILDER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID4.Builder}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID4.Designer}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>INTERIOR DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID4.InteriorDesigner}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>NAVAL ARCHITECT:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID4.NavalArchitect}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>STYLIST:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID4.Stylist}</b></div></TableCell>
                                    </TableRow>










                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
                {boatID5 && (
                    <div className='lg:w-1/2'>

                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow className="table-row-dark" key={boatID5}>
                                        <TableCell colSpan={2}>
                                            <div className='text-center font-bold text-2xl text-[#f0f0f0]'>{boatID5.BoatName}</div>
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className=''><img src={boatID5.Image} className='' alt={`${boatID4.BoatName}`} title={`2011 International Awards for Design & Leadership ${boatID4.BoatName}`} /></div>


                        <TableContainer>
                            <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                <TableBody>
                                    {/* Add TableRow with a line after each row */}
                                    <TableRow className="table-row" key={boatID2}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>LENGTH:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID5.Length}"</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>BUILDER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID5.Builder}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID5.Designer}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>INTERIOR DESIGNER:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID5.InteriorDesigner}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>NAVAL ARCHITECT:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID5.NavalArchitect}</b></div></TableCell>
                                    </TableRow>
                                    <TableRow className="table-row" key={boatID1}>
                                        <TableCell><div className='text-[#104895]' style={{ textAlign: 'right' }}><b>STYLIST:</b></div></TableCell>
                                        <TableCell><div className='text-[#104895] text-left'><b>{boatID5.Stylist}</b></div></TableCell>
                                    </TableRow>










                                </TableBody>
                            </Table>
                        </TableContainer>


                    </div>
                )}

            </div>

            <div className='font-bold text-2xl text-[#104895] mt-10 mx-10'>International Superyacht Society 2011 Awards</div>
            <div className='my-5'><Divider /></div>
            <div className='lg:flex lg:gap-5'>
                <div className='lg:w-1/3'>
                    <img src={IIS} className='mx-auto' alt="" title="" />
                </div>
                <div className='lg:w-2/3 text-[#104895]'>
                    <div className='text-center text-2xl font-bold pb-5'>2011 INTERNATIONAL SUPERYACHT DESIGN AWARDS</div>
                    <div className='text-center text-2xl font-bold'>FINALISTS - “BEST REFIT”</div>
                </div>
            </div>

            <div className='mt-10'>
                {AwardsData && (
                    <TableContainer>
                        <Table>

                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold', color: '#f0f0f0', textAlign: 'center' }} className="table-row-dark">NAME</TableCell>
                                    <TableCell style={{ fontWeight: 'bold', color: '#f0f0f0', textAlign: 'center' }} className="table-row-dark">LENGTH</TableCell>
                                    <TableCell style={{ fontWeight: 'bold', color: '#f0f0f0', textAlign: 'center' }} className="table-row-dark">BUILDER/REFIT</TableCell>
                                    <TableCell style={{ fontWeight: 'bold', color: '#f0f0f0', textAlign: 'center' }} className="table-row-dark">DESIGNER</TableCell>
                                    <TableCell style={{ fontWeight: 'bold', color: '#f0f0f0', textAlign: 'center' }} className="table-row-dark">INT. DESIGNER</TableCell>
                                    <TableCell style={{ fontWeight: 'bold', color: '#f0f0f0', textAlign: 'center' }} className="table-row-dark">NAVAL ARCH.</TableCell>
                                    <TableCell style={{ fontWeight: 'bold', color: '#f0f0f0', textAlign: 'center' }} className="table-row-dark">STYLIST</TableCell>
                                </TableRow>
                                {AwardsData.map((boat, index) => (

                                    <TableRow key={index} className="table-row">
                                        <TableCell>{boat.BoatName}</TableCell>
                                        <TableCell>{boat.Length}</TableCell>
                                        <TableCell>{boat.Builder}</TableCell>
                                        <TableCell>{boat.Designer}</TableCell>
                                        <TableCell>{boat.InteriorDesigner}</TableCell>
                                        <TableCell>{boat.NavalArchitect}</TableCell>
                                        <TableCell>{boat.Stylist}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </div>

        </div>
    );
}
export default Awards