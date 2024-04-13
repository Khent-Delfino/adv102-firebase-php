// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAiBrN-o3KakVynXEO5caOEO6So-W2jlm4',
	authDomain: 'test-adv102.firebaseapp.com',
	projectId: 'test-adv102',
	storageBucket: 'test-adv102.appspot.com',
	messagingSenderId: '202076247860',
	appId: '1:202076247860:web:6d89b8f38593a389a6f761',
	measurementId: 'G-N6N8CWPJD3',
	databaseURL: 'https://test-adv102-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
