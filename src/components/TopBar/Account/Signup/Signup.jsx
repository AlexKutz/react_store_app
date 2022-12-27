import s from './Signup.module.css'
import { ReactComponent as SignUpIcon } from './signUpIcon.svg'

function Signup (props) {
  return (
    <div className={s.container}>
      <SignUpIcon />
      Зарегистрироваться
    </div>
  )
}

export default Signup
