import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDvg5hrfhaFfws9UccmZmJdJdfp96ZDalY",
  authDomain: "autotop-bbd9c.firebaseapp.com",
  projectId: "autotop-bbd9c",
  storageBucket: "autotop-bbd9c.firebasestorage.app",
  messagingSenderId: "992432525278",
  appId: "1:992432525278:web:a44749603559b056a6574f"
};
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
// Note que NÃO exportamos 'storage' aqui, pois vamos usar o Cloudinary