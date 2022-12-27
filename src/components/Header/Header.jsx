import s from './Header.module.css'
import { ReactComponent as Logo } from './logo.svg'
import Search from './Search/Search'
import SelectLocation from './DeliverTo/SelectLocation'
import ShopingCart from './ShopingCart/ShopingCart'

function Header (props) {
  return (
    <div className={s.container}>
      <div className={s.leftCol}>
        <div className={s.logo}><Logo /></div>
        <SelectLocation />
      </div>
      <Search />
      <ShopingCart />
    </div>
  )
}

export default Header
