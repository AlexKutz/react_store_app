import s from './Header.module.css'
import Search from './Search/Search'
import SelectLocation from './SelectLocation/SelectLocation'
import ShopingCart from './ShopingCart/ShopingCart'

function Header (props) {
  return (
    <div className={s.container}>
      <div className={s.leftCol}>
        <div className={s.logo}>[LOGO]</div>
        <SelectLocation />
      </div>
      <Search />
      <ShopingCart />
    </div>
  )
}

export default Header
