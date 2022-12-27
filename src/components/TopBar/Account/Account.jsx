import s from './Account.module.css'
import Login from './Login/Login'
import Signup from './Signup/Signup'

function Account (props) {
  return (
    <div className={s.container}>
      <Login />
      <Signup />
    </div>
  )
}

export default Account
