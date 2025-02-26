import React from 'react';
import PageHeader from '../Component/PageHeader';
import RestorationData from '../Restoration/Restoration.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const SeaDiamond = () => {

    const RestorationSeaDiamond = RestorationData.find(boat => boat.ID === "12");

    return (
        <div>
            <PageHeader pageTitle="S/Y 1956 89' Sea Diamond" />



            {RestorationSeaDiamond && (
                <div className='mb-5'>
                    <div className='pb-2'><img src={RestorationSeaDiamond.Image} className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' alt={`${RestorationSeaDiamond.Type} ${RestorationSeaDiamond.Year} ${RestorationSeaDiamond.BoatName} ${RestorationSeaDiamond.Length} ${RestorationSeaDiamond.Make} `} title={`${RestorationSeaDiamond.Type} ${RestorationSeaDiamond.Year} ${RestorationSeaDiamond.BoatName} ${RestorationSeaDiamond.Length} ${RestorationSeaDiamond.Make} `} /></div>

                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-1/2'>
                            <TableContainer>
                                <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                    <TableBody>

                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationSeaDiamond.Make}</b></div></TableCell>
                                        </TableRow>


                                        <TableRow className="table-row">
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationSeaDiamond.Length}</b></div></TableCell>
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
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationSeaDiamond.Year}</b></div></TableCell>
                                        </TableRow>

                                        <TableRow className="table-row" >
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                            <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationSeaDiamond.Refit}</b></div></TableCell>
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

export default SeaDiamond