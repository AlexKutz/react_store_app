import s from './ToShopingCartButton.module.css'
import { ReactComponent as Icon } from './addToCartIcon.svg'

function ToShopingCartButton (props) {
  return (
    <button className={s.button}><Icon />Купить</button>
  )
}

export default ToShopingCartButton
