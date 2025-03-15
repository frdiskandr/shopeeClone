function DescriptionProduct({ children }) {
    return (
        <div className="container w-full p flex flex-col">
            <span className="bg-gray-400 p-2 m-6">Descripsi Product</span>
            {children}
        </div>
    )
}

export default DescriptionProduct;