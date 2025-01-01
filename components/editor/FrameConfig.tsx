"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LetterText } from "lucide-react";
import TextArea from "./TextArea";
import { VideoFramesContext } from "@/app/_context/VideoFramesContext";
import SliderField from "./SliderField";
import DropDown from "./DropDown";

function FrameConfig() {
  const { videoFrames, setVideoFrames } = useContext(VideoFramesContext);
  const [frame, setFrame] = useState(
    videoFrames.frames[videoFrames.selectedFrame]
  );
  useEffect(() => {
    setFrame(videoFrames.frames[videoFrames.selectedFrame]);
  }, [videoFrames.selectedFrame]);

  const handleInputChange = (field: string, value: any) => {
    if (field === "duration") {
      setFrame((prev) => ({
        ...prev,
        [field]: parseInt(value, 10),
      }));
    } else {
      setFrame((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  useEffect(() => {
    if (videoFrames?.frames.length > 0 && frame) {
      const frameList = videoFrames.frames;
      frameList[videoFrames.selectedFrame] = frame;
      setVideoFrames({
        ...videoFrames,
        frames: frameList,
      });
    }
  }, [frame]);
  return (
    <div className="p-3 bg-gray-100 rounded-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="flex gap-2">
              {" "}
              <LetterText /> Text
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <TextArea frame={frame} handleInputChange={handleInputChange} />
            <DropDown
              label="duration"
              defaultValue={frame?.duration?.toString()}
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
              handleInputChange={handleInputChange}
            />
            <SliderField
              label="Font Size"
              defaultValue={frame?.fontsize}
              handleInputChange={handleInputChange}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FrameConfig;
