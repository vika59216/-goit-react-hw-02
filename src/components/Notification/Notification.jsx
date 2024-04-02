import React from 'react'
import css from './Notification.module.css'

const Notification = ({notificationText}) => {
  return (
    <>
    <p className={css.notify}>{notificationText}</p>
    </>
  )
}

export default Notification