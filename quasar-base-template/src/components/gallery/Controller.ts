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
  }
  return {
    images,
    IsGallery,
    slide,
    autoplay,
    handelClose
  }
}
