
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAxbM_oET7g1x8N9mUVU9iv74qBvqutE8w",
  authDomain: "shopify-566b8.firebaseapp.com",
  projectId: "shopify-566b8",
  storageBucket: "shopify-566b8.appspot.com",
  messagingSenderId: "782300816279",
  appId: "1:782300816279:web:92cffca147017ca4339ad2"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db= getFirestore(app)
export const storage =getStorage(app)

export default app