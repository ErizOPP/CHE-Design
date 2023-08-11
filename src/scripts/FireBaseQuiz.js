import { initializeApp } from "firebase/app";
import {firebaseConfig} from "../data/api-google"
const app = initializeApp(firebaseConfig);
import { getFirestore, addDoc, collection, doc, setDoc } from "firebase/firestore";
const db = getFirestore(app);

try {
    const docRef = await addDoc(collection(db, "quiz"), {
    name_local: {input_name},
    select_cant_colores: {alt_color},
    select_estilo_logo: {alt_logo},
    select_estilo_tipo: {alt_tipo},
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

/*  const docRef = await addDoc(collection(db, "quiz"), {
    name_local: "pruebalocal",
    select_cant_colores: "pruebacolor",
    select_estilo_logo: "pruebalogo",
    select_estilo_tipo: "pruebatipo",
  });*/