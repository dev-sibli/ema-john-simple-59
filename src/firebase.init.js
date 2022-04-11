// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyADGx9fnnkaCnalv6qDcLlZz3yxB4jCt7M',
	authDomain: 'ema-john-simple-35117.firebaseapp.com',
	projectId: 'ema-john-simple-35117',
	storageBucket: 'ema-john-simple-35117.appspot.com',
	messagingSenderId: '446736092994',
	appId: '1:446736092994:web:18fe3ecfa91a205fce42db',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
