import { useState, ReactNode } from "react";
import UserContext from "../userContext";
import { UserDetailsProps } from "../../@types/interface";

export default function UserProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<UserDetailsProps>({} as UserDetailsProps);

  return (
    <UserContext.Provider
      value={{
        usuario,
        setUsuario,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
