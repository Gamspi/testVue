import { useStore } from 'src/store'
import { ref, computed } from 'vue'

export function useController () {
  const store = useStore()
  const images = computed(() => store.getters['apartments/getGalleryImg']) //eslint-disable-line
  const IsGallery = computed(() => store.getters['apartments/getIsGallery']) //eslint-disable-line
  const slide = ref(1)
  const autoplay = ref(true)
  const handelClose = () => {
    store.commit('apartments/setIsGallery', false)
    setTimeout(() => {
      store.commit('apartments/setGalleryImg', [])
    }, 500)
  }
  return {
    images,
    IsGallery,
    slide,
    autoplay,
    handelClose
  }
}
