import Navigation from "@/Components/Navigation/Navigation";
import React from "react";

export default function UserLayouts({ children }) {
    return (
        <div className="max-w-full overflow-x-hidden">
            {/* Navigation */}
            <div>
                <Navigation />
            </div>
            <div>{children}</div>
        </div>
    );
}
