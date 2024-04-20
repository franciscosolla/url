import { useState, useEffect } from 'react';
import { collection, documentId, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { getFirebaseStore } from '../firebase/getFirebaseStore';
import { ACCEPTED_CHARS } from '../constants/ACCEPTED_CHARS';

export const useHash = () => {
  const [hash, setHash] = useState<string>();

  useEffect(() => {
    getDocs(query(collection(getFirebaseStore(), 'shorten'), orderBy(documentId(), 'desc'), limit(1))).then((querySnapshot) => {
      console.log({ querySnapshot, size: querySnapshot.size , docs: querySnapshot.docs });
      
      if (querySnapshot.size > 0) {
        const latUrlPath = querySnapshot.docs[0].id;
        const lastUrlPathChar = latUrlPath[latUrlPath.length - 1];

        if (lastUrlPathChar === ACCEPTED_CHARS[ACCEPTED_CHARS.length - 1]) {
          setHash(latUrlPath + ACCEPTED_CHARS[0]);
        } else {
          const lastUrlPathCharIndex = ACCEPTED_CHARS.indexOf(lastUrlPathChar);
          setHash(latUrlPath.slice(0, -1) + ACCEPTED_CHARS[lastUrlPathCharIndex + 1]);
        }
      } else {
        setHash(ACCEPTED_CHARS[0]);
      }
    });
  }, []);

  return hash;
};
