"use client";
import { useState } from "react";
import StatusDetailProduct from "~/components/ui/status/statusDetailProduct";
function AddProduct({ id }) {
    const [kuantitas, setKuantitas] = useState(1);
    console.log(id)
    return (
        <>
            <StatusDetailProduct title={"kuantitas"}>
                <form className="relative">
                    <button className="bg-slate-700" onClick={() => setKuantitas(kuantitas + 1)}>+</button>
                    <input
                        className="bg-slate-700 w-5"
                        type="number"
                        value={kuantitas}
                        onChange={(e) => setKuantitas(e.target.value)}
                    />
                    <button onClick={() => setKuantitas(kuantitas - 1)}>-</button>
                </form>
            </StatusDetailProduct>
            <button className="bg-[#F54330] text-xl">Masukan Keranjang</button>
            <button className="bg-[#F54330] text-xl">Beli Sekarang</button>
        </>
    );
}

export default AddProduct;
