import React from 'react';

import { Divider } from '@material-ui/core';
import { LinkBtn } from './Common/LinkBtn.js'
import { Link } from 'gatsby'
import Typewriter from 'typewriter-effect';
import headerImage from '../../static/portfolio/headerIcon.png'
import wantedly from '../../static/portfolio/wantedly_icon.svg'

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header" >
      <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />

      <div className="header-main">
        <div>
          <Link to="/"><img alt="Tsue.com" className="headerIcon" src={headerImage} /></Link>
        </div>

        <span className="pages-link">
          <Link to="/" className="pages-link_btn"><LinkBtn innerText='Portfolio' /></Link>
          <Link to="/blog" className="pages-link_btn"><LinkBtn innerText='Blog' /></Link>
          <Link to="/about" className="pages-link_btn"><LinkBtn innerText='About' /></Link>
        </span>

        <div className="icons">
          <a href='https://github.com/Akihide-Tsue' target="_blank" rel="noopener noreferrer"
            className="tooltip" data-tooltip="GitHub"><i className="fab fa-github" /></a>
          <a href='https://twitter.com/Tsue_engineer' target="_blank" rel="noopener noreferrer"
            className="tooltip" data-tooltip="Twitter"><i className="fab fa-twitter" /></a>
          <a href='https://www.wantedly.com/secret_profiles/Gqck-YFxgw84hG70w4lrmsiybNAaEJls' target="_blank" rel="noopener noreferrer"
            className="tooltip" data-tooltip="Wantedly"><img alt="wantedly" className="svgIcon" src={wantedly} /></a>
          {/* TODO 履歴書*/}
          <a href='404' target="_blank" rel="noopener noreferrer" className="tooltip" data-tooltip="resume">
            <i className="fab far fa-file-alt" /></a>
        </div>

        <div className='before-typewriting-text'>
          <div className='IamText'>I am&nbsp;</div>
          <div className='typewriting-text'>
            <Typewriter
              options={{
                strings: [' a Web Developer', ' a Front-end engineer', ' a lucky husband'],
                autoStart: true, loop: true,
              }} />
          </div>
        </div>

        <Divider className="divider" />
      </div>
    </div >
  );
}

export default Header