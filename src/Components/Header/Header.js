import React from 'react';
import CTA from '../CTA';
import MyImage from '../assets/mahid-9.jpg';
import { CgMouse } from "react-icons/cg"

import "./Header.css";
import HeaderSocials from '../HeaderSocials';

const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Safayet Mahid</h1>
                <h5 className='text-light '>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={MyImage} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'><CgMouse /><span>Scroll Down</span></a>

            </div>
        </header>
    );
};

export default Header;