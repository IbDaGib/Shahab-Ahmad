import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-start justify-center mb-2 sm:mb-0 sm:items-end">
                <Link href="/">
                    <h1 className="text-xl">Shahab Ahmad</h1>
                </Link>
            </div>
            <div className="py-3 sm:py-0">
                <Link
                    href="/overview"
                    className="mr-4 border rounded-full text-sm px-2 py-1 cursor-pointer border-bw-grey text-bw-grey hover:text-bw-lightgrey"
                >
                    Overview
                </Link>
                <Link
                    href="/gallery"
                    className="mr-4 border rounded-full text-sm px-2 py-1 cursor-pointer border-bw-grey text-bw-grey hover:text-bw-lightgrey"
                >
                    Gallery
                </Link>
                <Link
                    href="/poetry"
                    className="mr-4 border rounded-full text-sm px-2 py-1 cursor-pointer border-bw-grey text-bw-grey hover:text-bw-lightgrey"
                >
                    Poetry
                </Link>
                <Link
                    href="https://www.screencrib.com/about"
                    target="_blank"
                    className="border rounded-full text-sm px-2 py-1 cursor-pointer border-bw-grey text-bw-grey hover:text-bw-lightgrey"
                >
                    About
                </Link>
            </div>
        </div>
    );
}