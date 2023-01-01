import s from './Category.module.css'
import { ReactComponent as Icon } from './categoryIcon.svg'
import { forwardRef, memo } from 'react'

const Category = forwardRef((props, ref) => {
  return (
    <div className={`${s.container} ${props.selected ? s.selected : ''}`} ref={ref} onClick={props.clickHandler}>
      <Icon />
      {props.title}
    </div>
  )
})

export default memo(Category, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title
})
