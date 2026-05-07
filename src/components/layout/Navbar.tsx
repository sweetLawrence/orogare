import { Button, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import navdata from "../../data/navdata";

const Navbar = () => {
    const [showLogo, setShowLogo] = useState(false);
    const [selectedPath, setSelectedPath] = useState(location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    // Detect small screens
    const isSmallScreen = useMediaQuery("(max-width: 640px)");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setShowLogo(true);
            } else {
                setShowLogo(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setSelectedPath(location.pathname);
    }, []);

    return (
        // <div className={`z-100 bg-white w-full sticky top-0 shadow-md overflow-hidden `}>
        <>
            {/* Upper Section */}
            <div className={`bg-white z-50! sticky px-[4%] h-15 pt-1.5 flex border-b-3 border-[#f6f7f9] `}>
                {/* Logo */}
                <div className="w-14 h-14 mr-5">
                    <Link to="/">
                        <Image src={Logo} />
                    </Link>
                </div>

                {/* Hide Name on Small Screens */}
                {!isSmallScreen && (
                    <Text className="text-secondary-500 font-bold text-[1.3em] pt-[.3em]">
                        Orogare Technical and Vocational College
                    </Text>
                )}

                <Text className="phone text-secondary-500 text-[1.15em] pt-[.6em] ml-auto mr-6">+2547 91964600</Text>
            </div>

            {/* Lower Section */}
            <div
                className={`lower px-[4%] h-max flex items-center justify-between py-2 sticky top-0 z-1000 w-full bg-white ${
                    isSmallScreen ? "h-[70px] " : "h-[70px]"
                }`}
            >
                {/* Small Logo when Scrolling */}
                <div
                    className={`w-14 h-14 pt-1.5 mr-5 transition-transform duration-300 ${
                        showLogo ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                >
                    <Link to="/">
                        <Image src={Logo} />
                    </Link>
                </div>

                <div
                    className={`nav w-[80%] -ml-[13%] transition-transform duration-300 ${
                        showLogo ? "translate-x-20" : "translate-x-0"
                    }`}
                >
                    {navdata.map((item, i) => (
                        <Link
                            key={i}
                            to={`${item.path}`}
                            onClick={() => setSelectedPath(item.path)}
                            className={`relative nav-path text-text-500 mr-4 pb-3.5 p-2 cursor-pointer text-[1.1em]
                  ${selectedPath === item.path ? "text-secondary-500! font-bold" : ""}
                      `}
                        >
                            {item.name}
                            <span
                                className={`absolute left-0 bottom-0 h-1.25 bg-secondary-500 transition-all duration-300 ease-in-out
                  ${selectedPath === item.path ? "w-full scale-x-100" : "w-0 scale-x-0"}`}
                            ></span>
                        </Link>
                    ))}
                </div>

                <Button
                    variant="gradient"
                    gradient={{ from: "#0e8813", to: "#00b4d8" }}
                    onClick={() => navigate("/admissions")}
                    className={"w-[10%]"}
                    // className="bg-gradient-to-r from-secondary-400 to-primary-500 mr-6 w-[10%]"
                >
                    Admission
                </Button>
            </div>

            {/* Mobile Menu */}
            {isSmallScreen && isMenuOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-white shadow-md p-4 flex flex-col">
                    {navdata.map((item, i) => (
                        <Link
                            key={i}
                            to={`${item.path}`}
                            onClick={() => {
                                setSelectedPath(item.path);
                                setIsMenuOpen(false); // Close menu on selection
                            }}
                            className={`p-3 text-lg ${
                                selectedPath === item.path ? "text-secondary-500 font-bold" : ""
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;
