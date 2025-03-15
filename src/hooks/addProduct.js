"use client";
import { useState } from "react";
import StatusDetailProduct from "~/components/ui/status/statusDetailProduct";
function AddProduct({ id }) {
    const [kuantitas, setKuantitas] = useState(1);

    const handleAddToCart = () => {
        console.log("Produk berhasil ditambahkan ke keranjang.");
        console.log("ID Produk:", id);
        console.log("Kuantitas:", kuantitas);
        alert("Produk berhasil ditambahkan ke keranjang.");
    };

    const handleBuy = () => {
        console.log("Produk berhasil dibeli.");
        console.log("ID Produk:", id);
        console.log("Kuantitas:", kuantitas);
        alert("Produk berhasil dibeli.");
    };

    return (
        <div className="relative">
            <StatusDetailProduct title={"kuantitas"}>
                <div className="relative">
                    <button
                        className=" text-xl"
                        onClick={() => setKuantitas(kuantitas + 1)}
                    >
                        +
                    </button>

                    <input
                        className="bg-slate-700 relative text-center"
                        type="number"
                        value={kuantitas}
                        onChange={(e) => setKuantitas(e.target.value)}
                    />

                    <button
                        className="text-xl"
                        onClick={() => setKuantitas(kuantitas - 1)}
                    >
                        -
                    </button>
                </div>
            </StatusDetailProduct>
            <div className="flex flex-row gap-4">
                <button
                    onClick={handleAddToCart}
                    className="bg-[#FFF5F1] border border-[#f54330] text-sm p-4"
                    style={{ color: "#f54330" }}
                >
                    Masukan Keranjang
                </button>
                <button
                    onClick={handleBuy}
                    className="bg-[#f54330] text-sm p-4"
                    style={{ color: "white" }}
                >
                    Beli Sekarang
                </button>
            </div>
        </div>
    );
}

export default AddProduct;
