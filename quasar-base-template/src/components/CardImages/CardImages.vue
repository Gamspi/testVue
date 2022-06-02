<template>
  <div class="CardImages">
    <div class="CardImages__body">
      <img v-for="image in images" :src="image.path"  alt="12" :key="image">
    </div>
    <q-btn  icon="photo_camera" class="CardImages__button-gallery" @click="handleOpenGallery"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import { useController } from './Controller'
import { Image } from 'src/models/apartments'
export default defineComponent({
  name: 'CardImages',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup (props) {
    const { handleOpenGallery } = useController(props as { images:Image[]})
    return {
      handleOpenGallery
    }
  }
})
</script>
