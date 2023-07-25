import Navigation from "@/Components/Navigation/Navigation";
import React from "react";

export default function UserLayouts({ children }) {
    return (
        <div className="max-w-full overflow-x-hidden">
            {/* Navigation */}
            <div>
                <Navigation />
            </div>
            <div>
                <div className="relative">{children}</div>
                <div className="relative px-8 my-3">
                    <p className="px-4 py-1.5 text-xl text-white font-bold font-Barlow bg-blue-700 inline">
                        Latest Post
                    </p>
                </div>
            </div>
        </div>
    );
}
