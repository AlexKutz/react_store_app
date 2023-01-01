import s from './ProductCard.module.css'
import defaultImage from './noImage.png'
import ToShopingCartButton from './ToShopingCartButton/ToShopingCartButton'

function ProductCard ({ name, category, price, image = defaultImage }) {
  if (!image) {
    image = defaultImage
  }
  return (
    <div className={s.container}>
      <div className={s.cardItem}>
        <div className={s.imageContainer}>
          <img className={s.image} src={image}/>
        </div>
        <div className={s.name}>{name}</div>
        <div className={s.price}>{price} $</div>
      </div>
      <ToShopingCartButton />
    </div>
  )
}

export default ProductCard
