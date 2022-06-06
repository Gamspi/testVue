import { useStore } from 'src/store'
import { computed } from 'vue'
import { Apartment } from 'src/models/apartments'

export function useController () {
  const store = useStore()
  const activeApartment = computed(() => store.getters['apartments/getActiveApartment'] as Apartment)//eslint-disable-line
  return {
    activeApartment
  }
}
