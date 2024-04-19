import { doc, getDoc } from "firebase/firestore"
import { getFirebaseStore } from "../firebase/getFirebaseStore"

/**
 * Decodes a URL path and retrieves the corresponding URL from the Firebase store.
 * @param path - The path of the URL to decode.
 * @returns A Promise that resolves to the decoded URL if it exists in the Firebase store, or null otherwise.
 */
export const decode = (path: string): Promise<string | null> => {
  return getDoc(doc(getFirebaseStore(), 'url', path)).then(doc => doc.exists() ? doc.data().url : null);
}