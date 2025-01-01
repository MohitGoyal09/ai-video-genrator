"use client"
import React , {useState} from 'react'
import { Sparkles, Video } from "lucide-react";
import Link from 'next/link';
import VideoCreateOption from '@/components/Dashboard/VideoCreateOption';

function Dashboard() {
  const [videoList, setVideoList] = useState([]);

  return (
    <div className="p-10 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-fade-in">
          Welcome to Dashboard
        </h1>

        {videoList.length === 0 && <VideoCreateOption/>}
        
      </div>
    </div>
  );
}


export default Dashboard