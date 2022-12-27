import s from './Products.module.css'
import ProductCard from './ProductCard/ProductCard'

const product = {
  id: 9,
  title: 'Tasty Frozen Computer',
  price: 650,
  description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  category: {
    id: 4,
    name: 'Shoes',
    image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=8827'
  },
  images: [
    'https://api.lorem.space/image/shoes?w=640&h=480&r=301',
    'https://api.lorem.space/image/shoes?w=640&h=480&r=656',
    'https://api.lorem.space/image/shoes?w=640&h=480&r=9305'
  ]
}

function Products (props) {
  return (
    <div className={s.container}>
      <ProductCard
        id={product.id}
        name={product.title}
        image={product.images[0]}
        price={product.price}
        category={product.category}/>
      <ProductCard
        id={product.id}
        name={product.title}
        image={product.images[0]}
        price={product.price}
        category={product.category}/>
      <ProductCard
        id={product.id}
        name={product.title}
        image={product.images[0]}
        price={product.price}
        category={product.category}/>
      <ProductCard
        id={product.id}
        name={product.title}
        image={product.images[0]}
        price={product.price}
        category={product.category}/>
      <ProductCard
        id={product.id}
        name={product.title}
        image={product.images[0]}
        price={product.price}
        category={product.category}/>
      <ProductCard
        id={product.id}
        name={product.title}
        image={product.images[0]}
        price={product.price}
        category={product.category}/>
      <ProductCard
        id={product.id}
        name={product.title}
        image={product.images[0]}
        price={product.price}
        category={product.category}/>
      <ProductCard
        id={product.id}
        name={product.title}
        image={product.images[0]}
        price={product.price}
        category={product.category}/>
      <ProductCard
        id={product.id}
        name={product.title}
        image={product.images[0]}
        price={product.price}
        category={product.category}/>
    </div>
  )
}

export default Products
