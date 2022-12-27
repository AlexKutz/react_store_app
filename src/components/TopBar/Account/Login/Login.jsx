import s from './Login.module.css'
import { ReactComponent as LoginIcon } from './loginIcon.svg'

function Login (props) {
  return (
    <div className={s.container}>
      <LoginIcon />
      Войти в аккаунт
    </div>
  )
}

export default Login
