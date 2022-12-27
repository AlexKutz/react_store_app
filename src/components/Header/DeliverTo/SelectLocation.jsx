import s from './SelectLocation.module.css'
import { ReactComponent as LocationIcon } from './locationIcon.svg'

function SelectLocation (props) {
  return (
    <div className={s.container}>
      Select location <span className={s.location}><LocationIcon/>Location</span>
    </div>
  )
}

export default SelectLocation
