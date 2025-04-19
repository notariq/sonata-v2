import { useMusicStore } from '@/store/useMusicStore'
import { useEffect } from 'react'

const SongTabContent = () => {
    const { songs, fetchSongs, isLoading } = useMusicStore()

    useEffect(() => {
        fetchSongs()
    }, [fetchSongs]);

    return (
        <div>
            <div className='flex flex-col gap-2'>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    songs.map((song) => (
                        <div className='flex items-center gap-3' key={song._id}>
                            <img src={song.imageUrl} alt={song.title} className='size-10' />

                            <div>
                                <div className={`font-medium text-white`}>{song.title}</div>
                                <div>{song.artist}</div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default SongTabContent