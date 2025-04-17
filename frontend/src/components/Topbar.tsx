import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import SignInOAuthButton from "./SignInOAuthButton";
import { useAuthStore } from "@/store/useAuthStore";

const TopBar = () => {
    const { isAdmin } = useAuthStore();
    
    return (
        <div className="rounded-md flex items-center justify-between p-4 sticky top-0 bg-zinc-900 to-neutral-950 backdrop-blur-md z-10">
            <div className="flex gap-2 items-center px-4">
                <Link to="/" className="text-2xl shadow-md tracking-widest text-gray" style={{ fontFamily: '"Climate Crisis", sans-serif' }}>sonata</Link>
            </div>
            <div className="flex gap-4 items-center">
                {isAdmin && (
                    <Link to="/admin" className="w-full flex justify-center items-center rounded-md px-2 py-1 text-white font-medium bg-neutral-800 hover:bg-neutral-700 transition duration-200">
                        <LayoutDashboardIcon className="size-4 m-2"/>
                        <p className="hidden sm:block">Admin Dashboard</p>
                    </Link>
                )}
            
                <SignedOut>
                    <SignInOAuthButton />
                </SignedOut>

                <UserButton />
            </div>
        </div>
    );
}

export default TopBar