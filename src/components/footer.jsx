import React from 'react';
import "./footer.css";
import linkedin from "../assets/linkedin.svg";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="footer-text">© 2025 Shreeyali Singh — Building dreams, one pixel at a time.</span>
                <div className="footer-icons">
                    <a href="https://github.com/Shreeyalisingh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:shreeyalisingh26@gmail.com" aria-label="Email">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;