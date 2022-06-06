import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ApartmentsStateInterface } from './state'
import LoadService from '../../services/LoadService'
// import axios from 'axios'

const actions: ActionTree<ApartmentsStateInterface, StateInterface> = {
  // fetchApartments ({ commit }) {
  //   commit('mutateIsLoading', true)
  //   setTimeout(() => {
  //     axios.get('./apartments.json')
  //       .then(({ data }) => {
  //         commit('mutateApartments', data)
  //       })
  //       .catch((e) => alert(e))
  //       .finally(() => {
  //         commit('mutateIsLoading', false)
  //       })
  //   }, 3000)
  // },
  async fetchApartments ({ commit }):Promise<void> {
    commit('mutateIsLoading', true)

    await LoadService.apiRequest(('./apartments.json')).then(
      ({ data }) => {
        console.log(data)// eslint-disable-line
        commit('mutateApartments', data)
      }
    )
      .finally(() => {
        commit('mutateIsLoading', false)
      })
  }

}

export default actions
