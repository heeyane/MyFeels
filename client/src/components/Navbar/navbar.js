import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Logo from "../../assets/myfeels-logo-lg.png"

function NavMenu({ logoutUser }) {
    // state for home page
    const [isHome, setIsHome] = useState(false);
    // get current page
    let location = useLocation();

    // changes state if current page is home page
    useEffect(() => {
        const path = location.pathname;
        if (path === "/" || path === "/home" || path === "/my-feels") {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }, [location]);

    return (
        <Navbar bg="dark" variant="dark" className="mt-2 mb-5 pt-4">
            <div className="container">
                <Navbar.Brand as={Link} to="/home" className="mr-sm-4">
                    <img alt="logo" src={Logo} width="100" className="d-inline-block mr-2" />
                </Navbar.Brand>
                {isHome ? (
                    <Nav className="ml-auto">
                        <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/add">
                            New Entry
                        </Nav.Link>
                        <Nav.Link as={Link} to="/review">
                            Review
                        </Nav.Link>
                        <Nav.Link as={Link} to="/learn">
                            Learn
                        </Nav.Link>
                        <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                )}
            </div>
        </Navbar>
    );
}

export default NavMenu;