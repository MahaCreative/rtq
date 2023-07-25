import clsx from "clsx";
import React, { useState } from "react";
import { useEffect } from "react";

export default function MenuGrid() {
    const [stateMenu, setStateMenu] = useState("sambutan");
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="relative bg-red-900">
            <div className="grid transition-all duration-300 ease-in-out grid-cols-2 md:grid-cols-4 bg-red-500 justify-center items-center">
                <div
                    onClick={() => setStateMenu("sambutan")}
                    className="bg-red-500 md:bg-blue-900 h-24 flex items-center justify-center
             transition-all duration-300 ease-in-out text-white text-center font-Barlow
              font-bold hover:cursor-pointer hover:scale-y-125 hover:rounded-t-lg hover:shadow-md hover:shadow-gray-300/50"
                >
                    SAMBUTAN KETUA
                </div>
                <div
                    onClick={() => setStateMenu("informasi_rtq")}
                    className="bg-blue-900 md:bg-red-500 h-24 flex items-center justify-center
             transition-all duration-300 ease-in-out text-white text-center font-Barlow
              font-bold hover:cursor-pointer hover:scale-y-125 hover:rounded-t-lg hover:shadow-md hover:shadow-gray-300/50"
                >
                    INFORMASI RTQ
                </div>
                <div
                    onClick={() => setStateMenu("informasi_donatur")}
                    className="bg-blue-7
                    00 md:bg-blue-900 h-24 flex items-center justify-center
             transition-all duration-300 ease-in-out text-white text-center font-Barlow
              font-bold hover:cursor-pointer hover:scale-y-125 hover:rounded-t-lg hover:shadow-md hover:shadow-gray-300/50"
                >
                    INFORMASI DONATUR
                </div>
                <div
                    onClick={() => setStateMenu("kegiatan")}
                    className="md:bg-red-500 h-24 flex items-center justify-center
             transition-all duration-300 ease-in-out text-white text-center font-Barlow
              font-bold hover:cursor-pointer hover:scale-y-125 hover:rounded-t-lg hover:shadow-md hover:shadow-gray-300/50"
                >
                    INFORMASI KEGIATAN
                </div>
            </div>
            <div
                className="relative h-[90vh] md:h-[60vh] lg:h-[75vh] w-full
             bg-red-800"
            >
                {/* Sambutan Ketua */}
                <div
                    className={clsx(
                        stateMenu == "sambutan"
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-32 opacity-0",
                        "absolute left-0 top-0 transition-all duration-900 ease-in-out h-[90vh] md:h-[60vh] lg:h-[75vh] bg-cover bg-center w-full overflow-y-hidden"
                    )}
                    style={{
                        background: "url('./img/5.jpg')",
                        backgroundPositionY: `-${scrollY * 0.3}px`,
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-red-800/80 via-red-800/80 to-red-800/20"></div>
                    <div className="transition-all duration-300 ease-in-out relative text-white w-[90vw] md:w-[50vw] lg:w-[35%] flex-col flex justify-center py-16 px-8">
                        <p className="font-edu font-bold text-xl">
                            Bismillahirrahmanirrahim
                        </p>
                        <p className="font-edu font-bold text-xl">
                            Assalamu’alaikum warahmatullahi wabarakatuh
                        </p>
                        <p className="font-Barlow font-light">
                            Segala puji kepada Allah Swt. yang telah
                            menganugerahkan segala kemampuan dan keahlian kepada
                            umat manusia, khususnya bidang teknologi informasi.
                            Shalawat beserta salam sama-sama kita haturkan
                            kepada pangkuan alam Nabi Besar Muhammad SAW, Sang
                            motivator terbaik sepanjang masa. Selamat datang di
                            website Pesantren Modern Al Manar Aceh Besar.
                            Melalui platform ini kami ingin menyapa dunia dan
                            mengabarkan sejumlah info up to date seputar dunia
                            pesantren, khususnya sejumlah kegiatan di pesantren
                            kami. Keterbukaan informasi di era industri 4.0
                            adalah keniscayaan dan menjadi hak setiap orang
                            dengan mudah mengakses setiap informasi publik,
                            khususnya informasi proses pendidikan di pesantren.
                        </p>
                    </div>
                    <div className="transition-all duration-300 opacity-0 md:opacity-100 ease-in-out origin-top  absolute -top-10 right-[15.5%] w-[20%] h-[125%] bg-blue-900 -rotate-3 shadow-md shadow-white/50"></div>

                    <div className="transition-all duration-300 opacity-0 md:opacity-100 ease-in-out origin-top absolute top-0 right-[15%] w-[20%] h-full bg-blue-800">
                        <div className="relative flex flex-col justify-around items-center h-full z-50">
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="transition-all duration-300 ease-linear opacity-0 lg:opacity-100 absolute bottom-0 right-[25%] origin-bottom">
                        <img src="./img/foto.png" alt="" className="w-[90%]" />
                    </div>
                </div>
                {/* Informasi RTQ */}
                <div
                    className={clsx(
                        stateMenu == "informasi_rtq"
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-56 opacity-0",
                        "left-0 top-0 absolute h-full transition-all duration-900 ease-in-outbg-cover bg-center w-full overflow-y-hidden"
                    )}
                    style={{
                        background: "url('./img/5.jpg')",
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-red-800/80 via-red-500/80 to-red-800/20"></div>
                    <div className="transition-all duration-300 ease-in-out absolute top-[5%] lg:top-[20%] left-[5%] text-white w-[90vw] md:w-[50vw] lg:w-[30%]">
                        <p className="font-edu font-bold text-xl">
                            Bismillahirrahmanirrahim
                        </p>
                        <p className="font-edu font-bold text-xl">
                            Assalamu’alaikum warahmatullahi wabarakatuh
                        </p>
                    </div>
                    <div className="transition-all duration-300 opacity-0 md:opacity-100 ease-in-out origin-top  absolute -top-10 right-[15.5%] w-[20%] h-[125%] bg-red-900 rotate-3 shadow-md shadow-white/50"></div>

                    <div className="transition-all duration-300 opacity-0 md:opacity-100 ease-in-out origin-top absolute top-0 right-[15%] w-[20%] h-full bg-red-800">
                        <div className="relative flex flex-col justify-around items-center h-full z-50">
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="transition-all duration-300 ease-linear opacity-0 lg:opacity-100 absolute bottom-0 right-[25%] origin-bottom">
                        <img src="./img/foto.png" alt="" className="w-[90%]" />
                    </div>
                </div>
                {/* Informasi Donatur */}
                <div
                    className={clsx(
                        stateMenu == "informasi_donatur"
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-56 opacity-0",
                        "left-0 top-0 absolute h-full transition-all duration-900 ease-in-outbg-cover bg-center w-full overflow-y-hidden"
                    )}
                    style={{
                        background: "url('./img/5.jpg')",
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-red-800/80 via-red-500/80 to-red-800/20"></div>
                    <div className="transition-all duration-300 ease-in-out absolute top-[5%] lg:top-[20%] left-[5%] text-white w-[90vw] md:w-[50vw] lg:w-[30%]">
                        <p className="font-edu font-bold text-xl">
                            Bismillahirrahmanirrahim
                        </p>
                        <p className="font-edu font-bold text-xl">
                            Assalamu’alaikum warahmatullahi wabarakatuh
                        </p>
                    </div>
                    <div className="transition-all duration-300 opacity-0 md:opacity-100 ease-in-out origin-top  absolute -top-10 right-[15.5%] w-[20%] h-[125%] bg-red-900 rotate-3 shadow-md shadow-white/50"></div>

                    <div className="transition-all duration-300 opacity-0 md:opacity-100 ease-in-out origin-top absolute top-0 right-[15%] w-[20%] h-full bg-red-800">
                        <div className="relative flex flex-col justify-around items-center h-full z-50">
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="transition-all duration-300 ease-linear opacity-0 lg:opacity-100 absolute bottom-0 right-[25%] origin-bottom">
                        <img src="./img/foto.png" alt="" className="w-[90%]" />
                    </div>
                </div>
                {/*  Kegiatan*/}
                <div
                    className={clsx(
                        stateMenu == "kegiatan"
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-56 opacity-0",
                        "left-0 top-0 absolute h-full transition-all duration-900 ease-in-outbg-cover bg-center w-full overflow-y-hidden"
                    )}
                    style={{
                        background: "url('./img/5.jpg')",
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-red-800/80 via-red-500/80 to-red-800/20"></div>
                    <div className="transition-all duration-300 ease-in-out absolute top-[5%] lg:top-[20%] left-[5%] text-white w-[90vw] md:w-[50vw] lg:w-[30%]">
                        <p className="font-edu font-bold text-xl">
                            Bismillahirrahmanirrahim
                        </p>
                        <p className="font-edu font-bold text-xl">
                            Assalamu’alaikum warahmatullahi wabarakatuh
                        </p>
                    </div>
                    <div className="transition-all duration-300 opacity-0 md:opacity-100 ease-in-out origin-top  absolute -top-10 right-[15.5%] w-[20%] h-[125%] bg-red-900 rotate-3 shadow-md shadow-white/50"></div>

                    <div className="transition-all duration-300 opacity-0 md:opacity-100 ease-in-out origin-top absolute top-0 right-[15%] w-[20%] h-full bg-red-800">
                        <div className="relative flex flex-col justify-around items-center h-full z-50">
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                            <div className="text-white text-center ">
                                <p className="text-4xl font-Barlow font-extrabold">
                                    10
                                </p>
                                <p className="font-Barlow font-medium">
                                    Jumlah Santri Putra
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="transition-all duration-300 ease-linear opacity-0 lg:opacity-100 absolute bottom-0 right-[25%] origin-bottom">
                        <img src="./img/foto.png" alt="" className="w-[90%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
