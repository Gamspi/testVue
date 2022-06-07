<template>
  <div class="loader-fetch">
    <div class="loader-fetch__text">Я загружаю информацию ....</div>
    <q-spinner
      color="secondary"
      size="5.5em"
      :thickness="10"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
export default defineComponent({
  name: 'LoaderFetch'
})
</script>
