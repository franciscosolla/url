import { doc, getDoc } from "firebase/firestore"
import { getFirebaseStore } from "../firebase/getFirebaseStore"

/**
 * Decodes a given path and retrieves the corresponding URL from the Firebase store.
 * 
 * @param path - The path to decode.
 * @returns A Promise that resolves to the decoded URL, or null if the path does not exist.
 */
export const decode = (path: string): Promise<string | null> => {
  return Promise.any([
    getDoc(doc(getFirebaseStore(), 'shorten', path)),
    getDoc(doc(getFirebaseStore(), 'encoded', path))
  ]).then(doc => doc.exists() ? doc.data().url : null);
}