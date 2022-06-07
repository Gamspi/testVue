<template>
  <div class="my-toolbar">
    <MyContainer>
      <div class="my-toolbar__body">
        <div class="my-toolbar__logo" @click="$router.push('/')">
        </div>
        <div class="my-toolbar__buttons">
          <q-btn icon="language" label="Язык (RU)" stack size="0.9em"/>
          <q-btn icon="img:icons/rent.svg" label="Сдать жильё" stack size="0.8em"/>
          <q-btn icon="login" label="Войти" stack  size="0.9em" />
        </div>
      </div>
    </MyContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import MyContainer from 'components/MyContainer/MyContainer.vue'

export default defineComponent({
  components: {
    MyContainer
  },
  name: 'Toolbar'

})
</script>
