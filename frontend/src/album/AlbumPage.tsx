import { useMusicStore } from "@/store/useMusicStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pause, Play } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";
import { usePlayerStore } from "@/store/usePlayerStore";

export const formatDuration = (seconds: number) => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const AlbumPage = () => {
    const { albumId } = useParams();
	const { fetchAlbumById, currentAlbum, isLoading } = useMusicStore();
    const { currentSong, playAlbum, togglePlay, isPlaying } = usePlayerStore();

    useEffect(() => {
        if (albumId) fetchAlbumById(albumId);
	}, [fetchAlbumById, albumId]);
    
    if (isLoading) return <main className="h-full flex flex-col gap-2 rounded-md bg-gradient-to-b from-zinc-900 to-neutral-950 backdrop-blur-md" />;   

    const handlePlayAlbum = () => {
		if (!currentAlbum) return;

		const isCurrentAlbumPlaying = currentAlbum?.songs.some((song) => song._id === currentSong?._id);
		if (isCurrentAlbumPlaying) togglePlay();
		else {
			// start playing the album from the beginning
			playAlbum(currentAlbum?.songs, 0);
		}
	};

    const handlePlaySong = (index: number) => {
		if (!currentAlbum) return;

		playAlbum(currentAlbum?.songs, index);
	};

    return (
        <main className="h-full flex flex-col gap-2 rounded-md bg-gradient-to-b from-zinc-900 to-neutral-950 backdrop-blur-md">
            <ScrollArea>
                <div className="m-6">
                    {/* Album header */}
                    <div className="border-b-2">
                        <div className='flex gap-6 pb-8'>
                            <img
                                src={currentAlbum?.imageUrl}
                                alt={currentAlbum?.title}
                                className='w-20 h-20  sm:w-[240px] sm:h-[240px] shadow-xl rounded'
                                />
                            <div className='flex flex-col justify-end'>
                                <h1 className='text-7xl font-bold my-4'>{currentAlbum?.title}</h1>
                                <div className='flex items-center gap-3 text-sm text-zinc-100'>
                                    <p className='text-sm font-medium'>Album</p>
                                    <span className='font-medium text-white'>•</span>
                                    <span className='font-medium text-white'>{currentAlbum?.artist}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <Button
                                variant={"secondary"}
                                className="text-white sm:h-15 sm:w-40 hover:scale-105 transition-all duration-200 ease-in-out flex justify-center items-center gap-2"
                                onClick={handlePlayAlbum}
                            >
                                <div className="flex items-center gap-2">
                                    {isPlaying && currentAlbum?.songs.some((song) => song._id === currentSong?._id) ? (
                                        <>
                                            <Pause />
                                            <span className="text-sm font-bold tracking-wide">Pause</span>
                                        </>
                                    ) : (
                                        <>
                                            <Play />
                                            <span className="font-bold tracking-wide">Play</span>
                                        </>
                                    )}
                                </div>
                            </Button>
                        </div>
                    </div>

                    {/* Song List */}
                    <div className="space-y-2 py-2">
                        {currentAlbum?.songs.map((song, index) => {
                            return (
                                <div
                                    key={song._id}
                                    className={`grid grid-cols-[16px_6fr_32px] gap-4 px-4 py-2 text-sm text-zinc-400 hover:bg-white/5 rounded-md group cursor-pointer`}
                                    onClick={() => handlePlaySong(index)}
                                >
                                    <div className="flex items-center justify-center">
                                        <span className="group-hover:hidden">{index + 1}</span>
                                        <Play className="h-4 w-4 hidden group-hover:block"/>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <img src={song.imageUrl} alt={song.title} className='size-10' />

                                        <div>
                                            <div className={`font-medium text-white`}>{song.title}</div>
                                            <div>{song.artist}</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>{formatDuration(song.duration)}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ScrollArea>
        </main>
    )
}

export default AlbumPage