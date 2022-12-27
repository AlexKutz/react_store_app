import s from './ProductCard.module.css'

function ProductCard ({ id, name, category, price, image }) {
  return (
    <div className={s.container}>
      <div className={s.cardItem}>
        <div className={s.imageContainer}>
          <img className={s.image} src={image}/>
        </div>
        <div className={s.name}>{name}</div>
        <div className={s.price}>{price} $</div>
      </div>
    </div>
  )
}

export default ProductCard
