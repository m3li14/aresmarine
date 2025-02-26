import React from 'react';
import VideoTemp from '../Images/Videos/Tempo12.mp4';

const VideoBackground = () => {
    return (
        <div style={{ zIndex: '0' }}>

            <video playsInline autoPlay loop muted className="fixed inset-0 bg-cover w-full h-full bg-no-repeat object-cover opacity-20 print:hidden">
                {/* <source src="https://webdesignexpressions.net/assets/Temp.mp4" type="video/mp4" /> */}

                <source src={VideoTemp} type="video/mp4" />
            </video>

        </div>
    );
};

export default VideoBackground;
