<template>
  <div class="my-toolbar">
    <MyContainer>
      <div class="my-toolbar__body">
        <div class="my-toolbar__logo" @click="$router.push('/')">
        </div>
        <div class="my-toolbar__buttons">
          <q-btn icon="language" label="Язык (RU)" stack  style="width: 100px" />
          <q-btn icon="img:icons/rent.svg" label="Сдать жильё" stack />
          <q-btn icon="login" label="Войти" stack   />
        </div>
      </div>
    </MyContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import MyContainer from 'components/container/container.vue'

export default defineComponent({
  components: {
    MyContainer
  },
  name: 'PageIndex'

})
</script>
