<template>
  <div class="footer-grid">
    <div class="footer-grid__title">
      {{item.title}}
    </div>
    <div class="footer-grid__link" v-for="link in item.links" :key="link.label">
      <router-link :to='link.link'>{{link.label}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
export default defineComponent({
  name: 'FooterGrid',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
})
</script>
