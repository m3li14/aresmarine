import React from 'react'
import CompanyName from './Component/CompanyName';
import { Helmet } from 'react-helmet';
import PageHeader from './Component/PageHeader';

const MissionStatement = () => {
    return (
        <div className='text-[#104895]'>

            <PageHeader pageTitle="Mission Statement" />

            <Helmet>
                <title data-react-helmet="true">Mission Statement | Ares Custom Yachts</title>
                <meta data-react-helmet="true" name="description" content="At Ares Custom Yachts, we prioritize our clients' dreams and ideas, translating them into original designs. From conception to delivery, we focus on creating timeless, elegant, and functional vessels. Our craftsmanship matches European builders, ensuring we deliver on our promises for every project, whether it's a new-build, conversion, or systems refit." />
                <meta data-react-helmet="true" property="og:title" content="Mission Statement | Ares Custom Yachts" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:url" content="https://aresmarine.com/MissionStatement/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/assets/OGMissionStatement.jpg" />
                <meta data-react-helmet="true" property="og:description" content="At Ares Custom Yachts, we prioritize our clients' dreams and ideas, translating them into original designs. From conception to delivery, we focus on creating timeless, elegant, and functional vessels. Our craftsmanship matches European builders, ensuring we deliver on our promises for every project, whether it's a new-build, conversion, or systems refit." />
            </Helmet>



            <div className='px-10'>
                <div className='pb-5'><b><CompanyName /></b> knows that each client has his own dreams and ideas. We listen because we know that they are passionate and want their dreams translated into their own original designs.</div>
                <div className='pb-5'>From conception to delivery, our client's desires are of the utmost importance at every turn of the project.</div>
                <div className='pb-5'>A client's tastes and lifestyles inspire our work to produce a vessel that is timeless, elegant, functional, and exciting for the owner to own.</div>
                <div className='pb-5'><b><CompanyName /></b> skills are set on par with European builders with the craftsmanship to fulfill every clients dream, no matter what is drawn.</div>
                <div className='pb-2'><b><em>Whether the project is a new-build, conversion or systems refit,</em></b></div>
                <div className='text-center'><b><em><CompanyName /> delivers on their promises.</em></b></div>
            </div>
        </div>
    )
}

export default MissionStatement