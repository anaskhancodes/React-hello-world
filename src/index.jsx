import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profileImage from './img/profile.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {fasolid ,faphone} from '@fortawesome/react-fontawesome';

function Hi() {
  return <div className='main-div'>

    <img src={profileImage} alt="" srcset="" />

    <h1 className='self-name'>Muhammad Anas Khan</h1>


    <h2 className='work'>MERN STAKE</h2>
    <h2 className='education'>EDUCATION</h2>
    <hr className='hr1' />

    <div className='edu'>
      <h4><b>Matric</b></h4>
      <p>Science</p>
      <h4><b>FSc Part-1</b></h4>
      <p>Pre-Engnering</p>
    </div>

    <h2 className='certification'>CERTIFICATION</h2>
    <hr className='hr2' />
    <ul className='UL'>
      <li>I am currently enrolled in SMIT (Saylani Mass IT Training),<br />
        specializing in MERN STAKE development. I have successfully <br />
        completed training in HTML5, CSS3, Bootstrap, JavaScript ES6, <br />
        Express.js, Node.js, MongoDB & React
      </li>

      <li>
        I'm actively learning about the Web 3.0 metaverse from <br />
        JawanPakistan. Excited about its potential, I'm exploring <br />
        decentralized platforms, blockchain, virtual reality, and <br />
        augmented reality. I aim to contribute to the development of <br />
        this immersive digital world and create innovative <br />
        experiences within it.
      </li>
    </ul>



    <div className='sty-box'></div>

    <div className='box'>
      <h2 className='about'>About</h2>
      <p className='about-p'>I recently completed my FSc part-1 studies at Government Boys
        Degree College, and I am currently pursuing my education at
        SMIT (Saylani Mass IT Training).
      </p>

      <h2 className='contact'>Contact</h2>
      <p className='phone-num'> <a href="https://web.whatsapp.com/">+92 323-703-4406</a></p>
      <p className='email'><a href="mailto:a4anas406@gmail.com">a4anas406@gmail.com</a></p>
      <p className='linkedin'><a href="https://www.linkedin.com/in/muhammadanaskhancodes/">Linkedin.</a></p>
      <p className='github'><a href="https://github.com/anaskhancodes">GitHub.</a></p>


      <h2 className='skills'>Skills</h2>
      <ul className='UL-Skill'>
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>Bootstrap</li>
        <li>JavaScript es6</li>
        <li>Express.JS</li>
        <li>Node.JS</li>
        <li>MongoDB</li>
        <li>React</li>
      </ul>
    </div>


  </div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'));