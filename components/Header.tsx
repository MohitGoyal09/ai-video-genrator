import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            AI Video Generator
                        </Link>
                    </div>

                    {/* Navigation */}
                    

                    {/* User Button */}
                    <div className="flex items-center">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;