import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { auth } from "@services/FirebaseConfig";
import { UserDTO } from "@dtos/UserDTO";
import { AppError } from "@utils/AppError";

export async function CreateUser({ displayName, email, password }: UserDTO) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password!
    );

    if (response.user && auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: displayName
      });
    }

    return response;
  } catch (error: any) {
    throw new AppError(error.message);
  }
}

export async function LoginUser(email: string, password: string) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error: any) {
    throw new AppError(error.message);
  }
}

export async function LogoutUser() {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new AppError(error.message);
  }
}

export async function SendEmailForgotPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    throw new AppError(error.message);
  }
}
