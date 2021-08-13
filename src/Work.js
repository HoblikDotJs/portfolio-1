import React from 'react';
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import facebook from './icons/facebook.png'
import pdf from './icons/pdf.png'
import gmail from './icons/gmail.png'
import Box from './Box'
import './App.css';

function Work() {
  return (
    <div className="work-page">
        <div className="intro">
            <h1>I'm a software developer in Czechia.</h1>
            <h5 className="connect">LET'S CONNECT HERE:</h5>
            <row className="icons">
                <a href="https://github.com/HoblikDotJs" target="_blank"><img src={github} className="icon-item" alt="logo" /></a>
                <a href="https://www.linkedin.com/in/hoblikdotjs/" target="_blank"><img src={linkedin} className="icon-item" alt="logo" /></a>
                <a href="https://www.facebook.com/hoblicek" target="_blank"><img src={facebook} className="icon-item" alt="logo" /></a>
                <a href="https://docs.google.com/document/d/1OYeqaqytkXSfAB2KhtAIwHlQiHqJklgw-1XNfCHxN6Q/edit?usp=sharing" target="_blank"><img src={pdf} className="icon-item" alt="logo" /></a>
                <p target="_blank" onClick={()=>window.prompt("Copy to clipboard: Ctrl+C, Enter", "d.hybler@seznam.cz")}><img src={gmail} className="icon-item" alt="logo" /></p>
            </row>
        </div>
        <div className="work-area">
            <Box />
        </div>
    </div>
  );
  }

export default Work;