<template>
  <div class="card-apartments">
    <div class="card-apartments__images" v-if="item.images.length">
      <CardImages :images="item.images"/>
    </div>
    <div class="card-apartments__info" v-if="isShowInfo">
      <ApartmentsInfo :item="item"/>
    </div>
    <CardMap v-else :id="id" :coords="[item.l1,item.l2]"/>
    <transition>
    <q-btn color="secondary" :icon="isShowInfo?'place':'highlight_off'" class="card-apartments__toggle-map" @click="handleToggle" v-if="isShowInfo"/>
    <q-btn  icon="highlight_off" class="card-apartments__toggle-map" @click="handleToggle" v-else />
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import './stle.scss'
import ApartmentsInfo from 'components/CardApartments/ApartmentsInfo/ApartmentsInfo.vue'
import CardMap from 'components/CardApartments/CardMap/CardMap.vue'
import CardImages from 'components/CardApartments/CardImages/CardImages.vue'
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
    const { id, isShowInfo, handleToggle } = useController(props as { item:Apartment })
    return {
      isShowInfo,
      handleToggle,
      id
    }
  }
})
</script>
