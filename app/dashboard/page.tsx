"use client"
import React , {useState} from 'react'
import { Sparkles, Video } from "lucide-react";
import Link from 'next/link';

function Dashboard() {
  const [videoList, setVideoList] = useState([]);

  return (
    <div className="p-10 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-fade-in">
          Welcome to Dashboard
        </h1>

        {videoList.length === 0 && (
          <>
            <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up">
              Let's create your first video. Choose from our AI video generation
              tool or upload your own video for editing.
            </p>

            <div className="flex flex-row justify-center items-center gap-12 mt-10 flex-wrap pl-20">
              <div className="border-2 border-blue-200 rounded-2xl p-10 shadow-lg w-full max-w-sm flex flex-col items-center bg-white/80 backdrop-blur-sm hover:bg-blue-50/90 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl group">
                <Link href={"/create-ai-video"} className="w-full">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-blue-100 p-6 mb-8 group-hover:bg-blue-200 transition-colors duration-300">
                      <Sparkles
                        size={60}
                        className="text-blue-600 group-hover:text-blue-700"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">
                      AI Video Generation
                    </h2>
                    <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700">
                      Create stunning videos automatically using our advanced AI
                      technology. Quick, efficient, and professional results.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="border-2 border-green-200 rounded-2xl p-10 shadow-lg w-full max-w-sm flex flex-col items-center bg-white/80 backdrop-blur-sm hover:bg-green-50/90 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl group">
                <Link href={"/editor"} className="w-full">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-green-100 p-6 mb-8 group-hover:bg-green-200 transition-colors duration-300">
                      <Video
                        size={60}
                        className="text-green-600 group-hover:text-green-700"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors">
                      Manual Upload
                    </h2>
                    <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700">
                      Upload your pre-recorded videos and enhance them with our
                      powerful editing tools.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


export default Dashboard