import React, { useState, useEffect } from 'react';
import Headercss from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const determineActiveSection = () => {
        const sections = ['hero', 'about', 'share', 'snippets']; 
        const scrollPosition = window.scrollY; 

        const activeSectionId = sections.find(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const { top, bottom } = section.getBoundingClientRect();
                return top <= 0 && bottom > 0; 
            }
            return false;
        });

        return activeSectionId; 
    };

    useEffect(() => {
        const handleScroll = () => {
            const sectionId = determineActiveSection();
            
            
            setActiveSection(sectionId);
        };

     
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <header className={Headercss.AppHeader}>
            <a href="#hero" className={Headercss.logo}>UISnippets</a>
            <div className={`${Headercss.menuIcon} ${Headercss.burger}`} onClick={toggleNavbar}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <nav className={`${Headercss.nav} ${isOpen ? Headercss.active : ''}`}>
                <ul>
                    <li><a href="#hero" className={activeSection === 'hero' ? Headercss.activelink : ''}>Home</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? Headercss.activelink : ''}>About</a></li>
                    <li><a href="#share" className={activeSection === 'share' ? Headercss.activelink : ''}>Share</a></li>
                    <li><a href='#snippets' className={activeSection === 'snippets' ? Headercss.activelink : ''}>Snippets</a></li> 
                </ul>
            </nav>
        </header>
    );
}

export default Header;
