import AuthApi from './AuthApi'
import BookApi from './BookApi'


export default class Api {

  static AuthApi = new AuthApi()
  static BookApi = new BookApi()

}
