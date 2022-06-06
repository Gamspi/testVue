import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ApartmentsStateInterface } from './state'
import LoadService from '../../services/LoadService'

const actions: ActionTree<ApartmentsStateInterface, StateInterface> = {

  async sfetchApartments ({ commit }):Promise<void> {
    commit('mutateIsLoading', true)
    await LoadService.apiRequest(('./apartments.json')).then(
      ({ data }) => {
        commit('mutateApartments', data)
      }
    )
      .finally(() => {
        commit('mutateIsLoading', false)
      })
  }
}

export default actions
