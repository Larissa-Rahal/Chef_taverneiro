import { createContext } from "react";
import { UserDetailsProps } from "../../@types/interface";

type contextType = {
  usuario: UserDetailsProps;
  setUsuario: (value: UserDetailsProps) => void;
};

const UserContext = createContext<contextType>({
  usuario: {} as UserDetailsProps,
  setUsuario: () => {},
});

export default UserContext;