// import { initializeApp } from 'firebase/app'
import { getApp, getApps, initializeApp } from 'firebase/app'

// import {
//   FIREBASE_API_KEY,
//   FIREBASE_APP_ID,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
// } from '@src/constant/env'

const firebaseConfig = {
  apiKey: 'AIzaSyDlJ5Z5e7GXjjfUVgcPngkT8ZnoIqMh3tg',
  authDomain: 'fir-chat-test-e6913.firebaseapp.com',
  projectId: 'fir-chat-test-e6913',
  storageBucket: 'fir-chat-test-e6913.appspot.com',
  messagingSenderId: '616635229907',
  appId: '1:616635229907:web:f5951be0dae98542c95626',
  // apiKey: FIREBASE_API_KEY,
  // authDomain: FIREBASE_AUTH_DOMAIN,
  // projectId: FIREBASE_PROJECT_ID,
  // storageBucket: FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  // appId: FIREBASE_APP_ID,
}

// export const app = initializeApp(firebaseConfig)
export const initializeFirebaseApp = () =>
  !getApps().length ? initializeApp(firebaseConfig) : getApp()
