import s from './TopBar.module.css'
import Help from './Help/Help'
import ChangeLanguage from './ChangeLanguage/ChangeLanguage'
import Account from './Account/Account'

function TopBar (props) {
  return (
    <div className={s.container}>
      <Help />
      <ChangeLanguage />
      <Account />
    </div>
  )
}

export default TopBar
