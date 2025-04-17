import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import LeftSideBar from "./components/LeftSideBar";
import MusicPlayerInfo from "./components/MusicPlayerInfo";
import AudioPlayer from "./components/AudioPlayer";
import HiddenAudioPlayer from "./components/HiddenAudioPlayer";

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

  return (
    <div className="flex flex-col bg-gradient-to-b from-zinc-800 to-zinc-900 h-screen p-2 gap-2">
      <HiddenAudioPlayer />
      <div className="h-full sm:h-[90%] flex flex-row justify-between">
        <ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden">
          {/* Left sidebar */}
          <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 5} maxSize={20} collapsedSize={0}> 
            <LeftSideBar />
          </ResizablePanel>

          <ResizableHandle className="w-1 mx-1 rounded-full"/>

          <ResizablePanel defaultSize={60} minSize={isMobile ? 0 : 10} maxSize={100}>
            <Outlet />
          </ResizablePanel>

          {!isMobile && (
            <>
              <ResizableHandle className="w-1 mx-1 my-2 rounded-full"/>

              {/* Music Info */}
              <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 18} maxSize={20} collapsedSize={0}>
                <MusicPlayerInfo />
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>

      {/* audio player control */}
      <div className={`h-15 sm:h-full ${isMobile ? "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm" : "block"}`}>
        <AudioPlayer />
      </div>  
      
    </div>
  )
}

export default MainLayout