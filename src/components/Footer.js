import React from 'react';
import { Link } from 'gatsby'
import './footer.styles.scss';

const Footer = () => {
  return (
    <div className="footer" >
      <div className="wrapper">
        <div className="wrapper_label">Contents</div>
        <span className="contents">
          <Link to="/" className="link"><i className="fas fa-chevron-right" /> Portfolio</Link>
          <Link to="/blog" className="link"><i className="fas fa-chevron-right" /> Blog</Link>
          <Link to="/about" className="link"><i className="fas fa-chevron-right" /> About</Link>
        </span>
      </div>

      <div className="wrapper" >
        <div className="wrapper_label">Contact</div>
        <a href='https://twitter.com/Tsue_engineer' target="_blank" rel="noopener noreferrer"
          className="tooltip" data-tooltip="DMにてご連絡ください"><i className="fab fa-twitter" /></a>
        <a href='https://twitter.com/Tsue_engineer' target="_blank" rel="noopener noreferrer" className="mobileTwitter" >
          <i className="fab fa-twitter" /></a>
        <div className="mobile">DMにてご連絡ください</div>
      </div>
      <div className='bottom'>© 2020 Tsue.com</div>
    </div >
  )
}

export default Footer