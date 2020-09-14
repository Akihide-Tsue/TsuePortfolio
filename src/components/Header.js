import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'
import Typewriter from 'typewriter-effect';
import Img from 'gatsby-image';
import headerImage from '../images/headerIcon.png'
import wantedly from '../images/logo/wantedly_icon.svg'

import './header.styles.scss';

const Header = () => {
    // const data = useStaticQuery(graphql`
    //    query {
    //        site{
    //            siteMetadata {
    //                title
    //            }
    //        }
    //    }
    // `)

    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />

            <div className="header-main">
                <div>
                    {/* <img alt="Tsue.com" className="headerIcon" src="./headerIcon.png" /> */}
                    <Link to="/"><img alt="Tsue.com" className="headerIcon" src={headerImage} /></Link>

                </div>
                {/* <h1>{data.site.siteMetadata.title}</h1> */}
                {/* <span className="attr">Web designer</span>
                    <span className="dot">•</span>
                    <span className="attr">Architect</span>
                    <span className="dot">•</span>
                    <span className="attr">Mechanic</span> */}


                <span className="pages-link"><Link to="/">Portfolio</Link> |
                        <Link to="/blog">Blog</Link> |
                        <Link to="/about">About</Link>
                </span>
                <div className="icons">
                    <a href='https://github.com/Akihide-Tsue' target="_blank" rel="noopener noreferrer"
                        className="tooltip" data-tooltip="GitHub"><i className="fab fa-github"></i></a>
                    <a href='https://twitter.com/Tsue_engineer' target="_blank" rel="noopener noreferrer"
                        className="tooltip" data-tooltip="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href='https://www.wantedly.com/users/118829577?profile_v1=true' target="_blank" rel="noopener noreferrer"
                        className="tooltip" data-tooltip="Wantedly"><img alt="wantedly" className="svgIcon" src={wantedly} /></a>
                    {/* TODO 履歴書*/}
                    <a href='TODO' target="_blank" rel="noopener noreferrer"
                        className="tooltip" data-tooltip="resume"><i className="fab far fa-file-alt"></i></a>
                </div>

                <div className='before-typewriting-text'>
                    <div className='IamText'>I am&nbsp;</div>
                    <div className='typewriting-text'>
                        <Typewriter
                            options={{
                                strings: [' a Web Developer', ' a Front-end engineer', ' a lucky husband'],
                                autoStart: true, loop: true,
                            }}
                        />
                    </div>
                </div>

                <hr />
            </div>
        </div >

    );
}

export default Header