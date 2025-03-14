const { default: Header } = require("~/components/layout/header");

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="max-w-[1100px] mx-auto">{children}</div>
        </>
    );
}

export default Layout;
