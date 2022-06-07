import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ApartmentsStateInterface } from './state'
import LoadService from '../../services/LoadService'

const actions: ActionTree<ApartmentsStateInterface, StateInterface> = {

  async fetchApartments ({ commit }):Promise<void> {
    commit('mutateIsLoading', true)

    await LoadService.apiRequest().then(
      (data) => {
        commit('mutateApartments', data)
      }
    )
      .finally(() => {
        commit('mutateIsLoading', false)
      })
  }

}

export default actions
