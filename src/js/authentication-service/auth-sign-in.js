import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './api-firebase';
// const auth = getAuth();

signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
