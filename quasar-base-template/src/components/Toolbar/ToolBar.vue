<template>
  <div class="toolbar">
    <MyContainer>
      <div class="toolbar__body">
        <div class="toolbar__logo" @click="$router.push('/')">
        </div>
        <div class="toolbar__buttons">

          <ToolBarButton label="Язык (RU)" logo="language"/>
          <ToolBarButton label="Сдать жильё" logo="img:icons/rent.svg"/>
          <ToolBarButton label="Войти" logo="login"/>
        </div>
      </div>
    </MyContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import MyContainer from 'components/MyContainer/MyContainer.vue'
import ToolBarButton from 'components/Toolbar/ToolbarButton/ToolBarButton.vue'

export default defineComponent({
  components: {
    MyContainer,
    ToolBarButton
  },
  name: 'Toolbar'

})
</script>
