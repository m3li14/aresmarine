import React from 'react';
import PageHeader from './Component/PageHeader';
import { Helmet } from 'react-helmet';

const Videos = () => {
    return (
        <div >
            <Helmet>
                <title data-react-helmet="true">Yacht Restoration and Refit Videos</title>
                <meta data-react-helmet="true" name="description" content="Watch our yacht restoration and refit videos showcasing hull modifications, extensions, superstructure modifications, flybridge enlargements, mast repair, and more. Explore our projects, including the restoration of 56' Magnum Racing High Performance, 90' Burger Sport Fisherman, 105' Windship, and Ares 135." />
                <meta data-react-helmet="true" property="og:title" content="Yacht Restoration and Refit Videos" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/Videos" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGVideos.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Watch our yacht restoration and refit videos showcasing hull modifications, extensions, superstructure modifications, flybridge enlargements, mast repair, and more. Explore our projects, including the restoration of 56' Magnum Racing High Performance, 90' Burger Sport Fisherman, 105' Windship, and Ares 135." />
            </Helmet>
            <PageHeader pageTitle="Yacht Restoration: Transforming Dreams" />
            <div className='px-10'>
                <div className='lg:flex lg:gap-5 my-5'>
                    <div className='lg:w-1/2'>
                        <iframe
                            className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/g8nOaR_gfQw?si=M3_hU2mwbSX3RQW8"
                            title="Ares 135 Yacht restoration"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className='lg:w-1/2'>
                        <iframe
                            className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/z7UVTaRlRZc?si=mjOi7QcPVPvIpltS"
                            title="Ares 135 Yacht restoration"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <div className='lg:flex lg:gap-5 my-5'>
                    <div className='lg:w-1/2'>
                        <iframe
                            className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/8OWfv1xrI6k?si=VJyUc-GdI9AEu43k"
                            title="Miniskirt restoration"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className='lg:w-1/2'>
                        <iframe
                            className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/7FSvClTWMAM?si=du8U9azoxzupq9Kc"
                            title="Miniskirt & Ares 135 restoration"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <div className='lg:flex lg:gap-5 my-5'>
                    <div className='lg:w-1/2'>
                        <iframe
                            className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/7FSvClTWMAM?si=n4vW0kPy-tWIeoIL"
                            title="ISS Refit Nominee 2011, 105' Windship restoration"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className='lg:w-1/2'>
                        <iframe
                            className="rounded-sm drop-shadow-md border-2 border-[white] mx-auto w-full aspect-video align-middle"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/00dW-HNGNFw?si=jawXiEmlas2rjUau"
                            title="56' Magnum Racing High Performance"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos