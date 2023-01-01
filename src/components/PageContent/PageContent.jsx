import s from './PageContent.module.css'
import Categories from './Categories/Categories'
import Products from './Products/Products'

function PageContent (props) {
  return (
    <div className={s.container}>
      <Categories />
      <Products />
    </div>
  )
}

export default PageContent
