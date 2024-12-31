"use client";
import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";

function RemotionComposition({
  frames,
}: {
  frames: {
    image: string;
    text: string;
    textColor: string;
    fontsize: number;
    duration: number;
  }[];
}) {
  const { width, height } = useVideoConfig();
  let trackframe = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {frames.map((frame, index) => {
        const fromframe = index === 0 ? 0 : trackframe;
        trackframe += frame.duration * 30;
        return (
          <Sequence
            key={index}
            from={fromframe}
            durationInFrames={frame.duration * 30}
          >
            <AbsoluteFill
              style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: frame.textColor,
                  fontSize: frame.fontsize,
                }}
              >
                <h2
                  style={{
                    color: "white",
                  }}
                >
                  {frame.text}
                </h2>
              </div>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
}

export default RemotionComposition;
