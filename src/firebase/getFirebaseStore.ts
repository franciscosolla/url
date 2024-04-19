import { getFirestore } from 'firebase/firestore';
import { getFirebaseApp } from './getFirebaseApp';

export const getFirebaseStore = () => {
  return getFirestore(getFirebaseApp());
}