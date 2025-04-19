import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuthStore } from "@/store/useAuthStore"
import { Album, Music } from "lucide-react"
import UnauthorizedPage from "../error/UnauthorizedPage"
import { Button } from "@/components/ui/button"
import SongTabContent from "./components/SongTabContent"
import AlbumTabContent from "./components/AlbumTabContent"

const AdminPage = () => {
    const { isAdmin, isLoading } = useAuthStore()

    if (!isAdmin && !isLoading) {
        return <UnauthorizedPage />
    }

    return (
        <main className='p-4 min-h-screen flex flex-col bg-zinc-800'>
            <div className="bg-zinc-950 p-4 rounded-2xl flex flex-col gap-4">
                <Tabs className="space-y-2 border-none rounded-2xl" defaultValue="songs">
                    <div className="flex items-center justify-between">
                        <TabsList>
                            <TabsTrigger value="songs" className="data-[state=active]:bg-zinc-600">
                                <Music className="mr-2 size-4"/>
                                Music
                            </TabsTrigger>
                            <TabsTrigger value="albums" className="data-[state=active]:bg-zinc-600">
                                <Album className="mr-2 size-4"/>
                                Album
                            </TabsTrigger>
                        </TabsList>
                        <Button
                            variant="outline"
                            className="bg-zinc-950 text-zinc-400 hover:bg-zinc-800 hover:text-white font-medium"
                        >
                            + Add New
                        </Button>
                    </div>
                    <TabsContent value="songs" className="border-none bg-zinc-800 p-3 rounded-md m-0">
                        <SongTabContent />
                    </TabsContent>
                    <TabsContent value="albums" className="border-none bg-zinc-800 p-3 rounded-md">
                        <AlbumTabContent />
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}

export default AdminPage