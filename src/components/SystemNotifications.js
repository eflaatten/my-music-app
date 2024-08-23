import React from 'react'

const SystemNotifications = (props) => {

  const { notification } = props

  return (
    <div>
      <h2 style={{display: "flex", justifyContent: "flex-start", paddingLeft: "300px", fontSize: '30px'}}>System Notifications:  {notification}</h2>
    </div>
  )
}

export default SystemNotifications
