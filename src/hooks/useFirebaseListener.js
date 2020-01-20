import { useEffect } from 'react';
import firebaseClient from '../api/firebase-client';

const useFirebaseListener = (path, cb) => {
  useEffect(() => {
    firebaseClient.child(path).on('value', (snapshot) => {
      if (typeof cb === 'function') {
        cb(snapshot.val());
      }
    });

    return () => {
      firebaseClient.child(path).off();
    };
  }, []);
};

export default useFirebaseListener;
