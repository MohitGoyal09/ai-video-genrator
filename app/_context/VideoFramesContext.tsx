import { createContext } from "react";

export interface VideoFrame {
    totalDuration : number,
    frames : {
        image: string,
        text: string,
        textColor: string,
        fontsize: number,
        duration: number,
    }[],
    selectedFrame : number
}

export interface VideoFramesContextType {
    videoFrames : VideoFrame,
    setVideoFrames : (videoFrames : VideoFrame) => void
}
export const VideoFramesContext = createContext<VideoFramesContextType>({
    videoFrames: {
        totalDuration : 0,
        frames : [],
        selectedFrame : 0
    },
    setVideoFrames : () => {}
})