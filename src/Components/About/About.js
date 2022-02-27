import React from 'react';
import "./About.css"
import aboutMe from "../assets/mahid-1.JPG"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-Image">
                        <img src={aboutMe} alt="aboutme" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1.5 Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>15+ Clients WorldWide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Experience</h5>
                            <small>1.5 Years Working</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta at alias reprehenderit eum temporibus suscipit veniam in sapiente aspernatur rem ea amet iusto delectus earum saepe culpa, maxime officiis nostrum.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    );
};

export default About; 