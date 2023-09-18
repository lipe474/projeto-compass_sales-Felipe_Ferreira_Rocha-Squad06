import { useEffect, useState } from "react";

import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@services/FirebaseConfig";
import { CheckUserCreationDate } from "@utils/checkUserCreationDate";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        let isNew = CheckUserCreationDate(authUser.metadata.creationTime);
        setIsNewUser(isNew);
        setUser(authUser);
      } else {
        setUser(null);
        setIsNewUser(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, isNewUser, isLoading };
}
