import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ApartmentsStateInterface } from './state'
const getters: GetterTree<ApartmentsStateInterface, StateInterface> = {
  getApartments (context) {
    return context.apartments
  },
  getIsLoading (context) {
    return context.isLoading
  },
  getIsGallery (context) {
    return context.isGallery
  },
  getGalleryImg (context) {
    return context.galleryImg
  },
  getIsMoreInfo (context) {
    return context.isMoreInfo
  },
  getActiveApartment (context) {
    return context.activeApartment
  }
}

export default getters
