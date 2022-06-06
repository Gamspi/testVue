import { ref } from 'vue'
import { Apartment } from 'src/models/apartments'

export function useController (props: { item:Apartment }) {
  const id = `ymap ${props.item.id}`
  const isShowInfo = ref(true)
  function handleToggle () {
    isShowInfo.value = !isShowInfo.value
  }
  return {
    id,
    isShowInfo,
    handleToggle
  }
}
