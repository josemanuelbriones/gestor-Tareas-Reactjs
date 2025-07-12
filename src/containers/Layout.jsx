//import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
