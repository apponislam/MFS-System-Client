// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChucZ_Avas_euQ56m4jINF7WOWYA1-V0c",
    authDomain: "mfs-system.firebaseapp.com",
    projectId: "mfs-system",
    storageBucket: "mfs-system.appspot.com",
    messagingSenderId: "1090211683697",
    appId: "1:1090211683697:web:25233533f8df7ebb512ad0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
