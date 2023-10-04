import React, { useState } from "react";
import search from "../images/search.png";
import "./Navbar.css";
import DropdownRelevance from "./DropdownRelevance";
import DropdownAllBrands from "./DropdownAllBrands";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-body">
            <div className="nav-search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="nav-search-symbol">
                <a href="#">
                    <img src={search} alt="search" />
                </a>
            </div>
            <div className="nav-relevance-dropdown">
                <DropdownRelevance />
            </div>
            <div className="nav-all-brands-dropdown">
                <DropdownAllBrands />
            </div>
        </div>
    );
}

export default Navbar;
