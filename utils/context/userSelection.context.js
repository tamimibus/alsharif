import { createContext, useContext } from "react";

export const UserSelection = createContext(null);

export const UserSelectionProvider = UserSelection.Provider;

export function useUserSelection() {
  const context = useContext(UserSelection);
  console.log("checking==>context", context);
  if (!context) {
    throw new Error(
      "useUserSelection must be used within a UserSelectionProvider"
    );
  }
  return context;
}
