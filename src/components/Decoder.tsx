import { useEffect } from "react";
import { usePath } from "../hooks/usePath";
import { doc, getDoc } from "firebase/firestore";
import { getFirebaseStore } from "../firebase/getFirebaseStore";

export function Decoder() {
  const path = usePath();

  useEffect(() => {
    if (path?.length) {
      getDoc(doc(getFirebaseStore(), 'url', path)).then(doc => {
        if (doc.exists()) {
          window.location.href = doc.data().url;
        } else {
          window.location.href = '/';
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
      <p>{path}</p>
    </div>
  );
}