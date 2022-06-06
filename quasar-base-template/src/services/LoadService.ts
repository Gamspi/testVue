// import ApiService from './ApiService'
import { HttpError } from '@microsoft/signalr'
import { ResponseType } from 'components/models'
import axios from 'axios'

export default class LoadService {
  public static async apiRequest (url: string): Promise<ResponseType> {
    const result: ResponseType = await axios.get(url).catch(
      err => { //eslint-disable-line
        throw new HttpError('Ошибка при загрузке', err.response) //eslint-disable-line
      }) //eslint-disable-line
    return result //eslint-disable-line
  }
}
