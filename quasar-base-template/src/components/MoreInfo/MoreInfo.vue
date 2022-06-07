<template>
  <div class="more-info">
    <div class="more-info__title">
      <div class="more-info__label">Название:&nbsp;</div>
      <div class="more-info__text">{{activeApartment.name}}</div> </div>
    <div class="more-info__about">
      <div class="more-info__section">
        <div class="more-info__label">ID:&nbsp;</div>
        <div class="more-info__text">{{activeApartment.id}}</div>
      </div>
      <div class="more-info__section">
        <div class="more-info__label">Адресс:&nbsp;</div>
        <div class="more-info__text">{{activeApartment.address}}</div>
      </div>
      <div class="more-info__section">
        <div class="more-info__label">Регистрироваться:&nbsp;</div>
        <div class="more-info__text">{{activeApartment.checkIn}}</div>
      </div>
      <div class="more-info__section">
        <div class="more-info__label">Окончание регистрации:&nbsp;</div>
        <div class="more-info__text">{{activeApartment.checkOut}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import { useController } from './Controller'
export default defineComponent({
  name: 'moreInfo',
  setup () {
    const { activeApartment } = useController()
    return {
      activeApartment
    }
  }

})
</script>
