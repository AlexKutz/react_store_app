import s from './PageContent.module.css'
import Categories from './Categories/Categories'
import Products from './Products/Products'
import { useState } from 'react'

const categories = [
  { title: 'Best Rated', link: '#' },
  { title: 'Featured', link: '#' },
  { title: 'Makeup', link: '#' },
  { title: 'Home', link: '#' },
  { title: 'Lifestyle', link: '#' },
  { title: 'Bath & Body Care', link: '#' },
  { title: 'Skincare', link: '#' }
]

function PageContent (props) {
  const [selectedCategoryIndex, setCategory] = useState(0)
  return (
    <div className={s.container}>
      <Categories
        categories={categories}
        selectedCategoryIndex={selectedCategoryIndex}
        setCategory={setCategory}
      />
      <Products />
    </div>
  )
}

export default PageContent
