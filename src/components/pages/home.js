import Header from "../layout/header";
import CardHead from "../ui/cardHeader";
import CardCategory from "../ui/cardCategory";
import CardFlashSale from "../ui/cardFlashSale";
import CardProduct from "../ui/cardProduct";

function HomePage() {
    const product = [
        {
            title: "name Product",
            selling: "0",
            price: "0",
            status: {
                bracket: "",
                cod: true,
            },
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s",
            element: <div>halo</div>
        },
    ];

    const productTerlaris = [
        {
            title: "name Product",
            img: ""
        }
    ];

    const flashSale = [
        {
            price: "0",
            img:""
        }
    ]
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
                                
                                    <div key={index} className="card w-1/6 h-60 p-2 bg-[#ffffff] flex flex-col gap-4 text-start">
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
