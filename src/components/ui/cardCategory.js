function CardCategory({ children, url = "#",title }) {
    return (
        <div
            id="card"
            className="w-[10%] h-1/2 flex justify-center items-center box-border p-2"
        >
            <a href={url} className="w-full h-full text-black text-center">
                {children}
                <span>{title}</span>
            </a>
        </div>
    );
}

export default CardCategory;
