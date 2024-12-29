"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { ReactNode } from "react";
import axios from "axios";
import { UserDetailContext, UserDetail } from "./_context/UserDetailContext";

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  const { user, isLoaded } = useUser();
  const [userDetail, setUserDetail] = React.useState<UserDetail>({
    name: "",
    image: null,
    email: "",
    credits: 0,
  });

  useEffect(() => {
    if (isLoaded && user) {
      const fetchUserData = async () => {
        try {
          const userData = {
            fullName: user.fullName || "",
            primaryEmailAddress: {
              emailAddress: user.primaryEmailAddress?.emailAddress || "",
            },
          };

          const response = await axios.post("/api/user", userData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

         
          setUserDetail(response.data);
          console.log("User details fetched/updated:", response.data);
        } catch (error) {
          console.error("Error fetching/updating user data:", error);
          if (axios.isAxiosError(error)) {
            console.error("Error details:", error.response?.data);
          }
        }
      };

      fetchUserData();
    }
  }, [isLoaded, user]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default Provider;