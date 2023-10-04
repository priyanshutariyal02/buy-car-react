import React, { useState } from "react";
import dropdown from "../images/dropdown.png"; // Import the image correctly
import "./DropdownRelevance.css"; // Import your CSS file for styling

function DropdownRelevance() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div onClick={toggleDropdown} className="dropbtn">
                All brands <img src={dropdown} alt="dropdown" />
            </div>
            <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
                {isOpen && (
                    <>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </>
                )}
            </div>
        </div>
    );
}

export default DropdownRelevance;
