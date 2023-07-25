import MenuGrid from "@/Components/Accordion/MenuGrid";
import Jumbotron from "@/Components/Jumbotron/Jumbotron";
import UserLayouts from "@/Layouts/User/UserLayouts";
import React from "react";
import { useEffect } from "react";

export default function Index() {
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset;
            const parallaxElement = document.querySelector(".bg-cover");
            parallaxElement.style.backgroundPositionY = -offset * 0.3 + "px";
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="w-full">
            {/* Jumbotron */}
            <Jumbotron />
            {/* Menu */}
            <MenuGrid />
            {/* Mengapa Pilih Kami */}
            <div className="relative">
                <div className="relative flex justify-between h-[50vh]">
                    <div
                        className="w-full bg-cover bg-fixed bg-no-repeat"
                        style={{ backgroundImage: "url('./img/3.jpg')" }}
                    >
                        <div className="h-full w-full bg-gradient-to-t from-black/80 via-black/70 to-black/20 ">
                            abg
                        </div>
                    </div>
                    <div className="w-full bg-slate-900 py-16 px-8">
                        <h3 className="text-4xl font-bold font-Barlow text-white w-[80%]">
                            Mengapa Memilih RTQ Wahyu Kusuma
                        </h3>
                        <p className="text-sm font-light text-white tracking-tight w-[80%] my-16">
                            "Pesantren Modern Al-Manar adalah harapan ummat yang
                            pada hari ini kita lihat terus mempelihatkan
                            kemajuan, terutama dalam mendidik generasi muda yang
                            memiliki intelektual dan akhlak yang baik."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
Index.layout = (page) => <UserLayouts children={page} />;
