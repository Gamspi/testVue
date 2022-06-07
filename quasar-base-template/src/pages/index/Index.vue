<template>
      <div class="indexPage" >
        <MyContainer>
          <section class="indexPage__section">
            <div class="indexPage__content" >
              <div class="indexPage__title" >Найти жильё рядом просто!</div>
              <div class="indexPage__btn">
                <Button class="indexPage__btn" text="Показать список" to="/apartments" />
              </div>
            </div>
          </section>
        </MyContainer>
        <MyFooter/>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyFooter from 'components/Footer/Footer.vue'
import Button from 'components/Button/Button.vue'
import MyContainer from 'components/MyContainer/MyContainer.vue'
import './style.scss'
export default defineComponent({
  name: 'PageIndex',
  components: { MyContainer, Button, MyFooter }

})
</script>
