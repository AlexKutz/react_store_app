import s from './Search.module.css'
import { ReactComponent as SearchIcon } from './searchIcon.svg'
import { useState } from 'react'

function Search (props) {
  const [isFocused, setFocus] = useState(false)
  return (
    <div className={`${s.container} ${isFocused ? s.focused : ''}`}>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={s.searchField}
        placeholder={'Что вы ищете...'
      }/>
      <button className={s.submitButton}>
        <SearchIcon />
      </button>
    </div>
  )
}

export default Search
