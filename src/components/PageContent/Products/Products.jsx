import s from './Products.module.css'
import ProductCard from './ProductCard/ProductCard'
import { useGetAllProductsQuery } from '../../../api'

function Products (props) {
  const {
    data: { data: products } = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllProductsQuery()

  let content

  if (isLoading) {
    content = <div>Is loading</div>
  } else if (isSuccess) {
    content = products.map(product => {
      return <ProductCard
        name={product.title}
        category={product.category}
        price={product.price}
        image={product.image}
      />
    })
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <div className={s.container}>
      {content}
    </div>
  )
}

export default Products
