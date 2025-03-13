import Bracket from "./status/bracket";
import StatusCod from "./status/StatusCod";

function CardProduct({ img, children, price, selling="0", status:{bracket="", cod=false} }) {
    return (
        <div id="card" className="w-[20%] h-[300px] p-2">
        <div className="h-full flex flex-col justify-between p-2 border-2 bg-white hover:border-[#f54330] rounded-sm transition ">
            <img
                src={img}
                alt="product"
                className="w-[188px] h-[60%] bg-[#f54330]"
                style={{ objectFit: "cover" }}
            />
            <div className="flex flex-col gap-2">
                <div className="h-10 w-full overflow-hidden">
                    <span className="text-sm  ">
                        {children}
                    </span>
                </div>
                <div
                    id="status"
                    className="h-5 w-full flex flex-wrap gap-1 items-center"
                >
                    {/* status */}
                    {bracket && <Bracket>{bracket}</Bracket>}
                    {cod && <StatusCod />}
                </div>
                <div
                    id="price"
                    className="flex w-full justify-between"
                >
                    <span className="text-[#f54330] text-sm font-bold">
                        Rp.{" "}
                        <span className="text-base">
                            {price}
                        </span>
                    </span>
                    <div className="self-end">
                        {`${selling} Terjual`}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardProduct;