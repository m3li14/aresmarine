import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Afterglow1 from '../Images/Afterglow-AFTDECK1.jpg';
import Afterglow2 from '../Images/Afterglow-AFTDECK2.jpg';
import Afterglow3 from '../Images/Afterglow-AFTDECKENTRYSALON.jpg';
import Afterglow4 from '../Images/Afterglow-SALONLOOKINGFORWARD.jpg';

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const images = [
        {
            src: Afterglow1, description: '1992 Afterglow 126 Christensen Tri Deck Motor Yacht | AFT DECK'
        },
        { src: Afterglow2, description: '1992 Afterglow 126 Christensen Tri Deck Motor Yacht | AFT DECK' },
        { src: Afterglow3, description: '1992 Afterglow 126 Christensen Tri Deck Motor Yacht | AFT DECK ENTRY SALON' },
        { src: Afterglow4, description: '1992 Afterglow 126 Christensen Tri Deck Motor Yacht | SALON LOOKING FORWARD' },
    ];

    const totalImages = images.length;
    const autoplayInterval = 5000; // Adjust autoplay interval as needed (in milliseconds)

    useEffect(() => {
        let autoplayTimer;

        if (!isPaused) {
            autoplayTimer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
            }, autoplayInterval);
        }

        return () => {
            clearInterval(autoplayTimer);
        };
    }, [currentIndex, isPaused, totalImages]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    };

    const handleImageClick = () => {
        // Handle clicking on the image (optional)
    };

    const handlePause = () => {
        setIsPaused((prevPaused) => !prevPaused);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
                // className='slideshow-container'
                className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]'
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={handleImageClick}
            >
                <motion.img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].description}

                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                    }}
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <div
                    className='description'
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        zIndex: '1',
                        padding: '25px',
                        backgroundColor: '#104895',
                        color: '#ffffff',
                        marginTop: '15px',
                        // borderLeft: '2px solid white',
                        borderRight: '1px solid white',
                        borderTop: '1px solid white',
                        borderBottom: '1px solid white',
                        // borderTopRightRadius: '35px',
                        borderBottomRightRadius: '45px'
                    }}
                >
                    {images[currentIndex].description}
                </div>
                <div
                    className='overlay'
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <div style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)' }}>
                        <IconButton onClick={handlePrev} size="large">
                            <ArrowBackIcon />
                        </IconButton>
                    </div>
                    <div style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)' }}>
                        <IconButton onClick={handleNext} size="large">
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;