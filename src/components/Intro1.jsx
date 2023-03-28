import React, { PureComponent } from 'react'
import './Intro1.css'
import github from '../img/github-trsnsparent-cutout.png'
import linkedin from '../img/linkedin-trsnsparent-cutout.png'
import mail from '../img/mail-trsnsparent-cutout.png'
import insta from '../img/insta-trsnsparent-cutout.png'

export default class intro1 extends PureComponent {

    render() {
        return (
            <div className="intro" id='Intro1' >
                <div className='name' >
                    <h3>Hii I am</h3>
                    <h1>Vaibhav Jagadale </h1>
                </div>

                <div className='intro-para' >
                    <p>Web Devloper <br />
                    Frontend devloper with experties in react web-app devlopment,  <br />
                    producing quality work</p>
                </div>

                <div>
                    <ul className='intro-ul' >
                        <li><a href="https://github.com/VAB712" target="main" > <img src={github} alt="" /> </a></li>
                        <li><a href="https://www.linkedin.com/in/vaibhav-jagadale-558666244/" target="main" > <img src={linkedin} alt="" /> </a></li>
                        <li><a href="mailto:vaibhavjagadale712@gmail.com?" target="main" > <img src={mail} alt="" /> </a></li>
                        <li><a href="https://www.instagram.com/vab_6500/" target="main" ></a> <img src={insta} alt="" /> </li>
                    </ul>
                </div>

            </div>



        )
    }
}
