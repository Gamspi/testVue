import { MutationTree } from 'vuex'
import { ApartmentsStateInterface } from './state'
import { Apartment } from 'src/models/apartments'

const mutation: MutationTree<ApartmentsStateInterface> = {
  setIsLoading (state:ApartmentsStateInterface, payload:boolean) {
    state.isLoading = payload
  },
  setIsGallery (state:ApartmentsStateInterface, payload:boolean) {
    state.isGallery = payload
  },
  setGalleryImg (state:ApartmentsStateInterface, payload:{ 'path': string }[]) {
    state.galleryImg = payload
  },
  setIsMoreInfo  (state:ApartmentsStateInterface, payload:boolean) {
    state.isMoreInfo = payload
  },
  setApartments (state:ApartmentsStateInterface, payload:Apartment[]) {
    state.apartments = payload
  },
  setActiveApartment (state:ApartmentsStateInterface, payload:Apartment|null) {
    state.activeApartment = payload
  }
}

export default mutation
