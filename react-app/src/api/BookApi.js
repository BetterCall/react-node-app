import {db, snapshotToArray} from './FirebaseInit'
const BOOKS_REF = db.ref('books')

export default class BookApi {



  fetchBookByName = searchText => {
    console.log("query ", searchText)

    return new Promise(function(resolve, reject) {
      BOOKS_REF
        .orderByChild('title')
        .limitToFirst(3)
        .startAt(searchText)
        .endAt(searchText + '\uf8ff')
        .on('value', snapshot => {
          resolve(snapshotToArray(snapshot))
        })
    })


  }


// Sign In
  loginWithEmail = (credentials) => {
    /*
    console.log(credentials)
    const {email , password} = credentials

    return new Promise(function(resolve, reject) {
        auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
          resolve(data)
        })
        .catch(e => {
          reject(e)
        })

    });

    */

  }



}
