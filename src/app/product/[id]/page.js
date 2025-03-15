import DescriptionProduct from "~/components/ui/descriptionProduct";
import ImgProduct from "~/components/ui/imgProduct";
import Bracket from "~/components/ui/status/bracket";
import ReportLink from "~/components/ui/status/Report";
import StatusDetailProduct from "~/components/ui/status/statusDetailProduct";
import AddProduct from "~/hooks/addProduct";

function DetailProduct({ params }) {
    const id = params.id;
    const imgProduct = [
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://papayabali.co.id/images/blog/blog-img-1.jpg",
        "https://www.fujitsu.com/global/imagesgig5/img-teaser-banner-products-800x450px_tcm100-7543214_tcm100-6286607-32.jpg",
    ];
    return (
        <div className="w-full text-black">
            <div className="container mx-auto">
                <div
                    className="container mx-auto flex flex-row bg-white relative mt-3 rounded shadow-md"
                    id="card"
                >
                    <section id="content-img" className=" w-[40%] p-2">
                        <ImgProduct img={imgProduct} />
                    </section>
                    <section className="w-[60%] p-4">
                        <div className="flex flex-col h-full">
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
                            <div className="flex flex-col gap-2 m-4 ">
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
                            <span className="text-base font-bold">
                                title{id}
                            </span>
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
                <section id="description" className="w-full relative m-3">
                    <DescriptionProduct>
                        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry. Lorem Ipsum has
                        been the industrys standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum. Why
                        do we use it? It is a long established fact that a
                        reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using Content
                        here, content here, making it look like readable
                        English. Many desktop publishing packages and web page
                        editors now use Lorem Ipsum as their default model text,
                        and a search for lorem ipsum will uncover many web
                        sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes
                        on purpose (injected humour and the like). Where does it
                        come from? Contrary to popular belief, Lorem Ipsum is
                        not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over
                        2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word
                        in classical literature, discovered the undoubtable
                        source. Lorem Ipsum comes from sections 1.10.32 and
                        1.10.33 of de Finibus Bonorum et Malorum The Extremes
                        of Good and Evil by Cicero, written in 45 BC. This book
                        is a treatise on the theory of ethics, very popular
                        during the Renaissance. The first line of Lorem Ipsum,
                        Lorem ipsum dolor sit amet.., comes from a line in
                        section 1.10.32. The standard chunk of Lorem Ipsum used
                        since the 1500s is reproduced below for those
                        interested. Sections 1.10.32 and 1.10.33 from de
                        Finibus Bonorum et Malorum by Cicero are also
                        reproduced in their exact original form, accompanied by
                        English versions from the 1914 translation by H.
                        Rackham.
                    </DescriptionProduct>
                </section>
            </div>
        </div>
    );
}

export default DetailProduct;
