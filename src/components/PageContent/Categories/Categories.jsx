import s from './Categories.module.css'
import Category from './Category/Category'
import { useEffect, useRef } from 'react'

function Categories (props) {
  const highlightRef = useRef()
  const currentRef = useRef()
  useEffect(() => {
    if (currentRef.current) {
      highlightRef.current.style.width = currentRef.current.clientWidth + 'px'
      highlightRef.current.style.marginLeft = currentRef.current.offsetLeft + 'px'
    } else {
      highlightRef.current.hidden = true
    }
  })

  return (
    <div className={s.container}>
      {
        props.categories.map((category, index) => {
          if (props.selectedCategoryIndex === index) {
            return <Category
              key={category.title}
              title={category.title}
              link={category.link}
              ref={currentRef}
            />
          } else {
            return <Category
              key={category.title}
              title={category.title}
              link={category.link}
              clickHandler={() => props.setCategory(index)}
            />
          }
        })
      }
      <div ref={highlightRef} className={s.selectHighlight}/>
    </div>
  )
}

export default Categories
