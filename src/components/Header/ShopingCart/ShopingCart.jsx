import s from './ShopingCart.module.css'
import { ReactComponent as CartIcon } from './shopingCart.svg'

function ShopingCart (props) {
  return (
    <div className={s.container}>
      <div className={s.iconWrapper}>
        <CartIcon />
        <div className={s.itemsInCart}>19</div>
      </div>
      <div className={s.title}>Покупки</div>
    </div>
  )
}

export default ShopingCart
