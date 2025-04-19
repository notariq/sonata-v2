import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
	const navigate = useNavigate();

	return (
		<div className='h-screen bg-neutral-900 flex items-center justify-center'>
			<div className='text-center space-y-8 px-4'>

				{/* Error message */}
				<div className='space-y-4'>
					<h1 className='text-7xl font-bold text-white'>401</h1>
					<h2 className='text-2xl font-semibold text-white'>Unauthorized</h2>
					<p className='text-neutral-400 max-w-md mx-auto'>
						Sorry, you don't have permission to access this page. Please log in or contact support if you believe this is an error.
					</p>
				</div>

				{/* Action buttons */}
				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
					<Button
						onClick={() => navigate(-1)}
						variant='outline'
						className='bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700 w-full sm:w-auto'
					>
						Go Back
					</Button>
					<Button
						onClick={() => navigate("/")}
            variant='outline'
						className='bg-neutral-800 hover:bg-neutral-700 border-neutral-700 text-white w-full sm:w-auto'
					>
						<Home className='mr-2 h-4 w-4' />
						Back to Home
					</Button>
				</div>
			</div>
		</div>
	);
}
