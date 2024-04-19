import { firebaseInit } from "./firebaseInit";

export function getFirebaseApp() {
  return firebaseInit();
}