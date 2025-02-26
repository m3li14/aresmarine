import React from 'react';
import PageHeader from '../Component/PageHeader';
import RestorationData from '../Restoration/Restoration.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const TheProgram = () => {

    const RestorationTheProgram = RestorationData.find(boat => boat.ID === "13");

    return (
        <div>




            {RestorationTheProgram && (
                <div className='mb-5'>
                    <PageHeader pageTitle={`${RestorationTheProgram.Year} ${RestorationTheProgram.Length} ${RestorationTheProgram.BoatName} ${RestorationTheProgram.Make} ${RestorationTheProgram.Type}`} />
                    <div className='pb-2'><img src={RestorationTheProgram.Image} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' alt={`${RestorationTheProgram.Year} ${RestorationTheProgram.BoatName} ${RestorationTheProgram.Length} ${RestorationTheProgram.Make} ${RestorationTheProgram.Type}`} title={`${RestorationTheProgram.Year} ${RestorationTheProgram.BoatName} ${RestorationTheProgram.Length} ${RestorationTheProgram.Make} ${RestorationTheProgram.Type}`} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationTheProgram.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationTheProgram.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationTheProgram.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationTheProgram.Refit}</b></div></TableCell>
                                        </TableRow>



                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>



                </div>



            )}
        </div>
    )
}

export default TheProgram