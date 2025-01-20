import React from 'react'
import './main.css'
import {assets} from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>Hello, Dev.</p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize these concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readibility of following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-buttom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="buttom-info">
            Gemini may display inaccurate info, inccluding about people, so double-check its responses. Your pravicy and gemini apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main