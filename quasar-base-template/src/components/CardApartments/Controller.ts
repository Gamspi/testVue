import { ref } from 'vue'
import { Apartment } from 'src/models/apartments'

export function useController (props: { item:Apartment }) {
  const id = `ymap ${props.item.id}`
  const toggle = ref(true)
  function handleToggle () {
    toggle.value = !toggle.value
  }
  return {
    id,
    toggle,
    handleToggle
  }
}
