import s from './SelectLocation.module.css'
import { ReactComponent as LocationIcon } from './locationIcon.svg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from './selectLocationSlice'

// TODO: ChangeDev
// import { locationApi } from '../../../api'

function SelectLocation (props) {
  const location = useSelector((state) => state.location.location)
  const dispatch = useDispatch()
  useEffect(() => {
    // TODO: ChangeDev
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     locationApi.getUserLocation(position).then(location => {
    //       dispatch(setLocation(`${location.address_components[1].short_name}, ${location.address_components[4].short_name}`))
    //     })
    //   })
    // }
    dispatch(setLocation('Kiev, UA'))
  }, [])
  return (
    <div className={s.container}>
      Выберете город <span className={s.location}><LocationIcon/>{location}</span>
    </div>
  )
}

export default SelectLocation
