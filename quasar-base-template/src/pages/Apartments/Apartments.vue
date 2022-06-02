<template>
  <div class="PageApartments">
    <LoaderFetch v-if="IsApartmentLoading&&!IsGeneralLoading"/>
    <MyGallery/>
    <Transition>
      <Modal v-if="isMoreInfo" :on-close="handleCloseModal">
        <MoreInfo/>
      </Modal>
    </Transition>
    <MyContainer>
      <div class="PageApartments__content">
        <div class="PageApartments__list">
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
import MyContainer from 'components/container/container.vue'
import LoaderFetch from 'components/LoaderFetch/LoaderFetch.vue'
import MoreInfo from 'components/MoreInfo/MoreInfo.vue'
import './style.scss'
import MyGallery from 'components/gallery/gallery.vue'
import Modal from 'components/modal/Modal.vue'

export default defineComponent({
  name: 'PageApartments',
  components: { Modal, MyGallery, CardApartments, MyContainer, LoaderFetch, MoreInfo },
  setup () {
    const {
      app,
      IsApartmentLoading,
      IsGeneralLoading,
      isMoreInfo,
      handleCloseModal
    } = useController()
    return {
      app,
      IsApartmentLoading,
      IsGeneralLoading,
      isMoreInfo,
      handleCloseModal
    }
  }
})
</script>
