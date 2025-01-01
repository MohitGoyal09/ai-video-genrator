"use client"
import RemotionPlayer from "@/components/editor/RemotionPlayer";
import SaveVideo from "@/components/editor/SaveVideo";
import TrackList from "@/components/editor/tracklist";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Editor() {
  return (
    <div>
      <Header />
      <div className="p-10 md:px-24 lg:px-32 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold px-5 py-5">Video Editor</h1>
          <div className="flex items-center space-x-4">
            <SaveVideo />
            <Button className="rounded-lg">Export Video</Button>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-7 mt-7 ">
          <TrackList />
          <div className="col-span-3">
            <RemotionPlayer />
          </div>
          <div className="col-span-2">Control Section</div>
        </div>
      </div>
    </div>
  );
}
