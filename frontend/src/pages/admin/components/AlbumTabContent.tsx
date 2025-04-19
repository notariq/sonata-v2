import { useMusicStore } from "@/store/useMusicStore";
import { useEffect } from "react";

const AlbumTabContent = () => {
  const { albums, fetchAlbums, isLoading } = useMusicStore()
  
  useEffect(() => {
    fetchAlbums()
  }, [fetchAlbums]);

  return (
      <div>
          <div className='flex flex-col gap-2'>
              {isLoading ? (
                  <div>Loading...</div>
              ) : (
                albums.map((album) => (
                      <div className='flex items-center gap-3' key={album._id}>
                          <img src={album.imageUrl} alt={album.title} className='size-10' />

                          <div>
                              <div className={`font-medium text-white`}>{album.title}</div>
                              <div>{album.artist}</div>
                          </div>
                      </div>
                  ))
              )}
          </div>
      </div>
  )
}

export default AlbumTabContent