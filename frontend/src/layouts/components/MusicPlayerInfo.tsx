import MusicPlayerInfoSkeleton from "@/components/skeleton/MusicPlayerInfoSkeleton"
import { usePlayerStore } from "@/store/usePlayerStore"

const MusicPlayerInfo = () => {
  const { playNext, currentSong, queue, currentIndex } = usePlayerStore();

  // show skeleton only if there's no song at all
  if (!currentSong) return <MusicPlayerInfoSkeleton />;

  return (
    <div className="rounded-md h-full bg-gradient-to-b from-zinc-900 to-neutral-950 backdrop-blur-md sm:p-6 p-4">
      <div className="flex flex-col space-y-7 h-full justify-center">
        <div className="flex flex-col space-y-5">
          <div className="sm:text-xl font-medium">Now Playing</div>
          <div className="flex flex-col bg-zinc-800/40 p-4 rounded-md">
            <img src={currentSong.imageUrl} alt="Album Cover" className="mb-4 rounded-md" />
            <div className="text-2xl mb-2">{currentSong.title}</div>
            <div>{currentSong.artist}</div>
          </div>
        </div>

        {queue[currentIndex + 1] && (
          <div className="flex flex-col space-y-5">
            <div className="sm:text-xl font-medium">Next in Queue</div>
            <button
              className='flex items-center bg-zinc-800/50 rounded-md overflow-hidden display-block hover:bg-neutral-600 cursor-pointer'
              onClick={playNext}
            >
              <div className='w-16 sm:w-20 h-16 sm:h-20 bg-zinc-700 flex-shrink-0'>
                <img src={queue[currentIndex + 1].imageUrl} alt="Album Cover" />
              </div>
              <div className='p-2 text-start flex-1 space-y-1'>
                <div className="font-medium">{queue[currentIndex + 1].title}</div>
                <div className="text-sm font-light">{queue[currentIndex + 1].artist}</div>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MusicPlayerInfo;
