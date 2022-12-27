import s from './Help.module.css'
import { ReactComponent as HelpIcon } from './helpIcon.svg'

function Help (props) {
  return (
    <button className={s.container}>
      <HelpIcon />
      Нужна помощь ?
    </button>
  )
}

export default Help
