<template>
  <div class="loader">
    <div class="loader__text">Я загружаюсь ....</div>
    <q-spinner-cube
      color="secondary"
      size="5.5em"
    />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'Loader'
})
</script>
