const MusicPlayerInfoSkeleton = () => {
  return (
    <div className="flex flex-col space-y-5 h-full justify-center">
      <div className="flex flex-col space-y-5">
        <div className="h-8 w-50 bg-zinc-800 rounded animate-pulse" />
        <div className="bg-zinc-800/40 p-4 rounded-md animate-pulse"> {/* Card Skeleton */}
          <div className="aspect-square rounded-md bg-zinc-700 mb-4" />
          <div className="h-8 bg-zinc-700 rounded w-3/4 mb-2" />
          <div className="h-8 bg-zinc-700 rounded w-1/2" />
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <div className="h-8 w-50 bg-zinc-800 rounded animate-pulse" />
        <div className='flex items-center bg-zinc-800/50 rounded-md overflow-hidden animate-pulse'>
          <div className='w-16 sm:w-20 h-16 sm:h-20 bg-zinc-700 flex-shrink-0' />
          <div className='flex-1 p-4'>
            <div className='h-4 bg-zinc-700 rounded w-3/4 mb-2' />
            <div className='h-4 bg-zinc-700 rounded w-3/4 mb-2' />
          </div>
			</div>
      </div>
    </div>
  )
}

export default MusicPlayerInfoSkeleton