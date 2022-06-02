<template>
  <q-btn :class="['button','', {'button--disabled': isDisabled}]" @click="clickHandler" :to="to" color="secondary">
    {{ text }}
  </q-btn>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'Button',
  props: {
    text: { type: String, required: true },
    clickHandler: { type: Function, required: false },
    isDisabled: { type: Boolean, default: false },
    to: { type: String }
  }
})
</script>
