<template>
  <transition>
  <div class="MyGallery" v-if="IsGallery">
    <q-carousel
      swipeable
      animated
      arrows
      navigation
      v-model="slide"
      infinite
      height="100%"
      :autoplay="autoplay"
    >
      <q-carousel-slide v-for='(img,i) in images' :img-src="img.path" :key="img.path" :name="i+1"/>
      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[30, 30]"
        >
          <q-btn
            push round dense color="negative " text-color="primary"
            size="2em"
            icon="close"
            @click="handelClose"
          />
        </q-carousel-control>
        <q-carousel-control
          position="top-left"
          :offset="[18, 18]"
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
        >
          <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play" />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue'
import { useController } from './Controller'
import './style.scss'

export default defineComponent({
  name: 'MyGallery',
  setup () {
    const {
      handelClose,
      slide,
      images,
      IsGallery,
      autoplay
    } = useController()
    return {
      handelClose,
      slide,
      images,
      IsGallery,
      autoplay
    }
  }
})
</script>
