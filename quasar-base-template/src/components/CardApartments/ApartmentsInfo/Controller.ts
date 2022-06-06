import { useStore } from 'src/store'
import { Apartment } from 'src/models/apartments'

export function useController (item:Apartment) {
  const store = useStore()
  const countRooms = Math.round(Math.random() * 200)
  const countDistance = (Math.random() * 15).toFixed(1)

  const handelOpenModalInfo = () => {
    store.commit('apartments/mutateIsMoreInfo', true)
    store.commit('apartments/mutateActiveApartment', item)
  }
  return {
    countRooms,
    countDistance,
    handelOpenModalInfo
  }
}
