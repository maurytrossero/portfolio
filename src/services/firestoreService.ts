import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore"; // Asegúrate de importar getDocs también

// Define una interfaz para el tipo de datos
interface Cancion {
    id?: string; // Puede ser opcional al crear
    nombre: string;
    interprete: string;
}

const collectionName = "canciones"; // Reemplaza con el nombre de tu colección

// Función para añadir una canción
const addData = async (data: Cancion): Promise<string | void> => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Documento escrito con ID: ", docRef.id);
        return docRef.id; // Devuelve el ID del documento creado
    } catch (e) {
        console.error("Error añadiendo documento: ", e);
    }
};

// Función para recuperar las canciones
const getCanciones = async (): Promise<Cancion[]> => {
    const snapshot = await getDocs(collection(db, collectionName)); // Usa el mismo nombre de colección
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Cancion[];
};

// Exporta ambas funciones
export { addData, getCanciones };
