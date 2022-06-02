<template>
      <div class="IndexPage" >
        <MyContainer>
          <section class="IndexPage__section">
            <div class="IndexPage__content" >
              <div class="IndexPage__title" >Найти жильё рядом просто!</div>
              <Button text="Показать список" to="/apartments" style="width: 243px;"/>
            </div>
          </section>
        </MyContainer>
        <MyFooter/>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyFooter from 'components/footer/footer.vue'
import Button from 'components/button/Button.vue'
import MyContainer from 'components/container/container.vue'
import './style.scss'
export default defineComponent({
  name: 'PageIndex',
  components: { MyContainer, Button, MyFooter }

})
</script>
