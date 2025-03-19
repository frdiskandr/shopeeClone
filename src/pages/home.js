import Header from "../components/layout/header";
import CardHead from "../components/ui/cardHeader";
import CardCategory from "../components/ui/cardCategory";
import CardFlashSale from "../components/ui/cardFlashSale";
import CardProduct from "../components/ui/cardProduct";

function HomePage() {
    const product = [
        {
            title: "Topi Kupluk Rajut Winter Fujian pria/wanita dewasa fulltalk beanies hat nyaman di pakai",
            selling: "10Rb",
            price: "10.999",
            status: {
                bracket: "Pruduct Terlaris",
                cod: true,
            },
            img: "https://down-id.img.susercontent.com/file/id-11134207-7ras9-m0eukbdyvr5jee.webp",
            element: <div>halo</div>,
        },
        {
            title: "Operasi Manual Simulasi Real Soft Toy For Boys Outdoor CS Game Playing Toy For Children Gift",
            selling: "4,5Rb",
            price: "41.359",
            status: {
                bracket: "Pruduct Terlaris",
                cod: true,
            },
            img: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lug4yxbs6q4w9d.webpe.webp",
            element: <div>halo</div>,
        },
        {
            title: "Parfum kualitas premium vanilla cake paling wangi edp 35 ml",
            selling: "10Rb+",
            price: "11.950",
            status: {
                bracket: "Pruduct Terlaris",
                cod: true,
            },
            img: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-ls1ct4ihr33x2f.webp",
            element: <div>halo</div>,
        },
        {
            title: "VGA MSI GeForce RTX 5080 16G VENTUS 3X OC PLUS 16GB GDDR7",
            selling: "1Rb",
            price: "24.690.000",
            status: {
                bracket: "Pruduct Terlaris",
                cod: true,
            },
            img: "https://down-id.img.susercontent.com/file/sg-11134201-7rbmi-m5v27yp7ngwe82.webp",
            element: <div>halo</div>,
        },
        {
            title: "PC GAMING AMD RYZEN 7 5700X | VGA GTX 1650 4GB DDR6 | MONITOR Samsung 24",
            selling: "1Rb",
            price: "9.990.000",
            status: {
                bracket: "Pruduct Terlaris",
                cod: true,
            },
            img: "https://down-id.img.susercontent.com/file/id-11134207-7rasi-m1ze974p1fyhb1.webp",
            element: <div>halo</div>,
        },
    ];

    const productTerlaris = [
        {
            title: "M10 plus TWS Bluetooth 5.1",
            img: "https://down-id.img.susercontent.com/file/id-11134201-23030-gttr39581gov2a@resize_w450_nl.webp",
        },
        {
            title: "Pc Gaming",
            img: "https://down-id.img.susercontent.com/file/id-11134207-7ras9-m58hdmkjyl8m77.webp",
        },
        {
            title: "All In One Pc",
            img: "https://down-id.img.susercontent.com/file/id-11134207-7r98u-m0186bsjxlvsf5.webp",
        },
        {
            title: "Pajero",
            img: "https://down-id.img.susercontent.com/file/21594dee98aa7afff3915485d60cb685.webp",
        },
        {
            title: "Parfume",
            img: "https://down-id.img.susercontent.com/file/id-11134207-7r992-lla41vyeplt794.webp",
        },
        {
            title: "T-Shirt",
            img: "https://down-id.img.susercontent.com/file/a8dd7b299c3291599cbd5d3757067afb.webp",
        },
    ];

    const flashSale = [
        {
            price: "28.000",
            img: "https://down-id.img.susercontent.com/file/41f968b900a96a822e03ae1761fbf85f.webp",
        },
        {
            price: "40.000",
            img: "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lnrzm05f2mom94.webp",
        },
        {
            price: "17.000",
            img: "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lzyjljjun7z41c.webp",
        },
        {
            price: "27.900",
            img: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-ln08ru3qct0d47.webp",
        },
        {
            price: "13.888",
            img: "https://down-id.img.susercontent.com/file/73078c55cd66e406e97d6d333709ff8d.webp",
        },
        {
            price: "5.699",
            img: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lx94zafezfhae4.webp",
        },
    ];
    return (
        <>
            <div className="w-screen bg-[#F94F2F] relative">
                <Header />
            </div>
            <main>
                <div className="lg:w-[1100px] w-full mx-auto flex flex-col relative p-4 gap-2 ">
                    <div className="container flex flex-row gap-2 mx-auto">
                        <div id="left-content" className="w-[60%] bg-[#EE4D2D]">
                            <div className="w-full h-full text-black border">
                                <a
                                    className="o5QY1J h-full"
                                    href="/m/termurah-di-shopee"
                                >
                                    <div className="_b8dol Z4k0cq h-full">
                                        <img
                                            width="invalid-value"
                                            height="invalid-value"
                                            alt="Banner"
                                            className="GhNXf3 cEoSnS TGZg9J w-full h-full "
                                            style={{ objectFit: "contain" }}
                                            src="https://cf.shopee.co.id/file/id-11134258-7rasd-m1dwe17djcvbd0_xxhdpi"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div
                            id="right content"
                            className="w-[40%] flex-col flex gap-2"
                        >
                            <div className="bg-slate-500 h-1/2 border">
                                <div className="flex justify-center items-center">
                                    <a
                                        className="NMn0Ga"
                                        href="/m/shopee-pilih-lokal"
                                    >
                                        <div className="_b8dol _lHr81 Z4k0cq">
                                            <img
                                                width="invalid-value"
                                                height="invalid-value"
                                                alt="Banner"
                                                className="lpsdjq TGZg9J"
                                                style={{ objectFit: "cover" }}
                                                src="https://cf.shopee.co.id/file/id-11134258-7r98o-m0bdmvjtcuz013_xhdpi"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-slate-500 h-1/2 border">
                                <div className="flex justify-center">
                                    <a className="NMn0Ga" href="/m/barokah">
                                        <div className="_b8dol _lHr81 Z4k0cq">
                                            <img
                                                width="invalid-value"
                                                height="invalid-value"
                                                alt="Banner"
                                                className="lpsdjq TGZg9J"
                                                style={{ objectFit: "cover" }}
                                                src="https://cf.shopee.co.id/file/id-11134258-7rbk7-m6gmzy3h4zhpca_xhdpi"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container text-black flex justify-between overflow-x-hidden mx-auto">
                        <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-50009109-9e96a5687ef3d55c05426b33e702be61_xhdpi"
                            }
                            url={"/"}
                        >
                            Shopee Pilih Local
                        </CardHead>
                        <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-50009109-21067727429e50037f52d3bda8a8bcf6_xhdpi;"
                            }
                            url={"/"}
                        >
                            Shopee Mall
                        </CardHead>
                        <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-50009109-4f6225c6af9676bb98b6ef90b5eea2c1_xhdpi"
                            }
                            url={"/"}
                        >
                            Pulsa,Tagihan, dan Tiket
                        </CardHead>
                        <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-50009109-bc0d988b6f0265726005d7516d275e34_xhdpi"
                            }
                            url={"/"}
                        >
                            InFasion
                        </CardHead>
                        <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-50009109-973424e34266b401880d7dcc2d40156d_xhdpi"
                            }
                            url={"/"}
                        >
                            Shopee Market
                        </CardHead>
                        {/* <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-11134258-7rasg-m4e22zjycay682_xhdpi"
                            }
                            url={"/"}
                        >
                            Dikelola Shopee
                        </CardHead>
                        <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-11134258-7rase-m20j35or51a7bb_xhdpi"
                            }
                            url={"/"}
                        >
                            Termurah Di Shopee
                        </CardHead> */}
                        <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-50009109-dd50489812b1eb792c5cfae00a3b512a_xhdpi"
                            }
                            url={"/"}
                        >
                            Gratis ongkir dan voucher
                        </CardHead>
                        <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-50009109-a2dfaca803ad1b0a86141f5374419f99_xhdpi"
                            }
                            url={"/"}
                        >
                            Shopee Barokah
                        </CardHead>
                        <CardHead
                            img={
                                "https://cf.shopee.co.id/file/id-50009109-b26e4a6a1add042d828b58143fceda1a_xhdpi"
                            }
                            url={"/"}
                        >
                            Semua Promo
                        </CardHead>
                    </div>
                </div>

                <section id="category">
                    <div className="lg:w-[1100px] w-full mx-auto bg-[#FFFFFF] container">
                        <span className="font-bold p-2 text-xl text-bla">
                            Category
                        </span>
                        <div className="container flex flex-wrap h-[302px]">
                            {/* category */}
                            <CardCategory title={"Elektronik"}>
                                <picture className="axJD3V">
                                    <source
                                        srcSet="https://down-id.img.susercontent.com/file/dcd61dcb7c1448a132f49f938b0cb553@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/dcd61dcb7c1448a132f49f938b0cb553@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                        className="axJD3V"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        className="PndadC lazyload b0jgRH"
                                        srcSet="https://down-id.img.susercontent.com/file/dcd61dcb7c1448a132f49f938b0cb553@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/dcd61dcb7c1448a132f49f938b0cb553@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/dcd61dcb7c1448a132f49f938b0cb553"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Komputer & Aksesoris"}>
                                <picture className="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/id-50009109-0bd6a9ebd0f2ae9b7e8b9ce7d89897d6@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/id-50009109-0bd6a9ebd0f2ae9b7e8b9ce7d89897d6@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/id-50009109-0bd6a9ebd0f2ae9b7e8b9ce7d89897d6@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/id-50009109-0bd6a9ebd0f2ae9b7e8b9ce7d89897d6@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/id-50009109-0bd6a9ebd0f2ae9b7e8b9ce7d89897d6"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Handphone & Aksesoris"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/5230277eefafad8611aaf703d3e99568@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/5230277eefafad8611aaf703d3e99568@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/5230277eefafad8611aaf703d3e99568@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/5230277eefafad8611aaf703d3e99568@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/5230277eefafad8611aaf703d3e99568"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Fashion Pria"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Sepatu Pria"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/3c8ff51aab1692a80c5883972a679168@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/3c8ff51aab1692a80c5883972a679168@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/3c8ff51aab1692a80c5883972a679168@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/3c8ff51aab1692a80c5883972a679168@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/3c8ff51aab1692a80c5883972a679168"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Tas Pria"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/47ed832eed0feb62fd28f08c9229440e@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/47ed832eed0feb62fd28f08c9229440e@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/47ed832eed0feb62fd28f08c9229440e@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/47ed832eed0feb62fd28f08c9229440e@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/47ed832eed0feb62fd28f08c9229440e"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Aksesoris & Fashion"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/1f18bdfe73df39c66e7326b0a3e08e87@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/1f18bdfe73df39c66e7326b0a3e08e87@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/1f18bdfe73df39c66e7326b0a3e08e87@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/1f18bdfe73df39c66e7326b0a3e08e87@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/1f18bdfe73df39c66e7326b0a3e08e87"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Jam Tangan"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/2bdf8cf99543342d4ebd8e1bdb576f80@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/2bdf8cf99543342d4ebd8e1bdb576f80@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/2bdf8cf99543342d4ebd8e1bdb576f80@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/2bdf8cf99543342d4ebd8e1bdb576f80@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/2bdf8cf99543342d4ebd8e1bdb576f80"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Kesehatan"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/eb7d583e4b72085e71cd21a70ce47d7a@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/eb7d583e4b72085e71cd21a70ce47d7a@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/eb7d583e4b72085e71cd21a70ce47d7a@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/eb7d583e4b72085e71cd21a70ce47d7a@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/eb7d583e4b72085e71cd21a70ce47d7a"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Hoby & Koleksi"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/42394b78fac1169d67c6291973a3b132@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/42394b78fac1169d67c6291973a3b132@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/42394b78fac1169d67c6291973a3b132@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/42394b78fac1169d67c6291973a3b132@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/42394b78fac1169d67c6291973a3b132"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Makanan & Minuman"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/7873b8c3824367239efb02d18eeab4f5@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/7873b8c3824367239efb02d18eeab4f5@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/7873b8c3824367239efb02d18eeab4f5@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/7873b8c3824367239efb02d18eeab4f5@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/7873b8c3824367239efb02d18eeab4f5"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Perawatan & Kecaantikan"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/2715b985ae706a4c39a486f83da93c4b@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/2715b985ae706a4c39a486f83da93c4b@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/2715b985ae706a4c39a486f83da93c4b@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/2715b985ae706a4c39a486f83da93c4b@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/2715b985ae706a4c39a486f83da93c4b"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Perlengkapan Rumah"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/c1494110e0383780cdea73ed890e0299@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/c1494110e0383780cdea73ed890e0299@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/c1494110e0383780cdea73ed890e0299@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/c1494110e0383780cdea73ed890e0299@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/c1494110e0383780cdea73ed890e0299"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Pakaian Wanita"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/6d63cca7351ba54a2e21c6be1721fa3a@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/6d63cca7351ba54a2e21c6be1721fa3a@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/6d63cca7351ba54a2e21c6be1721fa3a@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/6d63cca7351ba54a2e21c6be1721fa3a@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/6d63cca7351ba54a2e21c6be1721fa3a"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Fashion Muslim"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/b98756cdb31eabe3d7664599e24ccc29@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/b98756cdb31eabe3d7664599e24ccc29@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/b98756cdb31eabe3d7664599e24ccc29@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/b98756cdb31eabe3d7664599e24ccc29@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/b98756cdb31eabe3d7664599e24ccc29"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Fashion Bayi & Anak"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/9251edd6d6dd98855ff5a99497835d9c@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/9251edd6d6dd98855ff5a99497835d9c@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/9251edd6d6dd98855ff5a99497835d9c@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/9251edd6d6dd98855ff5a99497835d9c@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/9251edd6d6dd98855ff5a99497835d9c"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Ibu & Bayi"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/4d1673a14c26c8361a76258d78446324@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/4d1673a14c26c8361a76258d78446324@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/4d1673a14c26c8361a76258d78446324@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/4d1673a14c26c8361a76258d78446324@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/4d1673a14c26c8361a76258d78446324"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Sepatu Wanita"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/id-50009109-a947822064b7a8077b15596c85bd9303@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/id-50009109-a947822064b7a8077b15596c85bd9303@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/id-50009109-a947822064b7a8077b15596c85bd9303@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/id-50009109-a947822064b7a8077b15596c85bd9303@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/id-50009109-a947822064b7a8077b15596c85bd9303"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Tas Wanita"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/id-50009109-da8cea4e4705abb4dd935b244668e9dd@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/id-50009109-da8cea4e4705abb4dd935b244668e9dd@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/id-50009109-da8cea4e4705abb4dd935b244668e9dd@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/id-50009109-da8cea4e4705abb4dd935b244668e9dd@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/id-50009109-da8cea4e4705abb4dd935b244668e9dd"
                                    />
                                </picture>
                            </CardCategory>
                            <CardCategory title={"Otomotif"}>
                                <picture class="axJD3V">
                                    <source
                                        srcset="https://down-id.img.susercontent.com/file/27838b968afb76ca59dd8e8f57ece91f@resize_w320_nl.webp 1x, https://down-id.img.susercontent.com/file/27838b968afb76ca59dd8e8f57ece91f@resize_w640_nl.webp 2x"
                                        type="image/webp"
                                    />
                                    <img
                                        width="320"
                                        loading="lazy"
                                        srcset="https://down-id.img.susercontent.com/file/27838b968afb76ca59dd8e8f57ece91f@resize_w320_nl 1x, https://down-id.img.susercontent.com/file/27838b968afb76ca59dd8e8f57ece91f@resize_w640_nl 2x"
                                        src="https://down-id.img.susercontent.com/file/27838b968afb76ca59dd8e8f57ece91f"
                                    />
                                </picture>
                            </CardCategory>
                        </div>
                    </div>
                </section>

                <section id="flash sale">
                    <div className="container max-w-[1100px] mx-auto my-4  bg-[#FFFFFF] border-2">
                        <div className="flex justify-between p-4">
                            <div className="flex gap-2 w-[15%]">
                                <div className="bg-[url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e5389.png')] bg-center bg-contain bg-no-repeat w-[80%]"></div>
                                <div className="w-[20%] text-[#FA5330] ">
                                    time
                                </div>
                            </div>
                            <div className="text-base text-[#FA5330] ">
                                Lihat Semua &gt;
                            </div>
                        </div>

                        {/* card container*/}
                        <div
                            id="card-product-container"
                            className="flex overflow-y-hidden"
                        >
                            {/* card */}
                            {flashSale.map((item, index) => (
                                <CardFlashSale
                                    key={index}
                                    img={item.img}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="product terlaris">
                    <div className="container max-w-[1100px] mx-auto my-4  bg-[#FFFFFF] border-2">
                        <div className="flex justify-between p-4">
                            <div className="flex gap-2 w-[45%]">
                                <span className="text-[#FA5330] font-bold text-base ">
                                    Product Terlaris
                                </span>
                            </div>
                            <div className="text-base text-[#FA5330] ">
                                Lihat Semua &gt;
                            </div>
                        </div>

                        {/* card container*/}
                        <div
                            id="card-product-container"
                            className="flex overflow-y-hidden"
                        >
                            {/* card */}
                            {productTerlaris.map((item, index) => (
                                <div
                                    key={index}
                                    className="card w-1/6 h-60 p-2 bg-[#ffffff] flex flex-col gap-4 text-start"
                                >
                                    <img
                                        src={item.img}
                                        alt="product"
                                        className="w-full h-[70%]"
                                    />
                                    <span
                                        id="title"
                                        className="text-black font-bold"
                                    >
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="produck-list">
                    <div className="container max-w-[1100px] mx-auto my-4  bg-[#FFFFFF] border-2">
                        <div className=" border-b-4 border-[#f54330] w-full mb-4 text-center">
                            <span className="font-bold text-black text-lg">
                                Rekomendasi Product
                            </span>
                        </div>
                        <div className="container flex flex-wrap text-black">
                            {/* card  product*/}

                            {product.map((item, index) => {
                                return (
                                    <CardProduct
                                        key={index}
                                        status={item.status}
                                        img={item.img}
                                        price={item.price}
                                        selling={item.selling}
                                    >
                                        {item.title}
                                    </CardProduct>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default HomePage;
