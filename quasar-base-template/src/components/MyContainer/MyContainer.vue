<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'MyContainer'
})
</script>
