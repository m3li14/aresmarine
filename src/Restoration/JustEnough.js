import React from 'react';
import PageHeader from '../Component/PageHeader';
import CompanyName from '../Component/CompanyName';
import { Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShopIcon from '@mui/icons-material/Shop';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import RestorationData from '../Restoration/Restoration.json';
import YachtCarousel from '../YachtsForSale/YachtCarousel';
import JustEnough1 from '../Images/JustEnough/JustEnough.jpg';
import JustEnough2 from '../Images/JustEnough/JustEnough-1.jpg';
import JustEnough3 from '../Images/JustEnough/JustEnough-2.jpg';
import JustEnough4 from '../Images/JustEnough/JustEnough-3.jpg';
import JustEnough6 from '../Images/JustEnough/JustEnough-5.jpg';
import JustEnough7 from '../Images/JustEnough/JustEnough-6.jpg';
import JustEnough8 from '../Images/JustEnough/JustEnough-7.jpg';
import JustEnough9 from '../Images/JustEnough/JustEnough-8.jpg';

const theme = createTheme({
    palette: {
        primary: {
            main: "#DB5726",
        },
        secondary: {
            main: "#1B7C88",
        },
    },
});

const JustEnough = () => {

    const RestorationJustEnough = RestorationData.find(boat => boat.ID === "2");

    return (
        <div className='text-[#104895]'>




            {RestorationJustEnough && (
                <div>
                    <PageHeader pageTitle={`${RestorationJustEnough.Year} ${RestorationJustEnough.Length} ${RestorationJustEnough.BoatName} ${RestorationJustEnough.Make} ${RestorationJustEnough.Type}`} />

                    <Helmet>
                        <title data-react-helmet="true">{`Complete Restoration of ${RestorationJustEnough.Year} ${RestorationJustEnough.Length} ${RestorationJustEnough.BoatName} ${RestorationJustEnough.Make} ${RestorationJustEnough.Type} in Florida`}</title>
                        <meta data-react-helmet="true" name="description" content="Discover the complete restoration of the 2012 Ares Marine Motor Yacht 'Just Enough', Experience its renewed elegance and state-of-the-art amenities. Learn more about this exquisite yacht restoration project today!" />
                        <meta data-react-helmet="true" property="og:title" content="Complete Restoration of 2012 Just Enough 141' Ares Marine Motor Yacht in Florida" />
                        <meta data-react-helmet="true" property="og:type" content="website" />
                        <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/YachtsForSale/JustEnough/" />
                        <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGJustEnough.jpg" />
                        <meta data-react-helmet="true" property="og:description" content="Discover the complete restoration of the 2012 Ares Marine Motor Yacht 'Just Enough', a 141' masterpiece located in Florida. Experience its renewed elegance and state-of-the-art amenities. Learn more about this exquisite yacht restoration project today!" />
                    </Helmet>
                    <div className='mb-5'>
                        <div className='pb-2'><img src={RestorationJustEnough.Image} className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' alt={`${RestorationJustEnough.Year} ${RestorationJustEnough.BoatName} ${RestorationJustEnough.Length} ${RestorationJustEnough.Make} ${RestorationJustEnough.Type}`} title={`${RestorationJustEnough.Year} ${RestorationJustEnough.BoatName} ${RestorationJustEnough.Length} ${RestorationJustEnough.Make} ${RestorationJustEnough.Type}`} /></div>

                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <TableContainer>
                                    <Table sx={{ backgroundColor: 'transparent' }} aria-label="empty table">


                                        <TableBody>
                                            {/* Add TableRow with a line after each row */}
                                            <TableRow className="table-row">
                                                <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Builder:</b></div></TableCell>
                                                <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationJustEnough.Make}</b></div></TableCell>
                                            </TableRow>


                                            <TableRow className="table-row">
                                                <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Length:</b></div> </TableCell>
                                                <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationJustEnough.Length}</b></div></TableCell>
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
                                                <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationJustEnough.Year}</b></div></TableCell>
                                            </TableRow>

                                            <TableRow className="table-row" >
                                                <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>Refit Year:</b></div> </TableCell>
                                                <TableCell style={{ width: '50%' }}><div className='text-[#104895]'><b>{RestorationJustEnough.Refit}</b></div></TableCell>
                                            </TableRow>



                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>



                    </div>

                </div>

            )}


            <div className='mx-10 '>

                <div className='pb-5'>
                    Starting life as a 106 Broward Motor yacht, this vessel was torn down to the hull frames and underwent extensive yacht refurbishment. Completely redesigned, it was skillfully extended to an impressive 142 feet, showcasing the expertise of our team in yacht construction.
                </div>
                <div className='pb-5'>
                    Her complete yacht refit brought her up to Rina Class standards, ensuring top-notch quality and compliance. The addition of zero-speed stabilizers completed the modernization process, enhancing stability and comfort during voyages.
                </div>
                <div className='pb-5'>
                    Fabricating a completely new superstructure to match her new hull length was just the beginning of this remarkable transformation. In addition, a large lazarette was added to increase storage capacity, demonstrating our commitment to providing a full yacht service.
                </div>
                <div className='pb-5'>
                    All new machinery, hydraulics, complete electrical & plumbing systems, as well as state-of-the-art electronics, were meticulously installed, showcasing our dedication to yacht upgrades. Step on board, and you'll find yourself immersed in a brand-new interior with 5 guest cabins, each exuding luxury and comfort, showcasing our expertise in yacht restorations.
                </div>
                <div>
                    "Just Enough" enjoys an excellent charter reputation, thanks to our dedication to excellence in yacht repairs and renovations. Her cruiser-style interior layout allows separation of the guest staterooms and provides ample space for social gatherings, with a large salon and aft deck area as well.
                </div>

                <div className='clear-both mx-auto mt-10 text-center'>
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                            component="a"
                            href='/YachtsForSale/JustEnough'
                            title={`${RestorationJustEnough.Year} ${RestorationJustEnough.BoatName} ${RestorationJustEnough.Length} ${RestorationJustEnough.Type} available for sale`}
                        >
                            <ShopIcon />
                            &nbsp;&nbsp;
                            <b> {RestorationJustEnough.Year} {RestorationJustEnough.BoatName} {RestorationJustEnough.Length} {RestorationJustEnough.Make} {RestorationJustEnough.Type} for sale</b>
                        </Button>
                    </ThemeProvider>
                    <Link href='' title="2012 Just Enough 141' Ares Marine Motor Yacht for Sale"></Link>
                </div>


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
                    className="rounded-sm drop-shadow-md border-b-2 border-[white] mx-auto w-full aspect-video align-middle"
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