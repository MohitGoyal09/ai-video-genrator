"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { ReactNode } from "react";
import axios from "axios";

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
 
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      saveUserInfo();
    }
  }, [isLoaded, user]);

  const saveUserInfo = async () => {
    try {
      
      const userData = {
        fullName: user?.fullName ?? "",
        primaryEmailAddress: {
          emailAddress: user?.primaryEmailAddress?.emailAddress ?? "",
        },
      };

      const response = await axios.post("/api/user", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("User saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving user:", error);
      if (axios.isAxiosError(error)) {
        console.error("Error details:", error.response?.data);
      }
    }
  };

  return <div>{children}</div>;
}

export default Provider; 
