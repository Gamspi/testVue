import { useStore } from 'src/store'
import { computed, onMounted } from 'vue'
import { Apartment } from 'src/models/apartments'

export function useController () {
  const store = useStore()
  const app = computed(() => store.getters['apartments/getApartments'] as Apartment[])//eslint-disable-line
  const IsApartmentLoading = computed(() => store.getters['apartments/getIsLoading']) //eslint-disable-line
  const IsGeneralLoading = computed(() => store.getters['general/getIsGeneralLoading']) //eslint-disable-line
  const isMoreInfo = computed(() => store.getters['apartments/getIsMoreInfo']) //eslint-disable-line
  onMounted(async () => {
    await store.dispatch('apartments/fetchApartments')
  })

  const handleCloseModal = () => {
    store.commit('apartments/setIsMoreInfo', false)
    setTimeout(() => {
      store.commit('apartments/setActiveApartment', null)
    }, 500)
  }
  return {
    app,
    IsApartmentLoading,
    IsGeneralLoading,
    isMoreInfo,
    handleCloseModal
  }
}
