import { collection, addDoc, serverTimestamp, query, Timestamp, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import imageCompression from 'browser-image-compression'

// ⚙️ Configuración de Cloudinary
const CLOUD_NAME = 'dr0n6tfhw'
const UPLOAD_PRESET = 'unsigned_preset'

export async function uploadImageToCloudinary(file: File): Promise<string> {
  try {
    const compressedFile = await imageCompression(file, {
      maxSizeMB: 1, // ⚠️ Puedes ajustar esto según tu necesidad
      maxWidthOrHeight: 1920,
      useWebWorker: true
    })

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
    const formData = new FormData()
    formData.append('file', compressedFile)
    formData.append('upload_preset', UPLOAD_PRESET)

    const res = await fetch(url, {
      method: 'POST',
      body: formData
    })

    const responseBody = await res.text()

    if (!res.ok) {
      console.error('Error Cloudinary:', responseBody)
      throw new Error(JSON.parse(responseBody).error?.message || 'Error al subir imagen')
    }

    const data = JSON.parse(responseBody)
    console.log('✅ Imagen subida a Cloudinary:', data.secure_url)
    return data.secure_url
  } catch (err) {
    console.error('❌ Error al comprimir o subir imagen:', err)
    throw err
  }
}

export async function uploadImageWithMessage(file: File, message: string) {
  const imageUrl = await uploadImageToCloudinary(file)
  await addDoc(collection(db, 'gallery'), {
    imageUrl,
    message,
    createdAt: serverTimestamp(),
    approved: false
  })
}

export interface GalleryImage {
  id: string
  imageUrl: string
  message: string
  createdAt: Timestamp | null
  approved: boolean
}

export function listenToApprovedGallery(callback: (images: any[]) => void) {
  const galleryRef = collection(db, 'gallery')
  const q = query(galleryRef)

  return onSnapshot(q, (querySnapshot) => {
    const images = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    callback(images)
  })
}

export async function deleteGalleryImage(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, 'gallery', id))
    console.log(`🗑 Imagen con ID ${id} eliminada`)
  } catch (error) {
    console.error('❌ Error al eliminar la imagen:', error)
  }
}
