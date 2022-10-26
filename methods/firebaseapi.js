import * as firebase from 'firebase';
import { ApiKey,AuthDomain,ProjectId,StorageBucket,MessagingSenderId,AppId,MeasurementId } from 'react-native-dotenv';
import firestore from 'firebase/firestore';

const firebaseConfig = {
	apiKey:ApiKey,
	authDomain:AuthDomain,
	projectId:ProjectId,
	storageBucket:StorageBucket,
	messagingSenderId:MessagingSenderId,
	appId:AppId,
	measurementId:MeasurementId,
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
