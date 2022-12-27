import s from './Category.module.css'
import { ReactComponent as Icon } from './rocket.svg'
import { forwardRef, memo } from 'react'

const Category = forwardRef((props, ref) => {
  return (
    <div className={`${s.container} ${ref ? s.selected : ''}`} ref={ref} onClick={props.clickHandler}>
      <Icon />
      {props.title}
    </div>
  )
})

export default memo(Category, (prevProps, nextProps) => {
  if (prevProps.ref === nextProps.ref) return true
})
