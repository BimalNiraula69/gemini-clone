import React, { useContext, useState } from 'react'
import './sideBar.css'
import { assets } from '../../assets/assets'

const sideBar = () => {

    const[extended, setExtended] = useState(false)
    const[onSent, prevPrompts, setRecentPrompt, newChat] = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className="sideBar">
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="menu_icon"/>
        </div>
        <div onClick={()=>newChat()} className="new-chat">
            <img className="plus" src={assets.plus_icon} alt="plus_icon"/>
            {extended?<p>New Chat</p>:null}
        </div>
        {extended?
        <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
                return(
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="message_icon"/>
                <p>{item.slice(0, 18)}...</p>
                </div>
                )})}
            
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