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
      }).then(() => {
        auth.signOut();
      });
    }
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

export const cardsData = [
  {
    id: 1,
    rating: 2.5,
    category: "Mango Boy",
    productName: "Blouse",
    price: 30,
    favorite: true
  },
  {
    id: 2,
    rating: 4.0,
    category: "Summer Fun",
    productName: "Swimsuit",
    price: 25,
    favorite: false
  },
  {
    id: 3,
    rating: 3.8,
    category: "Casual Wear",
    productName: "Jeans",
    price: 45,
    favorite: false
  },
  {
    id: 4,
    rating: 4.2,
    category: "Sports Gear",
    productName: "Running Shoes",
    price: 60,
    favorite: true
  }
];
