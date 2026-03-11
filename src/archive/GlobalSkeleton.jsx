import React from 'react';

export default function GlobalSkeleton() {
    return (
        <div className="flex h-screen bg-lightBlueBg overflow-hidden font-sans">
            {/* Sidebar Skeleton */}
            <aside className="hidden lg:flex flex-col w-[260px] bg-white border-r border-borderColor h-full z-30">
                {/* Logo Area Skeleton */}
                <div className="h-20 flex items-center px-6 border-b border-borderColor">
                    <div className="h-12 w-12 bg-gray-200 rounded-lg animate-pulse" />
                    <div className="ml-3 h-6 w-20 bg-gray-200 rounded animate-pulse" />
                </div>

                {/* Nav Items Skeleton */}
                <div className="flex-1 py-6 px-4 space-y-6">
                    <div>
                        <div className="h-3 w-16 bg-gray-200 rounded mb-4 animate-pulse ml-2" />
                        <div className="space-y-2">
                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <div key={i} className="flex items-center gap-3 px-2 py-3 rounded-md">
                                    <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area Skeleton */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header Skeleton */}
                <header className="bg-white h-20 px-4 md:px-6 flex items-center justify-between border-b border-borderColor">
                    <div className="flex items-center gap-4 flex-1">
                        {/* Mobile Menu Icon Skeleton */}
                        <div className="lg:hidden h-8 w-8 bg-gray-200 rounded animate-pulse" />
                        {/* Page Title Skeleton */}
                        <div className="hidden sm:block h-6 w-32 bg-gray-200 rounded animate-pulse" />
                        {/* Search Bar Skeleton */}
                        <div className="hidden md:block h-10 w-full max-w-md bg-gray-100/80 rounded-full animate-pulse ml-4" />
                    </div>
                    {/* Right side icons Skeleton */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex gap-4 mr-2">
                            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                        </div>
                        <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse hidden sm:block" />
                        <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                        <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />
                    </div>
                </header>

                {/* Main Content Grid Skeleton */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {/* Header Text Skeleton */}
                        <div className="mb-6">
                            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
                            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
                        </div>

                        {/* Top Stats Cards Skeleton */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-white p-6 rounded-[10px] border border-borderColor shadow-sm flex items-center justify-between h-[100px]">
                                    <div className="space-y-3 flex-1">
                                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                                        <div className="h-8 w-14 bg-gray-200 rounded animate-pulse" />
                                    </div>
                                    <div className="h-12 w-12 bg-gray-100 rounded-full animate-pulse" />
                                </div>
                            ))}
                        </div>

                        {/* Mid Section Skeleton (Chart / List blocks) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
                            <div className="lg:col-span-2 bg-white p-6 rounded-[10px] border border-borderColor shadow-sm h-[400px]">
                                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-8" />
                                <div className="h-[280px] w-full bg-gray-50 rounded border border-gray-100 animate-pulse" />
                            </div>
                            <div className="lg:col-span-1 bg-white p-6 rounded-[10px] border border-borderColor shadow-sm h-[400px]">
                                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-6" />
                                <div className="space-y-6">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className="h-10 w-10 bg-gray-200 rounded-xl animate-pulse shrink-0" />
                                            <div className="space-y-2 flex-1">
                                                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                                                <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
