"use client";
function ImgProduct({ img }) {
    const data = img;

    const handleImgClick = (e) => {
        const img = e.target.src;
        document.getElementById("img").children[0].src = img;
    }
    return (
        <div className="w-full mx-auto">
            <div id="img" className="w-full p-2">
                <img
                    src={data[0]}
                    alt="img"
                    className="h-[450px] bg-black transition-all duration-1000 ease-in-out"
                    style={{
                        objectFit: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </div>
            <div id="slider" className="w-full flex text-center h-24 border p">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-1/5 h-full hover:border-2 cursor-pointer relative"
                        onClick={handleImgClick}
                    >
                        <img
                            src={item}
                            alt="img"
                            className="h-full bg-black"
                            style={{
                                objectFit: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImgProduct;
