import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyD5L6Lrjsjvh1nx2zn-vgMMH_phht6h7X8",
	authDomain: "ecommerce-fa598.firebaseapp.com",
	projectId: "ecommerce-fa598",
	storageBucket: "ecommerce-fa598.appspot.com",
	messagingSenderId: "1087314122312",
	appId: "1:1087314122312:web:d1807b9b3ad3b06b0aea7d",
	measurementId: "G-QHQ4PL8NV0"
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
