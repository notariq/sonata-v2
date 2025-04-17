import FeaturedGridSkeleton from "@/components/skeleton/FeaturedGridSkeleton";
import { useMusicStore } from "@/store/useMusicStore";

const FeaturedPage = () => {
    const { isLoading, featuredSongs, error } = useMusicStore();

	if (isLoading) return <FeaturedGridSkeleton />;

    return (
        <FeaturedGridSkeleton />
    )
}

export default FeaturedPage