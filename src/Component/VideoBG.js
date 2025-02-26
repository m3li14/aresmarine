import React, { lazy, Suspense } from 'react'

const VideoComponent = lazy(() => import('./VideoBackground.js'));

const VideoBG = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <VideoComponent style={{ backgroundSize: 'cover', height: '100%' }} />
            </Suspense>
        </div>
    )
}

export default VideoBG