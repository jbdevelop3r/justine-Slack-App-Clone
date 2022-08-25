import React, { useState, useTransition } from 'react'
import SendMessageFunction from '../SendMessageFunction'
import ReceiveMessage from '../ReceiveMessage'
import './Body.css'

function Body() {
  const [activeName, setactiveName] = useState('Shawn Go')
  const [availUser, setavailUser] = useState('Evan Maylas')

  const [currentReceiver, setcurrentReceiver] = useState('')

  const [channgelToggle, setchannelToggle] = useState(false)
  const [directMessageToggle, setdirectMessageTogggle] = useState(false)
  const [allUsersToggle, setallUsersTogggle] = useState(false)

  const toggleChannel = () => {
    channgelToggle ? setchannelToggle(false) : setchannelToggle(true)
    console.log(channgelToggle)
  }

  const toggledirectMessage = () => {
    directMessageToggle ? setdirectMessageTogggle(false) : setdirectMessageTogggle(true)
    console.log(channgelToggle)
  }

  const togglealluser = () => {
    allUsersToggle ? setallUsersTogggle(false) : setallUsersTogggle(true)
  }

  return (
    <>
      <div className='body-container'>
        <section className='threads'>
          <div className='threads-buttons'>
            <button onClick={toggledirectMessage}>
              <i class='fa-solid fa-message'></i> Direct messages
            </button>
            <div className='direct-message-channel'>
              <ul className={directMessageToggle ? 'channel-names-clicked ' : 'channel-names-not-clicked'}>
                <li>{availUser}</li>
              </ul>
            </div>
            <button onClick={toggleChannel}>
              <i class='fa-solid fa-people-group'></i> Channels
            </button>
            <div className='names-channel'>
              <ul className={channgelToggle ? 'channel-names-clicked ' : 'channel-names-not-clicked'}>
                <li>batch21</li>
                <li>group 2 - Slack App</li>
              </ul>
            </div>
            <button onClick={togglealluser}>
              <i class='fa-solid fa-bell'></i> All users
            </button>
            <div className='all-users-channel'>
              <ul className={allUsersToggle ? 'channel-names-clicked ' : 'channel-names-not-clicked'}>
                <li>batch21</li>
                <li>group 2 - Slack App</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='message-window'>
          <section className='top-body-section'>
            <div className='name-converse'>
              <button>
                {availUser} &nbsp; <i class='fa-solid fa-caret-down'></i>
              </button>
            </div>
            <div className='new-chat-btn'>
              <i class='fa-solid fa-circle-plus'></i>
            </div>
          </section>
          {/* Conversation container */}
          <ReceiveMessage />
          <SendMessageFunction />
          <section className='new-message'>
            <textarea id='sendmessage' name='sendmessage' placeholder='Write your message...'></textarea>
            <div className='options-icons'>
              <button>
                <i class='fa-solid fa-image'></i>
              </button>
              <button>
                <i class='fa-solid fa-face-smile-beam'></i>
              </button>
              <button>
                <i class='fa-solid fa-video'></i>
              </button>
              <button>
                <i class='fa-solid fa-file'></i>
              </button>
              <button className='send-button'>
                <i class='fa-solid fa-paper-plane'></i>
              </button>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}

export default Body
