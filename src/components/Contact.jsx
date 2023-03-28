import React, { PureComponent } from 'react'
import './Contact.css'

export default class contact extends PureComponent {
  render() {

    return (
      <div className='contact' id='Contact' >
          <h2>Contact Me</h2>
        <div className="con-1">
          <input type="text" placeholder='    Name' />
          <input type="text" placeholder='    Email' />
          <input className='msg' type="textarea" placeholder='    Massage' />        <button className='button-1' >Send Mail</button>
        </div>
      </div>
    )
  }
}
