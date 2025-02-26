import React, { useState, useEffect } from 'react';

const Open = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const currentHourInET = now.getUTCHours() - 4; // Eastern Timezone offset

            // Check if it's a Saturday or Sunday, and outside of 9AM to 5PM
            const isWeekend = now.getDay() === 0 || now.getDay() === 6;
            const isOpenNow = !isWeekend && currentHourInET >= 9 && currentHourInET < 17;

            setIsOpen(isOpenNow);
        };

        // Check the status initially and then set up an interval to update it every minute
        checkStatus();
        const intervalId = setInterval(checkStatus, 60000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        < >
            <div className='font-bold clear-both print:hidden print:invisible'>
                <span className={isOpen ? 'open' : 'closed'} >
                    {isOpen ? 'We are Open' : 'We are Closed'}

                </span>
            </div>
        </>
    );
};

export default Open;