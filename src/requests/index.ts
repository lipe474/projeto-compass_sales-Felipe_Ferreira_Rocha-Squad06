import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "@services/FirebaseConfig";
import { UserDTO } from "@dtos/UserDTO";
import { AppError } from "@utils/AppError";

export async function CreateUser({ displayName, email, password }: UserDTO) {
  try {
    if (!email && !password) {
      throw new AppError("Email and password are required");
    }

    const user = await createUserWithEmailAndPassword(auth, email, password);

    if (user && auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: displayName
      });
    }

    return user;
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
