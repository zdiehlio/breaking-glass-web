import firebase from 'firebase'
import 'firebase/firestore'

export const GET_COMPANIES = 'get_companies'
export const CREATE_COMPANIES = 'create_companies'
export const FIND_COMPANY = 'find_company'

let config =  
  {
    "type": "service_account",
    "databaseURL": "https://breaking-glass-web.firebaseio.com/",
    "projectId": "breaking-glass-web",
    "private_key_id": "af3ea53411f3ab0b0221c1d03872825a6bc40316",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDZJ8AhrINPNtua\nHscm19E80ddVa/mRQqCLkNldqZw96sYjAfB366Jkk49KKVWQzwVCIGhB6Pif9xo8\nZEF5akQVM9M41WnZjMeTHCuA5KwhlygBar8inG/spR4Ei8FIm1bocmTuk+6IdBE3\n+o846scQCjaC2vBSwXczSDxVGUKAGRIW8QlWqqIkcWUUzu58RVR6D5B/TOcGGWQU\nN9ZdBT0MDFu/quJniqHscIwxFinG6HxlAJxvCW9ABNz12jXrVumM9VcV+//xkE7W\nF1EApWkY67sFFtiYP/77Sylo8DI0KpJIE3uQgBFC84z0ozzQ5jWYjAIlCXLwmsrf\nthhyruRbAgMBAAECggEAHCgk/SNy7JIutp99BSgAr8PUXvV0KQXxmTHRQsLGSS+o\nPKEjaU6QAj3b24AxNxM7bvqSv3u8w8kfiWsaeOrIJH5RdKdqD9T1imP3BBcidpc0\njxJ58WaatfLRn0HxGuqsFycWDT/4iDrnLKdRa3jjEiJbimtnCTlKrRyVrhcWDKkg\n3Fmnx6Pv0uZA6HhxmDR/rSpUVc6o3PeF5XIZzLj1hnJG85GcZhcTLQFCVw1AVChG\nDmck/6AItxoe4sjxza9VxLNXzzdQSs3oUgyAfkypQKfSvMPAgnr3I9ZMmdkI5pkN\ndZ/NyNoBPzbFGkM/FauUp4KgSro8sxysMk8LvVGnkQKBgQD/elmhWzzUU/60YMYD\nTHw4CUyeYmMWAypIQam0JE88x9sR/Os/WVWmPLQ3QJ6ROEdWZP+UqeWoEEhtiJUT\nHwrqqDePQBc3JssbktScaYAsDBWJOlT70iW13yQj5rU94h44bxom8xWhP1s75Swo\nLZL89FTCQDVLYChUVvUN6+z0uQKBgQDZmVo3biq/8PEGKKGx/4f2XIRHYA3bYtK+\nhgFeMo/+qFEjqofN9rwR3eVDNLRje6mByIlB+GIJwCeVXkXAN5TEKC4LZrH6C11D\nFxdeNyEnpCMGGg3U6f0I4zDwmM46O9Y5FyA19QSrU0wwX3BfRb51saS+QFr8O4+n\n4Ymyx1h/swKBgQDyB3A4XB5BrR1ktzWAVIpt7+llNyJV7UO2Vna2UZu7oj7ZSLl5\nN2Hb7jBxE8flHeL/Zwl2RopqcJqdIkLQbZ1C94BDNt2Hgznx8mV3lL83e28/pUJz\nmv/cz/wGAv/7E2e74Q1ujuYT79i34oG1wo85EyPlLz0OHpe2ZvcbbEH9CQKBgQC6\nTWkHkmQ5qCHEYx9l1eFj1fxPW/chQbAr/XHIY8QTharKvaO+fSSyq2gyLTrQ/jy3\n6KlT+UR/Eq0RXwCbPTs64yfhDREOg5Ja8bdJLCxP02FFRSNYiunhJRtus3XGOBsH\nEDy81cYkpZHSzLPabk1OWUUyusjrslchpqGNls23rwKBgQDYuoiVZdVSBilVgFp2\nzVUAfFTgYP78SiA7jD25hem37XZoaKvFl7PJtTCmgo4P+z/g4OLkhGcYi9YB1gNQ\nUi4rn6N6upo/SHWZJFB2NLt/+ateaQn4VQwKGU0FisLoTumaz7mZCa4KT0bQg3/p\nnR2UtdwZOl7LkNsUrIwfkKHunw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-7dzkz@breaking-glass-web.iam.gserviceaccount.com",
    "client_id": "105382652663866088957",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7dzkz%40breaking-glass-web.iam.gserviceaccount.com"
  } 
firebase.initializeApp(config)


const db = firebase.database()

export function createCompany(name) {
  let request = db.ref(`companies/${name}`).set({
    company: name,
  })
  return function(dispatch){
    dispatch({
      type: CREATE_COMPANIES,
      payload: request,
    })
  }
}

export function getCompanies() {
  let companiesRef = db.ref(`companies/`);
  let request = companiesRef.once('value').then(function(snapshot) {
    return snapshot.val()
  })
    return function(dispatch){
      dispatch({
        type: GET_COMPANIES,
        payload: request,
      })
    }
  }

  export function findCompany(name) {
    let companiesRef = db.ref(`companies/`);
    let request = companiesRef.orderByValue().startAt(name).once('value').then(function(snapshot) {
      return snapshot.val()
    })
      return function(dispatch){
        dispatch({
          type: FIND_COMPANY,
          payload: request,
        })
      }
  }

