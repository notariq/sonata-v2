import MusicPlayerInfoSkeleton from "@/components/skeleton/MusicPlayerInfoSkeleton"

const MusicPlayerInfo = () => {
  return (
    <div className="rounded-md h-full bg-gradient-to-b from-zinc-900 to-neutral-950 backdrop-blur-md sm:p-6 p-4">
        <MusicPlayerInfoSkeleton />        
    </div>
  )
}

export default MusicPlayerInfo