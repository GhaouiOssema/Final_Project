import React from "react";
import "./Footer.css";

const Footer = ({ toggle }) => {
    return (
        <div className={toggle ? "page-footer" : "page-footer-toggle-closed"}>
            <div className="page-footer-inner">
                {" "}
                2021 © Smart School Theme By
                <span> GoMyCode Team</span>
            </div>
        </div>
    );
};

export default Footer;
