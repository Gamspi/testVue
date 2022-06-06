<template>
  <div class="pageApartments">
    <LoaderFetch v-if="IsApartmentLoading"/>
    <MyGallery/>
    <Transition>
      <Modal v-if="isMoreInfo" :on-close="handleCloseModal">
        <MoreInfo/>
      </Modal>
    </Transition>
    <MyContainer>
      <div class="pageApartments__content">
        <div class="pageApartments__list">
          <TransitionGroup name="list">
            <CardApartments v-for="item in app" :item="item" :key="item.id"/>
          </TransitionGroup>
        </div>
      </div>
    </MyContainer>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useController } from './Controller'
import CardApartments from 'components/CardApartments/CardApartments.vue'
import MyContainer from 'components/MyContainer/MyContainer.vue'
import LoaderFetch from 'components/LoaderFetch/LoaderFetch.vue'
import MoreInfo from 'components/MoreInfo/MoreInfo.vue'
import './style.scss'
import MyGallery from 'components/MyGallery/MyGallery.vue'
import Modal from 'components/Modal/Modal.vue'

export default defineComponent({
  name: 'PageApartments',
  components: { Modal, MyGallery, CardApartments, MyContainer, LoaderFetch, MoreInfo },
  setup () {
    const {
      app,
      IsApartmentLoading,
      isMoreInfo,
      handleCloseModal
    } = useController()
    return {
      app,
      IsApartmentLoading,
      isMoreInfo,
      handleCloseModal
    }
  }
})
</script>
