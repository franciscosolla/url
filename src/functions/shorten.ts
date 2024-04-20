import { doc, setDoc } from "firebase/firestore"
import { getFirebaseStore } from "../firebase/getFirebaseStore"

/**
 * Stores a mapping from the given path to the original URL.
 * 
 * @param {string} url - The original URL to be shortened.
 * @param {string} path - The path to store the mapping.
 * @returns {Promise<void>} - A promise that resolves when the mapping is successfully stored.
 */
export const shorten = (url: string, path: string) => {
  return setDoc(doc(getFirebaseStore(), 'shorten', path), { url });
}