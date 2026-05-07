import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Layout = () => {
    const { pathname } = useLocation();
    const isSmallScreen = useMediaQuery("(max-width: 640px)");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return (
        <main>
            {isSmallScreen ? <MobileNav /> : <Navbar />}
            {/*<main>*/}
            <Outlet />
            {/*</main>*/}
            <Footer />
        </main>
    );
};

export default Layout;
