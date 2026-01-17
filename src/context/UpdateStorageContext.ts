import { createContext } from "react";

interface UpdateStorageContextType {
  updateStorage: any;
  setUpdateStorage: (value: any) => void;
}

export const UpdateStorageContext = createContext<UpdateStorageContextType | null>(null);
