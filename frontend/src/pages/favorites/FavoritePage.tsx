//import FeaturedGridSkeleton from "@/components/skeleton/FeaturedGridSkeleton"

const FavoritePage = () => {
  return (
    <main className='h-full overflow-hidden rounded-md'>   
      <div className="p-5 bg-gradient-to-b from-zinc-900 to-neutral-950 backdrop-blur-md gap-6 flex flex-col">
        <div className='flex items-center bg-zinc-800/50 rounded-md overflow-hidden animate-pulse'>
					<div className='w-16 sm:w-20 h-16 sm:h-20 bg-zinc-700 flex-shrink-0' />
					<div className='flex-1 p-4'>
						<div className='h-4 bg-zinc-700 rounded w-3/4 mb-2' />
					</div>
				</div>
        <div className='flex items-center bg-zinc-800/50 rounded-md overflow-hidden animate-pulse'>
					<div className='w-16 sm:w-20 h-16 sm:h-20 bg-zinc-700 flex-shrink-0' />
					<div className='flex-1 p-4'>
						<div className='h-4 bg-zinc-700 rounded w-3/4 mb-2' />
					</div>
				</div>
        <div className='flex items-center bg-zinc-800/50 rounded-md overflow-hidden animate-pulse'>
					<div className='w-16 sm:w-20 h-16 sm:h-20 bg-zinc-700 flex-shrink-0' />
					<div className='flex-1 p-4'>
						<div className='h-4 bg-zinc-700 rounded w-3/4 mb-2' />
					</div>
				</div>
      </div>   
    </main>
  )
}

export default FavoritePage