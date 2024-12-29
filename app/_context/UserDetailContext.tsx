import { createContext, Dispatch, SetStateAction } from "react";


export interface UserDetail {
  name: string;
  image?: string | null; 
  email: string;
  credits: number;
}

export interface UserDetailContextType {
  userDetail: UserDetail;
  setUserDetail: Dispatch<SetStateAction<UserDetail>>;
}

export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: {
    name: "",
    image: "",
    email: "",
    credits: 0,
  },
  setUserDetail: () => {}, 
});
