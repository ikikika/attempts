import { useContext, createContext } from "react";

export const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
