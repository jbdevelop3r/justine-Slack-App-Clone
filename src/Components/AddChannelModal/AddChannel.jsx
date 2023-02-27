import React from 'react'
import './AddChannel.css'

import CreateChannel from './../CreateChannel'

function Addchannel({ closeAddChannelMOdal, userListArray }) {
  return (
    <>
      <CreateChannel userListArray={userListArray} closeAddChannelMOdal={closeAddChannelMOdal} />
    </>
  )
}

export default Addchannel
