import React from "react";
import { Link } from 'gatsby'
import headerImage from '../images/headerIcon.png'
import Footer from '../components/Footer';
import Typewriter from 'typewriter-effect';
import './404.styles.scss';

const Index = () => {
  return (
    <div className="page404">
      <Link className="logo404" to="/"><img alt="Tsue.com" className="headerIcon" src={headerImage} /></Link>
      <div className="linkBtn">
        <span className="pages-link">
          <Link to="/">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </span>
      </div>

      <div className='before-typewriting-text'>
        <Typewriter
          options={{
            strings: ['ページが見つかりません', '404 Page not Found'],
            autoStart: true, loop: true,
          }}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Index