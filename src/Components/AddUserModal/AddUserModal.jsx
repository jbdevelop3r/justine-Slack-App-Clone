import React, { useState, useContext } from 'react'
import { UserList, UserInfoSend } from '../LoginContext'
import './AddUser.css'
import Swal from 'sweetalert2'

function AddUserModal({ closeAdduserMOdal, setavailUser, userListArray }) {
  const { listAllUserAdded } = useContext(UserList)
  const { containUserInfo, setContainUserInfo } = useContext(UserInfoSend)

  const [getUserID, setGetUserID] = useState()

  const handleChangeUserID = (event) => {
    const { value } = event.target
    setGetUserID(value)
  }

  const checkList = (userId) => {
    return userId === getUserID
  }

  const handleClickAdd = () => {
    let list = listAllUserAdded

    if (!list.some(checkList)) {
      setContainUserInfo({ ...containUserInfo, userId: getUserID })
      for (let i = 0; i < userListArray.data.length; i++) {
        if (userListArray.data[i].id === getUserID) {
          setavailUser(userListArray.data[i].uid)
        }
      }

      closeAdduserMOdal(false)
    } else if (list.some(checkList)) {
      Swal.fire('User has already been messaged')
    }
    setGetUserID('')
  }

  return (
    <>
      <section className='adduser-container'>
        <div className='adduser-content'>
          <p>Message User</p>
          <div className='add-user-input'>
            <input type='number' placeholder='Enter user ID' value={getUserID} onChange={handleChangeUserID} />
          </div>
          <section className='adduser-buttons'>
            <button
              onClick={() => {
                closeAdduserMOdal(false)
              }}>
              Cancel
            </button>
            <button onClick={handleClickAdd}>Message</button>
          </section>
        </div>
      </section>
    </>
  )
}

export default AddUserModal
