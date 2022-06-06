import { MutationTree } from 'vuex'
import { ApartmentsStateInterface } from './state'
import { Apartment } from 'src/models/apartments'

const mutation: MutationTree<ApartmentsStateInterface> = {
  mutateIsLoading (state:ApartmentsStateInterface, payload:boolean) {
    state.isLoading = payload
  },
  mutateIsGallery (state:ApartmentsStateInterface, payload:boolean) {
    state.isGallery = payload
  },
  mutateGalleryImg (state:ApartmentsStateInterface, payload:{ 'path': string }[]) {
    state.galleryImg = payload
  },
  mutateIsMoreInfo  (state:ApartmentsStateInterface, payload:boolean) {
    state.isMoreInfo = payload
  },
  mutateApartments (state:ApartmentsStateInterface, payload:Apartment[]) {
    state.apartments = payload
  },
  mutateActiveApartment (state:ApartmentsStateInterface, payload:Apartment|null) {
    state.activeApartment = payload
  }
}

export default mutation
