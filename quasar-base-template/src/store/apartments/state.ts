import { Apartment } from 'src/models/apartments'

export interface ApartmentsStateInterface {
  apartments: Apartment[];
  isLoading:boolean
  isGallery:boolean
  isMoreInfo:boolean
  galleryImg:{ 'path': string }[],
  activeApartment:Apartment|null
}

const state: ApartmentsStateInterface = {
  apartments: [],
  activeApartment: null,
  isLoading: false,
  galleryImg: [],
  isGallery: false,
  isMoreInfo: false
}

export default state
