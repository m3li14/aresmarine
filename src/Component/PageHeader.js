import React from 'react';
import { Divider } from '@mui/material';


const PageHeader = ({ pageTitle }) => {


    return (
        <header className='text-[#104895]'>
            <div className='mx-5'>
                <div className='px-4 pt-5'><h1 className='text-2xl font-bold pt-2'>{pageTitle}</h1></div>
                <div className='mt-3 mb-5'> <Divider style={{ borderBottom: '4px solid #104895', }} /></div>
            </div>
        </header>
    );
};


export default PageHeader