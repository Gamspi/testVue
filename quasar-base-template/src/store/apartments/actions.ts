import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ApartmentsStateInterface } from './state'
import axios from 'axios'
const actions: ActionTree<ApartmentsStateInterface, StateInterface> = {

  fetchApartments ({ commit }) {
    commit('setIsLoading', true)
    setTimeout(() => {
      axios.get('./apartments.json')
        .then(({ data }) => {
          commit('setApartments', data)
        })
        .catch((e) => alert(e))
        .finally(() => {
          commit('setIsLoading', false)
        })
    }, 3000)
  }
}

export default actions
