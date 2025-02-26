import React from 'react';
import boatsData from './Yachts.json';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CallIcon from '@mui/icons-material/Call';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import PageHeader from '../Component/PageHeader';

const theme = createTheme({
    palette: {
        primary: {
            main: "#DB5726", // custom primary color
        },
        secondary: {
            main: "#1B7C88", // custom secondary color
        },
    },
});

const Yachts = () => {
    return (
        <div className='text-[#104895]'>
            <div className='text-xl mt-5 font-bold'>
                <PageHeader pageTitle="Yachts for Sale" />
                <Helmet>
                    <title data-react-helmet="true">Yachts for Sale in Florida, USA | Motor Yachts & Sportfish</title>
                    <meta data-react-helmet="true" name="description" content="Explore a wide selection of yachts for sale in Florida, USA, including motor yachts and sportfish. We offers premium yachts for sale, providing luxury and performance. Find your dream yacht today!" />
                    <meta data-react-helmet="true" property="og:title" content="Yachts for Sale in Florida, USA | Motor Yachts & Sportfish " />
                    <meta data-react-helmet="true" property="og:type" content="website" />
                    <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/YachtsForSale/Yachts" />
                    <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGYachtsForSale.jpg" />
                    <meta data-react-helmet="true" property="og:description" content="Explore a wide selection of yachts for sale in Florida, USA, including motor yachts and sportfish. We offers premium yachts for sale, providing luxury and performance. Find your dream yacht today!" />
                </Helmet>
            </div>
            <div className="lg:flex lg:flex-wrap">
                {boatsData.map((boat, index) => (
                    <div key={index} className="lg:w-1/3">

                        <div className='mx-8'>
                            <div className=''><b>{boat.Year} {boat.BoatName} {boat.Length} {boat.Type}</b></div>
                            <div className='pb-2'><span className='text-red-900'>${boat.Price}</span>
                            </div>
                        </div>
                        <div className='pb-2 mx-3'>
                            <Link href={`${boat.Specification}`}><img src={boat.Image} className='drop-shadow-md border-b-2 border-[#f0f0f0]' alt={`${boat.Year} ${boat.BoatName} ${boat.Length} for Sale`} title={`${boat.Year} ${boat.BoatName} ${boat.Length} ${boat.Type} for Sale`} /></Link>
                        </div>
                        <div className='lg:flex mb-5 print:hidden'>
                            <div className='lg:w-1/2 m-2 lg:mr-2'>
                                <ThemeProvider theme={theme}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        type="submit"
                                        color="primary"
                                        component="a"
                                        href={`${boat.Specification}`}
                                        title={`${boat.Year} ${boat.BoatName} ${boat.Length} Specification`}

                                    >
                                        <ReadMoreIcon />
                                        &nbsp;&nbsp;
                                        <b>Specification</b>
                                    </Button>
                                </ThemeProvider>
                            </div>
                            <div className='lg:w-1/2 lg:float-right m-2 text-right'>
                                <ThemeProvider theme={theme}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        type="submit"
                                        color="secondary"
                                        component="a"
                                        href={`tel:${boat.Phone}`}
                                    >
                                        <CallIcon />
                                        &nbsp;&nbsp;
                                        <b>Call Us</b>
                                    </Button>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    );
}

export default Yachts;