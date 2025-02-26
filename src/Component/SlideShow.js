import { useState, useEffect } from "react";
import Ares1 from "../Images/HeadSlide/01.jpg";
import Ares2 from "../Images/HeadSlide/02.jpg";
import Ares3 from "../Images/HeadSlide/03.jpg";
import Ares4 from "../Images/HeadSlide/04.jpg";
import Ares5 from "../Images/HeadSlide/05.jpg";
import Ares6 from "../Images/HeadSlide/06.jpg";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";

const currentImage = [
    { src: Ares1, title: "A World winning Yacht Restyling", alt: "Alt 1" },
    { src: Ares2, title: "Luxury Awaits: Find Your Perfect Yacht Here", alt: "Alt 2" },
    { src: Ares3, title: "Supreme Yacht Painting and Restoration", alt: "Alt 3" },
    { src: Ares4, title: "Yacht Refitting Mastery: 30 Years of Excellence", alt: "Alt 4" },
    { src: Ares5, title: "Expert Yacht Painting: Elevate Your Vessel Today", alt: "Alt 3" },
    { src: Ares6, title: "Setting Sail with Unrivaled Yacht Refurbishments", alt: "Alt 3" }
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previous = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? currentImage.length - 1 : prevIndex - 1));
    };

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex === currentImage.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === currentImage.length - 1 ? 0 : prevIndex + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full print:invisible">
            <div className="absolute z-10 bottom-0 w-full">
                <div className="">
                    <div className="w-full">
                        <div className="bottom-0 ">
                            <h2 className="text-[#ffffff] lg:text-3xl text-right px-5 py-3 bg-[#104895]/40">
                                <b>{currentImage[currentIndex].title}</b>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex w-full h-auto transition-transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {currentImage.map((image, index) => (
                        <img
                            key={image.src}
                            src={image.src}
                            alt={image.alt}
                            className={`w-full h-auto transition-opacity ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                            initial={{ x: 20 }}
                            animate={{ x: index === currentIndex ? 1 : 5 }}
                            transition={{ duration: 5 }}
                            style={{
                                transition: 'opacity 2s ease-in-out', // Apply ease-in-out timing function to all images
                                pointerEvents: index === currentIndex ? 'auto' : 'none',
                            }}
                        />
                    ))}
                </div>
            </div>
            <button className="absolute top-[50%] transform -translate-y-1/2 left-4 hidden" onClick={previous}>
                <ArrowCircleLeftRoundedIcon sx={{ fontSize: 40 }} className="text-white" />
            </button>
            <button className="absolute top-[50%] transform -translate-y-1/2 right-4 hidden" onClick={next}>
                <ArrowCircleRightRoundedIcon sx={{ fontSize: 40 }} className="text-white" />
            </button>
        </div>
    );
};

export default Slideshow;