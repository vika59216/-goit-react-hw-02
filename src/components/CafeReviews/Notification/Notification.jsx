
import css from './Notification.module.css'

const Notification = ({notificationText}) => {
  return (
    <>
    <p className={css.text}>{notificationText}</p>
    </>
  )
}

export default Notification