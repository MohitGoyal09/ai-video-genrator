import React from "react";
import { Sparkles, Video } from "lucide-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
function VideoCreateOption() {
  const { user } = useUser();
  const router = useRouter();
  const createScratchVideo = async () => {
    const videoId = uuidv4();
    try {
      const result = await axios.post("/api/video", {
        videoId,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });
      console.log("Video created successfully", result.data);
      router.push(`/editor/${videoId}`);
    } catch (error) {
      console.error("Error creating video", error);
    }
  };
  return (
    <>
      <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up">
        Let's create your first video. Choose from our AI video generation tool
        or upload your own video for editing.
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
          <div onClick={createScratchVideo} className="w-full">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCreateOption;
