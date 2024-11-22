import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { useEffect } from "react";

const Layout = () => {
    const location = useLocation()
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        }
        scrollToTop();
    }, [location.pathname])
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout