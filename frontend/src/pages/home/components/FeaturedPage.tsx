import FeaturedGridSkeleton from "@/components/skeleton/FeaturedGridSkeleton";
import { useMusicStore } from "@/store/useMusicStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedPage = () => {
    const { isLoading, featuredSongs, fetchFeaturedSongs } = useMusicStore(); 

    useEffect(() => {
        fetchFeaturedSongs();
    }, [fetchFeaturedSongs]);

    return (
        <>
            {isLoading ? <FeaturedGridSkeleton /> : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {featuredSongs.map((song) => (
                        <Link to={`/album/${song._id}`} key={song._id}>
                            <div className='flex items-center bg-zinc-800/50 rounded-md overflow-hidden'>
                                <img className='w-16 sm:w-20 h-16 sm:h-20 bg-zinc-700 flex-shrink-0' src={song.imageUrl}/>
                                <div className='flex-1 p-4'>
                                    <p>{song.title}</p>
                                    <p>{song.artist}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
            )}
        </>
    )
}

export default FeaturedPage