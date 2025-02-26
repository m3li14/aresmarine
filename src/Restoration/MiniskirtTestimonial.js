import React from 'react';
import PageHeader from '../Component/PageHeader';
import Testimonial from '../Images/Miniskirt/Miniskirt-Testimonial-1.jpg';
import Testimonial2 from '../Images/Miniskirt/Miniskirt-side.jpg';
import Testimonial3 from '../Images/Miniskirt/Miniskirt-Yacht-1.jpg';
import Testimonial4 from '../Images/Miniskirt/Miniskirt-Marine-Finishes.png';

import { Divider } from '@mui/material';
import CompanyName from '../Component/CompanyName';
import { Link } from '@mui/material';
import Logo from '../Images/Ares-Custom-Yachts.png';

const MiniskirtTestimonial = () => {
    return (
        <div>
            <PageHeader pageTitle="M/S 1991 105' Miniskirt Testimonial" />

            <div className='lg:flex lg:gap-5'>
                <div className='bg-[#ffffff] text-[#39939b] p-5 text-left rounded-sm drop-shadow-md border-2 border-[#f0f0f0]'>
                    <div className='pb-5 text-bold text-2xl'>Specifications</div>
                    <div className='font-bold'>Name</div>
                    <div>Miniskirt</div>
                    <div className='my-3'> <Divider /></div>

                    <div className='font-bold'>Type</div>
                    <div className=''>Sailing Boat</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Length</div>
                    <div >105 ft (32 m)</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Builder</div>
                    <div >Windship (1991)</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Naval Architact</div>
                    <div>Ron Holland Design</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Interior design</div>
                    <div >Andrew Winch Design</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold pb-5'>Paint</div>
                    <div className='font-bold'>Primer</div>
                    <div >DuPont 18510S</div>
                    <div>Epoxy Primer</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Superstucture, stripes, hardtop</div>
                    <div>Dupont Imron Ms600</div>
                    <div>Polyurethane Topcoat</div>
                    <div>"Beguile White"</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Mast, Boom</div>
                    <div>DuPont Imron MS600</div>
                    <div>Polyurethane Topcoat</div>
                    <div>“Absolute White”</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Hull</div>
                    <div>DuPont Imron MS100</div>
                    <div>Polyurethane Basecoat</div>
                    <div>“Miniskirt Titanium”</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Helm, Boom Inscription</div>
                    <div>DuPont Imron MS100</div>
                    <div>Polyurethane Basecoat</div>
                    <div>“Silver Metallic”</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Clear Coat</div>
                    <div>DuPont Imron MS1</div>
                    <div>Polyurethane Clearcoat</div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Refit By</div>
                    <div><CompanyName /></div>
                    <div>
                        <div className='mt-5'>
                            <Link href='/'><img src={Logo} alt='' className='w-[200px]' /></Link>
                        </div>
                    </div>
                    <div className='my-3'> <Divider /></div>
                    <div className='font-bold'>Images:</div>
                    <div>Juerg Schreiter, Juerg Schreiter</div>
                    <div>Photo Video, Inc.</div>
                    <div>Ft. Lauderdale, Florida</div>
                    <div className='my-3'> <Divider /></div>
                    <div>Copyright © 2010 DuPont.</div>
                    <div>The DuPont Oval Design and DuPont</div>
                    <div>are trademarks or registered</div>
                    <div>trademarks of E.i .du Pont</div>
                    <div>de Nemours and Company or its affiliates.</div>
                    <div>All rights reserved.</div>





                </div>
                <div>
                    <div><img src={Testimonial} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>
                    <div className='mt-5'><img src={Testimonial2} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>
                </div>
            </div>

            <div className='mt-5 lg:flex lg:gap-5 text-[#104895]'>
                <div className='lg:w-1/2'>
                    <div className='pb-5'>This custom built, composite sailing boat was the first collaborative effort between designers Ron Holland and Andrew Winch. Launched in 1981, Miniskirt was purchased in 2008 by Elias Atencio. Shortly thereafter, Miniskirt underwent many upgrades, which included enlarging the cockpit, adding a custom hardtop, adding a reverse sheer transom door, replacing the helm pedestals, and several modifications to the exterior hull.</div>
                    <div className='pb-5'>“I wanted to stay true to the original design while modernizing the exterior. Essential to the success of this product would be the combination of colors to accent her new contemporary line,” said Elias. The original build was finished entirely in Matterhorn White. The new paint scheme, conceived over several meetings between Elias and representatives from ARES Custom Yachts and DuPont, features two solid and two metallic colors. DuPont's extensive color capability provided Elias with the design freedom he needed to actualize his dream.</div>
                    <div>“I'm most impressed with the consistency of the metallic colors", said Rick Pineiro, president of ARES Custom Yachts. “typically with a project this size the metallic flake will have a tendency to mottle and the final appearance will appear</div>
                </div>
                <div className='lg:w-1/2'>

                    <div className='pb-5'>blotchy. But with DuPont Imron the metallics were easy to float and they setup perfectly".</div>

                    <div className='pb-5'>“It's amazing how many people stop to admire the finish.” Said Elias, “and they all want to know the name of the color - I just tell them it's DuPont Miniskirt Titanium”.</div>
                    <div className='lg:float-right lg:ml-5'>
                        <div><img src={Testimonial3} alt='' title='' className='rounded-sm drop-shadow-md border-2 border-[#f0f0f0]' /></div>
                        <div><img src={Testimonial4} alt='' title='' className='' /></div>

                    </div>
                    <div className='pb-5'>DuPont Marine Finishes is a complete system of products scientifically engineered to deliver the marine industry's best appearance, performance and corrosion protection.</div>
                    <div className='pb-5'>www.marinefinishes.dupont.com</div>
                    <div>1.800.GETDUPONT.</div>

                </div>

            </div>


        </div>
    )
}

export default MiniskirtTestimonial