"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext, UserDetail } from "./_context/UserDetailContext";
import { VideoFramesContext, VideoFrame } from "./_context/VideoFramesContext";

function Provider({ children }: { children: React.ReactNode }) {
  const { user, isLoaded } = useUser();
  const [userDetail, setUserDetail] = useState<UserDetail>({
    name: "",
    image: null,
    email: "",
    credits: 0,
  });
  const [videoFrames, setVideoFrames] = useState<VideoFrame>({
    totalDuration: 0,
    frames: [],
    selectedFrame: 0,
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
      <VideoFramesContext.Provider value={{ videoFrames, setVideoFrames }}>
        {children}
      </VideoFramesContext.Provider>
    </UserDetailContext.Provider>
  );
}

export default Provider;
