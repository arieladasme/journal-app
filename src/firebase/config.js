import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDM1KliK8bhnBHHXtDhzZJie1TAfPNPwWs',
  authDomain: 'react-cursos-d2e73.firebaseapp.com',
  projectId: 'react-cursos-d2e73',
  storageBucket: 'react-cursos-d2e73.appspot.com',
  messagingSenderId: '29433483282',
  appId: '1:29433483282:web:719c7c9bd83bf5106488cb',
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
