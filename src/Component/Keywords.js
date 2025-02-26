import React, { useState, useEffect } from 'react';

const Keywords = () => {
    const keywords = [
        "Yacht refits",
        "Yacht repairs",
        "Yacht construction",
        "Yacht restorations",
        "Full yacht service",
        "Yacht refurbishment",
        "Yacht renovations",
        "Yacht overhauls",
        "Yacht upgrades",
        "Yacht maintenance services"
    ];
    
    const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
        }, 2000); // Change keyword every 2 seconds (adjust as needed)

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [keywords.length]);

    return (
        <div>

            <p>{keywords[currentKeywordIndex]}</p>
        </div>
    );
};

export default Keywords;