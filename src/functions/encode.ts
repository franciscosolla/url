import { doc, setDoc } from "firebase/firestore"
import { getFirebaseStore } from "../firebase/getFirebaseStore"

/**
 * Encodes a URL and saves it to the specified path in the Firebase store.
 * 
 * @param url - The URL to encode.
 * @param path - The path that wil be redirected to this url.
 * @returns A Promise that resolves when the URL has been successfully encoded and saved.
 */
export const encode = (url: string, path: string) => {
  return setDoc(doc(getFirebaseStore(), 'url', path), { url });
}