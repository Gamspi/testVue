<template>
  <div class="apartmentsInfo">
    <div class="apartmentsInfo__title">
      {{ item.name }}
    </div>
    <div class="apartmentsInfo__address">
      {{ item.address }}
    </div>
    <div class="apartmentsInfo__status">
      <div class="apartmentsInfo__item">
        <div class="apartmentsInfo__text">Занято номеров:</div>
        <div class="apartmentsInfo__text">{{ countRooms }} / 200</div>
      </div>
      <div class="apartmentsInfo__item">
        <div  class="apartmentsInfo__text">Класс:</div>
        <div class="apartmentsInfo__text">{{ item.description||'Не указан' }}</div>
      </div>
      <div class="apartmentsInfo__item">
        <div class="apartmentsInfo__text">Расположение:</div>
        <div class="apartmentsInfo__text">{{ countDistance }} км от центра</div>
      </div>
    </div>
    <div class="apartmentsInfo__cost">
      <div>от {{ item.sum }} р. за 41 день</div>
      <Button text="Подробнее" @click="handelOpenModalInfo"/>
    </div>
  </div></template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from 'components/Button/Button.vue'
import './style.scss'
import { useController } from './Controller'
import { Apartment } from 'src/models/apartments'
export default defineComponent({
  name: 'ApartmentsInfo',
  components: { Button },

  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const { countRooms, countDistance, handelOpenModalInfo } = useController(props.item as Apartment)
    return {
      countRooms,
      countDistance,
      handelOpenModalInfo

    }
  }

})
</script>
