import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAppDispatch } from '../store/types';
import { setIsLogin } from '../store/slice/userSlice';
import { useEffect } from 'react';

function AuthState() {
  const dispatch = useAppDispatch();
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setIsLogin(true));
        } else {
          dispatch(setIsLogin(false));
        }
      }),
    [dispatch]
  );
}

export { AuthState };
