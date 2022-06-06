<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="j-fixed-element">
      <Loader v-if="IsGeneralLoading" />
      <toollbar/>
      <div class="main-container">
        <router-view v-slot="{ Component }">
          <component :is="Component" :key="Component.name"/>
        </router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue'
import Loader from 'components/Loader/Loader.vue'
import useController from './controller'
import Toollbar from 'components/Toolbar/ToolBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { Toollbar, Loader },
  setup () {
    const {
      IsGeneralLoading,
      onMountedCallback

    } = useController()
    onMounted(onMountedCallback)
    return {

      IsGeneralLoading
    }
  }
})
</script>
