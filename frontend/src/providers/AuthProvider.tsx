import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react"
import { useEffect, useState } from "react"
import { Loader } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const updateTokenApi = (token: string | null) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
}

function AuthProvider({children}: {children: React.ReactNode}) {
    const { getToken } = useAuth();
    const [loading, setLoading] = useState(true);
    const { checkAdminStatus } = useAuthStore();

    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getToken();
                updateTokenApi(token);
                if (token) {
                    await checkAdminStatus();
                }
            } catch (error: any) {
                updateTokenApi(null);
                console.error("Error in auth provider:", error);
            } finally {
                setLoading(false);
            }
        }
        initAuth();
    }, [getToken]);

    if (loading) {
        return (
            <div className='h-screen w-full flex items-center justify-center'>
				<Loader className='size-8 text-neutral-500 animate-spin' />
			</div>
        );
    }

    return <>{children}</>
}

export default AuthProvider