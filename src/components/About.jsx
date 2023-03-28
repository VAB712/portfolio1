import React, { Component } from 'react'
import './About.css'
import Resume from './Resume-Vaibhav.pdf'
import Student from '../img/student.png'
import Devloper from '../img/web_devloper.png'
import Programmer from '../img/programmer.jpeg'

import Card from './Card'

export default class about extends Component {

  render() {
    return (

      <div className="about-full" id='About' >
        <div className='about' >
          <h2>About
            <br />
            Me
          </h2>
          <p className='about-para' >Hello, there!! I'm Vaibhav Jagadale, an engineering student at Sinhgad College.
            I'm currently in my third year of engineering with pointer of 8.5 sgpa.
            Being tech enthusiastic, I'm always eager to learn new technologies, like to produce quality work.</p>
            <span>
            <a href={Resume} download > <button className='button-1' > Downlode Resume</button> </a>
          
            </span>
        </div>

        <div className="about-cards">
          <div style={{left: '14rem' }} >
          <Card
          emoji={Student
          }
            heading={'Student'}
            detail={" Engineering Student, Studying in Savitribai Fule Pune University. Information Technology Engineering "}
            />
          </div>

          <div style={{top: "12rem", left:"-4rem" }} >
          <Card
          emoji={Devloper}
            heading={'Web Devloper'}
            detail={"Working in Web Devlopment and Web Designing. Mainly working in Frontend. Like to work on Full Stack Web Devlopment Projects"}
            />
          </div>

          <div style={{ top:'24rem',  left: '14rem' }} >
          <Card
          emoji={Programmer}
            heading={'Programmer'}
            detail={" Java Peogramming. Datastructure and Algorithm. Also done work in C++ "}
            />
          </div>

        </div>

      </div>
    )
  }
}
