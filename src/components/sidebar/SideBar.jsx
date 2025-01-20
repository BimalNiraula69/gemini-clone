import React, { useState } from 'react'
import './sideBar.css'
import { assets } from '../../assets/assets'

const sideBar = () => {

    const[extended, setExtended] = useState(false)

  return (
    <div className="sideBar">
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="menu_icon"/>
        </div>
        <div className="new-chat">
            <img className="plus" src={assets.plus_icon} alt="plus_icon"/>
            {extended?<p>New Chat</p>:null}
        </div>
        {extended?
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
            <img src={assets.message_icon} alt="message_icon"/>
            <p>What is react...</p>
            </div>
        </div>
        :null}
        <div className="bottom">
        <div className="buttom-item recent-entry">
            <img src={assets.question_icon} alt="question_icon"/>
           {extended?<p>Help</p>:null}
        </div>
        <div className="buttom-item recent-entry">
            <img src={assets.history_icon} alt="question_icon"/>
            {extended?<p>Activity</p>:null}
        </div>
        <div className="buttom-item recent-entry">
            <img src={assets.setting_icon} alt="question_icon"/>
            {extended?<p>Setting</p>:null}
        </div>
        </div>
    </div>
  )
}

export default sideBar