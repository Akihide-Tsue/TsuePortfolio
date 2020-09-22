import React from "react";
import Typewriter from 'typewriter-effect';
import Header from '../components/Header';
import '../components/header.styles.scss';

const page404 = () => {
  return (
    <>
      <Header />
      <div className='before-typewriting-text'>
        <Typewriter
          options={{
            strings: ['お探しのページは見つかりませんでした', '404 Page not Found'],
            autoStart: true, loop: true,
          }} />
      </div>
      <div className='before-typewriting-text'>
        <Typewriter
          options={{
            strings: ['404 Page not Found', 'お探しのページは見つかりませんでした'],
            autoStart: true, loop: true,
          }} />
      </div>
    </>
  )
}

export default page404