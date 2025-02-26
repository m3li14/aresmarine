import React from 'react';
import Yachts from './YachtsForSale/Yachts';
import CompanyName from './Component/CompanyName';
import { Helmet } from 'react-helmet';
import { Link } from '@mui/material';
import JustEnough1 from './Images/2012JustEnough141.jpg';
import JustEnough2 from './Images/2012JustEnough2.jpg';
import JustEnough3 from './Images/2012JustEnough3.jpg';
import JustEnough4 from './Images/2012JustEnough4.jpg';
import JustEnough5 from './Images/2012JustEnough5.jpg'

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title data-react-helmet="true">Ares Custom Yachts | Expert Yacht Restoration & Refit Services</title>
                <meta data-react-helmet="true" name="description" content="Specializing in yacht refits, repairs, and construction for over 30 years. Offering full-service yacht solutions, from mechanical overhauls to interior joinery." />
                <meta data-react-helmet="true" property="og:title" content="Ares Custom Yachts | Expert Yacht Restoration & Refit Services" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGHome.jpg" />
                <meta data-react-helmet="true" property="og:description" content="With over 30 years of experience, Ares Custom Yachts offers unparalleled yacht refits, repairs, and restoration services. Recognized worldwide for excellence in yacht craftsmanship." />
            </Helmet>
            <div className='lg:flex'>
                <div className='lg:w-2/3 px-10'>
                    <div className='text-[#104895]'>
                        <div className='py-5 text-xl'><b>Expert in Refits, Restyling, Refinishing and Restoration Work</b></div>
                        <div className='pb-3'><b>Rick Pineiro, President</b> of <CompanyName /> has specialized in yacht refits, repairs and construction of yachts for well over 30 years. Experience and opportunities have allowed our busi-ness to provide full yacht service for vessels up to fifty meters. We specialize in modifications and restorations of motor yachts, sailing and high performance vessels of all types. Our work is recognized worldwide as we perform warranty services for US, European and Pacific Rim manufacturers. <CompanyName /> was also a finalist for <Link href='/Restoration/Awards' title=''>“Best Refit” 2011 Awards by the International Super Yacht Society.</Link></div>
                        <div className='pb-3'><b>Company Service Skills;</b> hydraulic repairs and installations to include; stabilizers, bow thrusters, trim tabs, windlass, davits and Arneson drives. <b>Our Mechanical capabilities</b> include: engine, generators, and pump overhauls. Steel, aluminum, and stainless fabrication. <b>Engineering capabilities</b> for refrigeration, plumbing and HVAC systems. <b>Electrical services</b>, to include electronics console design, lighting, security, monitoring and entertainment systems. To further enhance our service we have an interior joinery / cabinet shop along with an experienced exterior carpentry team for your teak decking repairs and in-stallations.</div>
                        <div className='pb-3'>Superstructure re-styling and extensions are becoming an es-sential and integral element of yacht refits. We pride ourselves in our innovation, distinctive design and attention to detail in transforming a dated look to a modern splendor.</div>
                        <div className='pb-2 text-center'><b><em>We are eager to exceed our client's expectations and requirements.</em></b></div>

                        <div className='float-right clear-both RickSig text-5xl font-bold text-[#104895] my-5'>Rick Pineiro</div>
                    </div>
                </div>
                <div className='lg:w-1/3 lg:ml-10'>

                    <div className='mb-2'><img src={JustEnough2} alt='' title='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
                    <div className='mb-2'><img src={JustEnough1} alt='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>

                    {/* <div className='clear-both text-center mx-auto mt-3'><Call /></div> */}
                </div>
            </div>

            <div className='lg:flex lg:gap-5'>
                <div className='lg:w-1/3 mb-2'><img src={JustEnough5} alt='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
                <div className='lg:w-1/3 mb-2'><img src={JustEnough4} alt='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
                <div className='lg:w-1/3 mb-2'><img src={JustEnough3} alt='' className='drop-shadow-md border-b-2 border-[#f0f0f0] mx-auto' /></div>
            </div>



            <div className='clear-both text-[#104895]'>
                <Yachts />
            </div>
        </div>
    )
}

export default Home