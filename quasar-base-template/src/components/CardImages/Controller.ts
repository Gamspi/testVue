import { useStore } from 'src/store'
import { Image } from 'src/models/apartments'

export function useController (props:{ images:Image[] }) {
  const store = useStore()
  const handleOpenGallery = () => {
    store.commit('apartments/setIsGallery', true)
    store.commit('apartments/setGalleryImg', props.images)
  }
  return {
    handleOpenGallery
  }
}
