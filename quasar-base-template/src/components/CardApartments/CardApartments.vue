<template>
  <div class="CardApartments">
    <div class="CardApartments__images" v-if="item.images.length">
      <CardImages :images="item.images"/>
    </div>
    <div class="CardApartments__info" v-if="toggle">
      <ApartmentsInfo :item="item"/>
    </div>
    <CardMap v-else :id="id" :coords="[item.l1,item.l2]"/>
    <transition>
    <q-btn color="secondary" :icon="toggle?'place':'highlight_off'" class="CardApartments__toggle-map" @click="handleToggle" v-if="toggle"/>
    <q-btn  icon="highlight_off" class="CardApartments__toggle-map" @click="handleToggle" v-else />
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import './stle.scss'
import ApartmentsInfo from 'components/ApartmentsInfo/ApartmentsInfo.vue'
import CardMap from 'components/CardMap/CardMap.vue'
import CardImages from 'components/CardImages/CardImages.vue'
import { useController } from './Controller'
import { Apartment } from 'src/models/apartments'
export default defineComponent({
  name: 'CardApartments',
  components: { CardMap, ApartmentsInfo, CardImages },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const { id, toggle, handleToggle } = useController(props as { item:Apartment })
    return {
      toggle,
      handleToggle,
      id
    }
  }
})
</script>
