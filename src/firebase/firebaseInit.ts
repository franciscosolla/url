import { initializeApp, getApp } from "firebase/app";
import { firebaseConfig } from './firebaseConfig';

export function firebaseInit() {
  let app;

  try {
    app = getApp();
  } catch(error) {
    app = initializeApp(firebaseConfig);
  }

  return app;
}