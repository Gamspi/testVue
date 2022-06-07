<template>
  <div class="apartments-info">
    <div class="apartments-info__title">
      <div class="apartments-info__label">
        {{ item.name }}

      </div>
      <div class="apartments-info__address">
        {{ item.address }}
      </div>
    </div>
    <div class="apartments-info__status">
      <div class="apartments-info__item">
        <div class="apartments-info__text">Занято номеров:</div>
        <div class="apartments-info__text">{{ countRooms }} / 200</div>
      </div>
      <div class="apartments-info__item">
        <div  class="apartments-info__text">Класс:</div>
        <div class="apartments-info__text">{{ item.description||'Не указан' }}</div>
      </div>
      <div class="apartments-info__item">
        <div class="apartments-info__text">Расположение:</div>
        <div class="apartments-info__text">{{ countDistance }} км от центра</div>
      </div>
    </div>
    <div class="apartments-info__footer">
      <div class="apartments-info__cost">
        от {{ item.sum.toLocaleString('ru-Ru') }} р. за 41 день
      </div>
      <div class="apartments-info__btn">
        <Button text="Подробнее" @click="handelOpenModalInfo"/>
      </div>
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
