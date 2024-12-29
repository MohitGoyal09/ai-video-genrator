"use client"
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react'
import { ReactNode } from 'react';
import axios from 'axios';

interface ProviderProps {
  children: ReactNode;
}

function provider({ children }: ProviderProps) {
  const user = useUser();
  useEffect(() => {
    user && saveUserInfo();
  }, [user]);

  const saveUserInfo = async () => {
   const result = await axios.post("/api/user", {
     user: user,
   });
   console.log(result);
  }
  return (
    <div>
        {children}
    </div>
  )
}

export default provider