import React from 'react';
import "./Portfolio.css"
import CopaAmerica from "../assets/copa_america.png"
import Hovers from "../assets/design_hovers.png"
import GlassMorphism from "../assets/glass-morphism.png"
import Medicenter from "../assets/medicenter.png"
import SunShades from "../assets/sun_shades.png"


const portfolio = [
    {
        id: 1,
        Image: CopaAmerica,
        title: "Copa America",
        github_client: "https://github.com/Safayet-Mahid/healthcare-website",
        github_server: null,
        live: "https://safayet-mahid.github.io/copa-america-2021/"
    },
    {
        id: 2,
        Image: Hovers,
        title: "Hover Effects",
        github_client: "https://github.com/Safayet-Mahid/hovers",
        github_server: null,
        live: "https://safayet-mahid.github.io/hovers/"
    },
    {
        id: 3,
        Image: GlassMorphism,
        title: "Glass Morphism",
        github_client: "https://safayet-mahid.github.io/glass-morphism/",
        github_server: null,
        live: "https://safayet-mahid.github.io/copa-america-2021/"
    },
    {
        id: 4,
        Image: Medicenter,
        title: "Medicenter",
        github_client: "https://github.com/Safayet-Mahid/healthcare-website",
        github_server: null,
        live: "https://github.com/Safayet-Mahid/healthcare-website"
    },
    {
        id: 5,
        Image: SunShades,
        title: "Sun Shades",
        github_client: "https://github.com/Safayet-Mahid/sun-shades",
        github_server: "https://github.com/Safayet-Mahid/sun-shades-server",
        live: "https://sunglass-website-90881.web.app/"
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {
                    portfolio.map(({ id, Image, title, github_client, github_server, live }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={Image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    {
                                        github_server === null ?
                                            <a href={github_client} className='btn' target="blank"> Repo </a> :
                                            <>
                                                <a href={github_client} className='btn' target="blank"> CLient </a>
                                                <a href={github_server} className='btn ' target="blank"> Server </a>
                                            </>

                                    }
                                    <a href={live} className='btn btn-primary' target="blank"> Live </a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>


        </section>
    );
};

export default Portfolio;