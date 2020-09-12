import React from 'react';
import './header.styles.scss';
import { Link, graphql, useStaticQuery } from 'gatsby'



const Header = () => {

    const data = useStaticQuery(graphql`
       query {
           site{
               siteMetadata {
                   title
               }
           }
       }
    `)

    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />

            <div className="header-main">
                <div className="dev">
                    <h1>{data.site.siteMetadata.title}</h1>
                    {/* <span className="attr">Web designer</span>
                    <span className="dot">•</span>
                    <span className="attr">Architect</span>
                    <span className="dot">•</span>
                    <span className="attr">Mechanic</span> */}
                </div>
                <div className="icons">
                    <a href='https://github.com/Akihide-Tsue' target="_blank" rel="noopener noreferrer" class="tooltip" data-tooltip="GitHub"><i className="fab fa-github"></i></a>
                    <a href='https://twitter.com/Tsue_engineer' target="_blank" rel="noopener noreferrer" class="tooltip" data-tooltip="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href='https://www.wantedly.com/users/118829577?profile_v1=true' target="_blank" rel="noopener noreferrer" class="tooltip" data-tooltip="Wantedly"><i className="fab far fa-file-alt"></i></a>
                    {/* <a href='https://dev.to/martin2844'><i className="fab fa-dev"></i></a>
                        <a href='https://www.linkedin.com/in/chammah/'><i className="fab fa-linkedin"></i></a>
                        <a href='https://youtube.com/codigoMate'><i className="fab fa-youtube"></i></a> */}
                </div>
                <span className="pages-link"><Link to="/">Portfolio</Link>
                        |
                        <Link to="/blog">Blog</Link>
                        |
                        <Link to="/about">About</Link>
                </span>


                <hr />
            </div>
        </div>

    );
}

export default Header