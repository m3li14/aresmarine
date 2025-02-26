import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Logo from '../Images/Ares-Custom-Yachts.png';
import Open from './Open';
import PhoneIcon from '@mui/icons-material/Phone';
import SlideShow from './SlideShow';



const drawerWidth = 320;

const Main = styled('main')(({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Navigation = ({ children }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const phoneNumber = '9546462797';

    const handlePhoneClick = () => {
        window.location.href = 'tel:' + phoneNumber;
    };

    return (
        <div>
            <AppBar position="fixed" open={open} sx={{ color: '#104895', backgroundColor: '#ffffff' }}>
                <Toolbar className=''>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        className='text-[#DB5726] print:invisible'
                    >
                        <MenuIcon />
                    </IconButton>
                    <div component="div">
                        <Link href='/'><img src={Logo} alt='' className='w-[100px]' /></Link>
                    </div>

                    <div style={{ flexGrow: 1 }} />



                    <div className='invisible print:visible'>
                        <div className='text-center'><Open /></div>
                        <div className='text-center'>(954) 646 2797</div>

                    </div>
                    <div>

                        <div className='text-center'><Button onClick={handlePhoneClick} title='Call Ares Custom Yachts'>

                            <PhoneIcon sx={{ color: '#DB5726', textAlign: 'center' }} className='print:invisible mx-auto' />
                        </Button></div>
                        <div className='text-center'><Open /></div>
                    </div>


                </Toolbar>

            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor: 'transparent'
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} >
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List className='text-[#104895]'>
                    {[
                        { text: 'Home', link: '/', title: "Expert Yacht Restoration & Refit Services" },
                        { text: 'Capabilities', link: '/Capabilities', title: "Yacht Capabilities - Expert Restyling, Refit, and Restoration Services" },

                        { text: 'Previous Projects', link: '/PreviousRestoration', title: "Yacht Restoration and Refurbishment Services" },

                        { text: 'Custom Paint', link: '/CustomPaint', title: "Yacht Painting, Marine Coatings & Finishing Florida, USA" },
                        {
                            text: 'Yachts For Sale', link: '/YachtsForSale/Yachts', title: "Yachts for Sale in Florida, USA"
                        },
                        {
                            text: 'Videos', link: '/Videos', title: "Yacht Restoration and Refit Videos"
                        },
                        { text: 'Mission Statment', link: '/MissionStatment', title: "Mission Statment" },
                        { text: 'Contact', link: '/Contact', title: "Contact Ares Marine" },
                    ].map(({ text, link, title }) => (
                        <ListItem key={text} sx={{ '&:hover': { color: '#DB5726', fontWeight: 'bold' } }} divider >
                            <Link href={link} style={{ fontWeight: 'bold' }} color="text-[#104895]" underline="none" title={title}>

                                <ListItemText primary={<span style={{ fontWeight: 'bold' }}>{text}</span>} />
                            </Link>

                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Main open={open}>
                <DrawerHeader />
                <div><SlideShow /></div>
                {children}
            </Main>

        </div>
    );
};

export default Navigation;