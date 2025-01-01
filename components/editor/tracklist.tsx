"use client";
import React, { useContext, useState , useEffect} from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { VideoFramesContext } from "@/app/_context/VideoFramesContext";

const defaultFrame = {
  image: "/icon.png",
  text: "Hello Mon",
  textColor: "black",
  fontsize: 20,
  duration: 2,
};

export default function TrackList() {
  const [framelists, setFramelists] = useState([defaultFrame]);
  const [selectedFrame, setSelectedFrame] = useState(0);
  const { videoFrames, setVideoFrames } = useContext(VideoFramesContext);
  const addNewFrame = () => {
    setFramelists((prev) => [...prev, defaultFrame]);
  };

  const deleteFrame = (index: number) => {
    const updatedFrameList = framelists.filter((_, i) => i !== index);
    setFramelists(updatedFrameList);
    if (
      selectedFrame >= updatedFrameList.length &&
      updatedFrameList.length > 0
    ) {
      setSelectedFrame(updatedFrameList.length - 1);
    } else if (updatedFrameList.length === 0) {
      setSelectedFrame(-1);
    }
  };
  useEffect(() => {
       let totalDuration = 0;
       framelists.forEach((frame) => {
          totalDuration += frame.duration;
       })

       setVideoFrames({
          totalDuration : totalDuration,
          frames: framelists,
          selectedFrame: selectedFrame
       })
  }, [framelists , selectedFrame])

  useEffect(() => {
    if (videoFrames.frames.length > 0 && videoFrames.frames !== framelists) {
      setFramelists(videoFrames.frames);
      setSelectedFrame(videoFrames.selectedFrame);
    }
  }, [videoFrames]);
  return (
    <div className="bg-gray-100 rounded-xl shadow-md p-6">
      <div className="max-h-[60vh] overflow-y-auto scroll-smooth pr-4 space-y-4">
        {" "}
        {framelists.map((frame, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center border border-gray-200 p-4 rounded-md cursor-pointer
                    transition-all duration-200 hover:shadow-lg hover:bg-gray-50
                    ${
                      selectedFrame === index
                        ? "bg-white shadow-md border-blue-500"
                        : ""
                    }`}
            onClick={() => setSelectedFrame(index)}
            aria-label={`Select frame ${index + 1}`}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") setSelectedFrame(index);
            }}
          >
            <div className="relative w-full h-40 mb-3">
              {" "}
              <Image
                src={frame.image}
                alt={`Frame ${index + 1}`}
                fill
                className="object-contain rounded-md"
              />
              {selectedFrame === index && (
                <button
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteFrame(index);
                  }}
                  aria-label={`Delete frame ${index + 1}`}
                >
                  <Trash2 className="h-4 w-4 text-red-500 hover:text-red-700 transition-colors duration-200" />
                </button>
              )}
            </div>
            <h2 className="text-sm font-medium text-center text-gray-700">
              {frame.text}
            </h2>
          </div>
        ))}
      </div>
      <Button
        size="sm"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors duration-200 shadow-md"
        onClick={addNewFrame}
        aria-label="Add new frame"
      >
        Add New Frame
      </Button>
    </div>
  );
}
