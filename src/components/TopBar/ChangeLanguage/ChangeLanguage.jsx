import s from './ChangeLanguage.module.css'
import { ReactComponent as ChangeLanguageIcon } from './languageIcon.svg'

function ChangeLanguage (props) {
  return (
    <button className={s.container}>
      <ChangeLanguageIcon />
      Сменить язык
    </button>
  )
}

export default ChangeLanguage
