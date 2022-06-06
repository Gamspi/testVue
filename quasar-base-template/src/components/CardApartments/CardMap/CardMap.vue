<template>
  <div class="card-map" :id="id">
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import './style.scss'
import { useMap } from 'src/hooks/useMap'
export default defineComponent({
  name: 'CardMap',
  props: {
    id: {
      type: String,
      required: true
    },
    coords: {
      type: Array,
      required: true

    }
  },
  setup (props) {
    const { initMap } = useMap(props.coords as number[], props.id, true)
    onMounted(initMap)
  }
})
</script>
