
import {
  getAuth,
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  reauthenticateWithCredential
} from '@react-native-firebase/auth';

const auth = getAuth();

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.log('Firebase Auth Error:', error);
    let errorMessage = '';
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'That email address is already in use!';
        break;
      case 'auth/invalid-email':
        errorMessage = 'That email address is invalid!';
        break;
      case 'auth/weak-password':
        errorMessage = 'The password is too weak.';
        break;
      default:
        errorMessage = error.message;
        break;
    }
    throw new Error(errorMessage);
  }
};
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; 
  } catch (error) {
    console.log('Firebase Auth Error:', error);
    let errorMessage = '';
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'This Email is not Registered';
        break;
      case 'auth/invalid-email':
        errorMessage = 'That email address is invalid!';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect Password';
        break;
      default:
        errorMessage = error.message;
        break;
    }
    throw new Error(errorMessage);
  }
};

export const updatePassword = async (currentPassword, newPassword) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('No logged-in user.');
    const credential = EmailAuthProvider.credential(user.email.trim(), currentPassword);

    await reauthenticateWithCredential(user, credential);
    await user.updatePassword(newPassword);

    return true;
  } catch (error) {
    console.log('Firebase Auth Error:', error);
    let errorMessage = '';
    switch (error.code) {
      case 'auth/wrong-password':
        errorMessage = 'Current password is incorrect.';
        break;
      case 'auth/weak-password':
        errorMessage = 'New password is too weak.';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many attempts. Please try again later.';
        break;
      default:
        errorMessage = error.message;
        break;
    }
    throw new Error(errorMessage);
  }
};