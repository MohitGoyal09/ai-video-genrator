"use client";
import React, { useContext , useEffect } from 'react'
import { Button } from '../ui/button'
import { useParams } from 'next/navigation';
import { VideoFramesContext } from '@/app/_context/VideoFramesContext';
import axios from 'axios';
import { toast } from "sonner";


function SaveVideo() {
  const {videoId} = useParams();
  const { videoFrames, setVideoFrames } = useContext(VideoFramesContext);
  useEffect(() => {
    videoId && GetVideoData();
  }, [videoId])
  const saveVideo = async () => {
    try {
      const result = await axios.put("/api/video", {
        videoId,
        videoData: videoFrames
      });
      toast.success("Video saved successfully");
      console.log("Video saved successfully", result.data);
    } catch (error) {
      console.error("Error saving video", error);
    }
  }

  const GetVideoData = async () => {
    try {
      const result = await axios.get(`/api/video?videoId=${videoId}`);
      console.log("Video data fetched successfully", result.data);
      setVideoFrames(result.data.videoData);
    } catch (error) {
      console.error("Error fetching video data", error);
      
    }
  }
  return (
    <div>
        <Button variant = "outline" onClick = {saveVideo}>Save</Button>
    </div>
  )
}

export default SaveVideo