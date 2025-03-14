import Bracket from "~/components/ui/status/bracket";
import ReportLink from "~/components/ui/status/Report";
import StatusDetailProduct from "~/components/ui/status/statusDetailProduct";
import AddProduct from "~/hooks/addProduct";

function DetailProduct({ params }) {
    const id = params.id;
    return (
        <div className="w-full text-black">
            <div className="container mx-auto">
                <div
                    className="container mx-auto flex flex-row bg-white relative mt-3 rounded shadow-md"
                    id="card"
                >
                    <section id="content-img" className=" w-[40%] p-2">
                        <div id="img" className="w-full p-2">
                            <img
                                src=""
                                alt="img"
                                className="h-[450px] bg-black"
                                style={{
                                    objectFit: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />
                        </div>
                        <div
                            id="slider"
                            className="w-full  text-center h-24 bg-slate-600 p-2"
                        >
                            <h3>Slider</h3>
                        </div>
                    </section>
                    <section className="w-[60%] p-4">
                        <div className="flex flex-col">
                            <div id="title">
                                <div>
                                    <span className="text-3xl ">title</span>
                                </div>
                                <section
                                    id="status"
                                    className="flex flex-row justify-between text-md"
                                >
                                    <div className="flex flex-row gap-2">
                                        <div className="border-r border-gray-400">
                                            <span className="mr-2">
                                                status penjualan
                                            </span>
                                        </div>
                                        <div>0 sold</div>
                                    </div>
                                    <ReportLink />
                                </section>
                            </div>
                            <div className="text-[#F54330] text-3xl m-4">
                                Rp.<span>10.000.000</span>
                            </div>
                            <div className="flex flex-col gap-2 m-4">
                                <div id="card" className="flex flex-col">
                                    <StatusDetailProduct
                                        title={"cicilan"}
                                        value={"24x Rp. 1.000.000"}
                                    />
                                    <StatusDetailProduct
                                        title={"kondisi"}
                                        value={"Baru"}
                                    />
                                    <StatusDetailProduct
                                        title={"berat"}
                                        value={"1.000 gram"}
                                    />
                                    <AddProduct id={id} />
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </section>
                </div>
                <section id="seller" className="w-full">
                    <div className="flex flex-row w-full gap-5 items-center">
                        <div id="img" className="w-10 flex flex-col">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa30xJnyEK3lZdIF9FUge70VonEog0j88kXQ&s"
                                alt="img"
                                className="w-[50px] h-[50px] bg-black"
                                style={{
                                    objectFit: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />
                            <Bracket>Seler</Bracket>
                        </div>
                        <div className="w-[20%] flex flex-col">
                            <span className="text-base font-bold">title{id}</span>
                            <span>status aktif</span>
                            <div className="flex gap-2">
                                <Bracket>Chat Sekarang</Bracket>
                                <Bracket>Hubungi Penjual</Bracket>
                            </div>
                        </div>
                        {/* <div className="w-[30%] flex flex-col">
                            <StatusDetailProduct title={"penilaian"} value={"0"} />
                            <StatusDetailProduct title={"stock"} value={"10"} />
                        </div> */}
                        
                    </div>
                </section>
            </div>
        </div>
    );
}

export default DetailProduct;
