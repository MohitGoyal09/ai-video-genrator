import React from 'react'
import { Sparkles, Video } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from './ui/button';
import Link from 'next/link';


export default function CreateButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Create New Video
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] bg-gradient-to-b from-white to-gray-50">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent pb-2">
            Let's create a new video
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mt-10">
              <Link href={'/create-ai-video'} className="w-full">
                <div className="h-full border-2 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer bg-white hover:border-blue-500 group">
                  <div className="flex flex-col items-center">
                    <Sparkles size={70} className="mb-6 text-blue-500 group-hover:animate-pulse" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Generate video with AI</h2>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">Create stunning videos instantly using our advanced AI tools.</p>
                  </div>
                </div>
              </Link>
              
              <Link href={'/create-manual-video'} className="w-full">
                <div className="h-full border-2 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer bg-white hover:border-green-500 group">
                  <div className="flex flex-col items-center">
                    <Video size={70} className="mb-6 text-green-500 group-hover:animate-bounce" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Upload your own video</h2>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">Take control by uploading and editing your own content.</p>
                  </div>
                </div>
              </Link>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

