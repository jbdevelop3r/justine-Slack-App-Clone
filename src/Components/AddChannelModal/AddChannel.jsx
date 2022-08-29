import React, { useState, useContext, useEffect } from 'react'
import { UserList } from '../LoginContext'
import './AddChannel.css'
import Swal from 'sweetalert2'

function Addchannel({ closeAddChannelMOdal }) {

    const [text, setText] = useState(0)

  return (
    <>
        <section className='addchannel-container'>
            <div className='addchannel-content'>
                <p className='addNewChannel'>Add New Channel</p>
                <div className='input-channel-container'>
                    <div className='enter-channel-input'>
                        <input type="text" placeholder='Enter channel name'/>
                    </div>
                    <div className='enter-user-input'>
                        <input type="text" placeholder='Add users' />
                    </div>
                   <ul className='existingAddedMembers'>
                    <li className='list-members' onMouseEnter={(e) => setText(1)}
                          onMouseLeave={(e) => setText(0)}>added members here <i class="fa-solid fa-xmark" style={{ opacity: `${text}` }}></i></li>
                   </ul>
                </div>
                <section className='adduser-buttons'>
                    <button onClick={() => {closeAddChannelMOdal(false)}}>Cancel</button>
                    <button>Add member</button>
                    <button>Create channel</button>
                </section>
            </div>
        </section>
    </>
  )
}
 
export default Addchannel
