import React, { useContext , useRef  , useEffect} from "react";
import { Player, PlayerRef } from "@remotion/player";
import RemotionComposition from "./RemotionComposition";
import { Fullscreen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VideoFramesContext } from "@/app/_context/VideoFramesContext";

function RemotionPlayer() {
  const { videoFrames, setVideoFrames } = useContext(VideoFramesContext);
  const [screensize, setScreensize] = React.useState({
    width: 530,
    height: 300,
  });
  const playerRef = useRef<PlayerRef>(null);
  useEffect(() => {
   if (videoFrames?.selectedFrame){
    let skipDuration = 0 ;
    for (let i = 0 ; i < videoFrames.selectedFrame ; i++){
      skipDuration += videoFrames.frames[i].duration;
    }
    playerRef?.current?.seekTo(skipDuration * 30);
   }
  }, [videoFrames?.selectedFrame])
  return (
    <div>
      <div className="flex justify-center items-center">
        {videoFrames?.totalDuration && (
          <Player
            component={RemotionComposition}
            durationInFrames={Number(videoFrames?.totalDuration * 30)}
            compositionWidth={screensize.width}
            compositionHeight={screensize.height}
            fps={30}
            controls
            ref={playerRef}
            style={{
              width: "100%",
              height : 300,
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f8f9fa",
              border: "1px solid #e9ecef",
            }}
            inputProps={{
              frames: videoFrames.frames,
            }}
          />
        )}
      </div>
      <div className="mt-5 flex justify-between items-center">
        <Fullscreen />
        <Select onValueChange={(value) => setScreensize(JSON.parse(value))}>
          <SelectTrigger className="w-[200px] h-[40px]">
            <SelectValue placeholder="16:9" />
          </SelectTrigger>
          <SelectContent className="w-[200px]">
            <SelectItem value={JSON.stringify({ width: 400, height: 400 })}>
              1:1
            </SelectItem>
            <SelectItem value={JSON.stringify({ width: 500, height: 300 })}>
              16:9
            </SelectItem>
            <SelectItem value={JSON.stringify({ width: 300, height: 500 })}>
              9:16
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default RemotionPlayer;
