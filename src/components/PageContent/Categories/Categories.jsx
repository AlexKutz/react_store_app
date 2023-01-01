import s from './Categories.module.css'
import Category from './Category/Category'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, setCurrent } from './categoriesSlice'

function Categories (props) {
  const categories = useSelector((state) => state.categories.categories)
  const current = useSelector((state) => state.categories.current)
  const dispatch = useDispatch()
  const highlightRef = useRef()
  const currentRef = useRef()
  useEffect(() => {
    if (currentRef.current) {
      highlightRef.current.style.width = currentRef.current.clientWidth + 'px'
      highlightRef.current.style.marginLeft = currentRef.current.offsetLeft + 'px'
    }
  })
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  if (!categories) return 'No categories'

  return (
    <div className={s.container + ' unselectable'}>
      {
        categories.map((category, index) => {
          if (current === index) {
            return <Category
              key={index}
              title={category.name}
              link={category.link}
              ref={currentRef}
              selected={true}
            />
          } else {
            return <Category
              key={index}
              title={category.name}
              link={category.link}
              clickHandler={() => dispatch(setCurrent(index))}
            />
          }
        })
      }
      <div ref={highlightRef} className={s.selectHighlight}/>
    </div>
  )
}

export default Categories
