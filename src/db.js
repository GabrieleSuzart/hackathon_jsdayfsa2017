import Firebase from 'firebase'
import config from './firebase.config'

const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()
export default db