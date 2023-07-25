import MenuGrid from "@/Components/Accordion/MenuGrid";
import Jumbotron from "@/Components/Jumbotron/Jumbotron";
import UserLayouts from "@/Layouts/User/UserLayouts";
import React from "react";

export default function Index() {
    return (
        <div className="w-full">
            {/* Jumbotron */}
            <Jumbotron />
            {/* Menu */}
            <MenuGrid />
        </div>
    );
}
Index.layout = (page) => <UserLayouts children={page} />;
