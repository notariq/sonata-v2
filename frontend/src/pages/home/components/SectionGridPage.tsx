import SectionGridSkeleton from "@/components/skeleton/SectionGridSkeleton";
import { useMusicStore } from "@/store/useMusicStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SectionGridPage() {
  const { isLoading, fetchMadeForYouSongs, madeForYouSongs } = useMusicStore();

  useEffect(() => {
    fetchMadeForYouSongs();
  }, [fetchMadeForYouSongs]);

  return (
    <>
      {isLoading ? (
        <SectionGridSkeleton />
      ) : (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">Made for you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {madeForYouSongs && madeForYouSongs.length > 0 ? (
              madeForYouSongs.map((song) => (
                <Link
                  to={`/album/${song._id}`}
                  key={song._id}
                  className="bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/50 transition-colors"
                >
                  <div className="aspect-square rounded-md overflow-hidden mb-4">
                    <img
                      src={song.imageUrl}
                      alt={song.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="truncate">
                    <h3 className="font-medium text-white mb-1">{song.title}</h3>
                    <p className="text-sm text-gray-400">{song.artist}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-4 text-center py-8 text-gray-400">
                No songs available
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SectionGridPage;