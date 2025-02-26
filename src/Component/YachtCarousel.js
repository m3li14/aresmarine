import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const YachtCarousel = ({ boatName, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previous = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div className="absolute top-0 left-0 bg-[#f0f0f0]/70 z-10 text-[#104895] pl-5 py-5 pr-10 lg:w-1/2 rounded-br-full rounded-sm drop-shadow-md border-l-2 border-t-2 border-[#f0f0f0]">
                <div className="text-xl font-bold"><h2>{boatName} {images[currentIndex].title}</h2></div>
            </div>
            <div className="flex items-center justify-center w-full relative rounded-sm drop-shadow-md border-2 border-[#f0f0f0]">
                {images.map((image, index) => (
                    <motion.img
                        key={image.src}
                        src={image.src}
                        alt={`${boatName} ${images[currentIndex].title} for sale`}
                        title={`${boatName} for Sale ${images[currentIndex].title}`}
                        className={`absolute object-cover top-0 left-0 w-full h-full ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                    />
                ))}
                <motion.button
                    className="absolute top-1/2 left-0 "
                    onClick={previous}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowLeftIcon sx={{ fontSize: 50, color: '#f0f0f0', border: 'solid 2px white', backgroundColor: '#DB5726' }} />
                </motion.button>
                <motion.button
                    className="absolute top-1/2 right-0 "
                    onClick={next}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowRightIcon sx={{ fontSize: 50, color: '#f0f0f0', border: 'solid 2px white', backgroundColor: '#DB5726' }} />
                </motion.button>
            </div>
        </div>
    );
};

export default YachtCarousel;