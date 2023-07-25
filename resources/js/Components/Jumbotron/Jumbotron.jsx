import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Jumbotron() {
    return (
        <div
            style={{ backgroundImage: "url('./img/1.jpg')" }}
            className="relative transition-all duration-300 h-[60vh] md:h-[50vh] lg:h-[60vh] bg-cover bg-center bg-no-repeat "
        >
            <div className="absolute inset-0 bg-gradient-to-br from-red-300/40 via-red-500/40 bg-black0/40 bg-opacity-40"></div>
            <div className="absolute md lg:top-[2%] lg:left-[5%] w-full">
                <div className="relative flex gap-3 items-center">
                    <div className="px-3 py-1 bg-blue-900">
                        <p className="text-white font-Barlow font-bold">
                            Terbaru
                        </p>
                    </div>
                    <p className="font-Barlow font-extralight text-white px-2 py-1 md:py-0 lg:text-lg text-[8pt] bg-gradient-to-r from-black/40 via-black/30 to-black/0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis, placeat!
                    </p>
                </div>
            </div>
            <div className=" absolute transition-all duration-300 top-[30%] md:top-[20%] lg:top-[30%] left-[5%] inset-auto text-white">
                <h1 className="text-2xl font-bold font-Barlow leading-10 text-blue-500">
                    SELAMAT DATANG DI SITUS REMSI
                </h1>
                <p className="relative text-5xl font-kaushan font-extralight rounded-md inline text-blue-900">
                    RTQ WAHYU KUSUMA
                </p>
                <div className="my-4 relative inset-x-auto font-Barlow w-[80%] md:w-[70%] lg:w-[40%] p-2 rounded-lg shadow-md bg-blue-900/50 tracking-tighter">
                    <p>
                        Memberikan kontribusi nyata dalam pembangunan sumber
                        daya manusia dan menciptakan insan kamil yang memiliki
                        kecerdasan intelektual dan spiritual demi pembangunan
                        agama, bangsa dan negara.
                    </p>
                    <div className="absolute -bottom-7 right-0 flex items-center gap-x-2">
                        <div className="text-lg text-white">
                            <FacebookIcon color="inherit" fontSize="inherit" />
                        </div>
                        <div className="text-lg text-white">
                            <InstagramIcon color="inherit" fontSize="inherit" />
                        </div>
                        <div className="text-lg text-white">
                            <WhatsAppIcon color="inherit" fontSize="inherit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
