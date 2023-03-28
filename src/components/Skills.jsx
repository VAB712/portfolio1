import React, { PureComponent } from 'react'
import './Skills.css'
import c from '../img/c-trsnsparent-cutout.png'
import cpp from '../img/cpp-transparent-cutout.png'
import java from '../img/java-trsnsparent-cutout.png'
import html from '../img/html-trsnsparent-cutout.png'
import css from '../img/css-trsnsparent-cutout.png'
import js from '../img/js-trsnsparent-cutout.png'
import react from '../img/react-trsnsparent-cutout.png'
import node from '../img/node-trsnsparent-cutout.png'
import mysql from '../img/mysql-trsnsparent-cutout.png'


export default class Skills extends PureComponent {

  render() {
    return (
      <div className='Skills' id='Skills' >
        <div className="skills-left">
          <ul className='skills-list-1' >
            <li><img src={c} alt="" /></li>
            <li><img src={cpp} alt="" /></li>
            <li><img src={java} alt="" /></li>
          </ul>
          <ul className='skills-list-2' >
            <li><img src={html} alt="" /></li>
            <li><img src={css} alt="" /></li>
            <li><img src={js} alt="" /></li>
          </ul>
          <ul className='skills-list-1' >
            <li><img src={react} alt="" /></li>
            <li><img src={node} alt="" /></li>
            <li><img src={mysql} alt="" /></li>
          </ul>
        </div>

        <div className="skills-right">
          <h2>My Skills</h2>
          <h3> Programming - C language, C++, Java </h3>
          <h3> Web Devlopment - HTML, CSS, JavaScript, Reactjs, Nodejs</h3>
          <h3> Database - MySQL </h3>
        </div>
      </div>
    )
  }
}
