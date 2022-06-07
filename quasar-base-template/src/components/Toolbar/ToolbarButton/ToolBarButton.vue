<template>
  <div class="tool-bar-button" >
    <q-btn>
      <div class="tool-bar-button__body">
        <div class="tool-bar-button__icon">
          <q-icon
            size="1.4em"
            :name="logo"
          />

        </div>
        <div class="tool-bar-button__label">
        <span>{{label}}</span>
      </div>
      </div>
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'ToolBarButton',
  props: {
    label: {
      type: String
    },
    logo: {
      type: String
    }
  }
})
</script>
