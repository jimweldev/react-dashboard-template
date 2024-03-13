import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthUserState {
  authUser: any | null;
  setAuthUser: (authUser: any) => void;
  removeAuthUser: () => void;
}

const authUserStore = (set: any): AuthUserState => ({
  authUser: null,
  setAuthUser: (authUser: any) => {
    set(() => ({
      authUser,
    }));
  },
  removeAuthUser: () => {
    set(() => ({
      authUser: null,
    }));
  },
});

const useAuthUserStore = create(
  devtools(
    persist(authUserStore, {
      name: "authUser",
    })
  )
);

export default useAuthUserStore;
