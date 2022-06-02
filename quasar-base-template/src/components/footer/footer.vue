<template>
  <div class="footer">
    <MyContainer>
      <div class="footer__top">
        <FooterGrid v-for="item in grid" :item="item" :key="item.title"/>
      </div>
      <div class="footer__bottom">
        <div class="footer__logo">
          Knokey 2021 ©
        </div>
        <div class="footer__links">
          <div class="footer__link">
            <router-link to="/">Конфиденциальность</router-link>
          </div>          <div class="footer__link">
          <router-link to="/">Условия соглашения</router-link>
          </div>          <div class="footer__link">
          <router-link to="/">Язык: Русский (RU)</router-link>
          </div>
        </div>
      </div>
    </MyContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import FooterGrid from 'components/footerGrid/footerGrid.vue'
import MyContainer from 'components/container/container.vue'
import { grid } from 'src/constants/constants'

export default defineComponent({
  name: 'MyFooter',
  components: { FooterGrid, MyContainer },
  setup () {
    return {
      grid
    }
  }
})
</script>
