import TopBar from "@/components/Topbar"
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "./components/Footer";
import FeaturedPage from "./components/FeaturedPage";
import SectionGridSkeleton from "@/components/skeleton/SectionGridSkeleton";

export default function HomePage() {
  return (
    <main className='h-full flex flex-col gap-2 overflow-hidden rounded-md'>
      <TopBar />
      <div className="bg-gradient-to-b from-zinc-900 to-neutral-950 backdrop-blur-md">
        <ScrollArea>
          <div className='p-4 sm:p-6'>
            <p className='hidden sm:visible font-bold mb-6 tracking-wide'>Good day, {"username"}</p>
            <FeaturedPage />
          </div>
          <div className="p-4 sm:p-6">
            <SectionGridSkeleton />
          </div>
          <Footer />
        </ScrollArea>
      </div>
    </main>
  )
}
