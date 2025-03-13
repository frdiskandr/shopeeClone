function CardFlashSale({ img, price }) {
    return (
        <div className="card w-1/6 h-60 p-6 bg-[#ffffff] flex flex-col gap-4 text-center">
            <img src={img} alt="product" className="w-full h-[80%]" />
            <span className="text-[#FA5330]">{`Rp. ${price}`}</span>
            <div
                id="stock"
                className="w-full rounded-lg h-5 bg-[#FFBDA6] relative text-center"
            >
                <div
                    id="progres"
                    className="bg-[#FA5330] absolute top-0 left-0 w-[50%] h-5 rounded-lg"
                ></div>
                <span className="relative">Stock Terbatas</span>
            </div>
        </div>
    );
}

export default CardFlashSale;
