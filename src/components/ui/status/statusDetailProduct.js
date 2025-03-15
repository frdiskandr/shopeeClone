"use client";
function StatusDetailProduct({ title, value, children }) {
    return (
        <table className="flex flex-row w-full text-black">
            <tr className="flex flex-row w-full text-black">
                <td className="w-[15%]">
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <span className="text-gray-500">{title}</span>
                        </div>
                    </div>
                </td>
                <td className="w-[70%]">
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <span className="mr-2">
                                {children ? children : value}
                            </span>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    );
}

export default StatusDetailProduct;
