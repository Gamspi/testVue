<template>
  <div class="moreInfo">
    <div class="moreInfo__title">
      <div class="moreInfo__label">Название:&nbsp;</div>
      <div class="moreInfo__text">{{activeApartment.name}}</div> </div>
    <div class="moreInfo__about">
      <div class="moreInfo__section">
        <div class="moreInfo__label">ID:&nbsp;</div>
        <div class="moreInfo__text">{{activeApartment.id}}</div>
      </div>
      <div class="moreInfo__section">
        <div class="moreInfo__label">Адресс:&nbsp;</div>
        <div class="moreInfo__text">{{activeApartment.address}}</div>
      </div>
      <div class="moreInfo__section">
        <div class="moreInfo__label">Регистрироваться:&nbsp;</div>
        <div class="moreInfo__text">{{activeApartment.checkIn}}</div>
      </div>
      <div class="moreInfo__section">
        <div class="moreInfo__label">Окончание регистрации:&nbsp;</div>
        <div class="moreInfo__text">{{activeApartment.checkOut}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import { useController } from './useController'
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
