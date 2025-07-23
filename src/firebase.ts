// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage" // 👈 necesario para subir imágenes


const firebaseConfig = {
    apiKey: "AIzaSyCBr7PHjhoB9iQVEc4IbkuxFxFImbjKrD8",
    authDomain: "invitacion-virtual-527d6.firebaseapp.com",
    projectId: "invitacion-virtual-527d6",
    storageBucket: "invitacion-virtual-527d6.appspot.com",
    messagingSenderId: "860883530112",
    appId: "1:860883530112:web:df2caeaae88875c42b1165",
    measurementId: "G-6ZGF7SJXMZ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app) // 👈 agregar esto


export { db, storage };
