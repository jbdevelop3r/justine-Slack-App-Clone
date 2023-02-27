import './AddUser.css'
import AddUserToChannel from '../AddUserToChannel'

function AddUserInChannel({ closeAddUserInChannel, setavailUser, userListArray }) {
  return (
    <>
      <AddUserToChannel
        closeAddUserInChannel={closeAddUserInChannel}
        setavailUser={setavailUser}
        userListArray={userListArray}
      />
    </>
  )
}
export default AddUserInChannel
